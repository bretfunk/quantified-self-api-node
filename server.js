let express = require('express')
let app = express()
let bodyParser = require('body-parser')
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

app.use(bodyParser.json()) //parses JSON
app.use(bodyParser.urlencoded({ extended: true })) //parses HTML forms

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Quantified Self'

app.get('/api/v1/foods', function(req, res) {
  database.raw('SELECT * FROM foods ORDER BY id')
    .then((data) => {
      res.json(data.rows)
        //process.exit()
    })
})

//returns 404 if not found
app.get('/api/v1/foods/:id', function(req, res) {
  database.raw('SELECT * FROM foods WHERE id=?', [req.params.id])
    .then((data) => {
      res.json(data.rows)
        process.exit()
    })
})

//returns 400 if not sucessful, both name and calories are required fields
app.post('/api/v1/foods', function(req, res) {
  database.raw('INSERT INTO foods (name, calories, created_at, updated_at) VALUES (?, ?, ?, ?)',
      [req.param('name'), req.param('calories'), new Date, new Date])
    .then(() => {
      return database.raw('SELECT * FROM foods ORDER BY id')
    })
  .then((data) => {
    res.json(data.rows)
      //process.exit()
  })
})

//this technically says patch in the spec
//if not sucessful 400 is returned
app.put('/api/v1/foods/:id', function(req, res) {
    let name = req.query.name
    let calories = req.query.calories
    let id = req.params.id
    let attrs = [name, calories, new Date, id]

    database.raw('UPDATE foods SET name = ?, calories = ? updated_at = ? WHERE id = ?', attrs)
    //{ food: { name: "Name of Food", calories: "Calories here" } }
    //if not sucessful a 300 status code will be returned
})

//404 if food not found
app.delete('/api/v1/foods/:id', function(req, res) {
  database.raw('DELETE FROM foods WHERE id=?', [req.params.id])
    .then(() => {
      return database.raw('SELECT * FROM foods ORDER BY id')
    })
  .then((data) => {
    res.json(data.rows)
      //process.exit()
  })
})

//not outputting foods
app.get('/api/v1/meals', function(req, res) {
  //need to fix
  //database.raw('SELECT * FROM meals ORDER BY id')
  //database.raw(`SELECT meals.*, foods.* FROM meals
  //INNER JOIN meal_foods ON meals.id = meal_foods.meal_id
  //INNER JOIN foods ON meal_foods.food_id = foods.id
  //GROUP BY meals.id, foods.id ORDER BY meals.id
  //`)
  database.raw(`SELECT * FROM meals`)
    .then((data) => {
      let id = data.rows[4].id
      database.raw(`SELECT foods.id, foods.name, foods.calories FROM foods
          INNER JOIN meal_foods ON foods.id = meal_foods.food_id
          INNER JOIN meals ON meals.id = meal_foods.meal_id
          WHERE meals.id = ?`, [id])
    })
      .then((data) => {
        res.json(data.rows)
      //   res.json(data.rows)
          //process.exit()
      })
})

app.get('/api/v1/meals/:meal_id', function(req, res) {
  let mealId = req.params.meal_id
  meal = {foods: []}
  database.raw(`SELECT id, name FROM meals WHERE id = ?`, [mealId])
    .then((data) => {
      meal.id = data.rows[0].id
      meal.name = data.rows[0].name
      return database.raw(`SELECT f.id, f.name, f.calories FROM foods f
                    INNER JOIN meal_foods mf ON mf.food_id = f.id
                    WHERE mf.meal_id = ?`, [mealId])
    })
    .then((data) => {
      meal.foods = data.rows
    })
    .then(() => {
      res.status(200).json(meal)
    })
})

//not outputing foods
//if meal isn't found returns 404
app.get('/api/v1/meals/:meal_id/foods', function(req, res) {
  console.log(req.params.meal_id)
  //(data)base.raw('SELECT * FROM meals WHERE id=?', [req.params.meal_id])
  database.raw(`SELECT * FROM meals
      INNER JOIN meal_foods ON meals.id = meal_foods.meal_id
      INNER JOIN foods ON meal_foods.food_id = foods.id WHERE meals.id=?`, [req.params.meal_id])
    .then((data) => {
      res.json(data.rows)
        //process.exit()
    })
})

//if cannot be found returns 404
app.post('/api/v1/meals/:meal_id/foods/:id', function(req, res) {
  let mealId = req.params.meal_id
  let foodId = req.params.id
  let created_at = new Date
  let updated_at = new Date
  database.raw(`INSERT INTO meal_foods (meal_id, food_id, created_at, updated_at)
                VALUES (?, ?, ?, ?)`, [mealId, foodId, created_at, updated_at])
    .then((data) => {
      res.status(201).json({ message: "Successfully added food to meal"})
    })
    .catch(() => {
      res.status(404).json({ message: "Cannot find requested meal and/or food to add food to specified meal"})
    })
})

//if cannot be found returns 404
app.delete('/api/v1/meals/:meal_id/foods/:id', function(req, res) {
  let mealId = req.params.meal_id
  let foodId = req.params.id
  database.raw(`DELETE FROM meal_foods
                WHERE meal_id = ? AND food_id = ?`, [mealId, foodId])
    .then((data) => {
      res.status(200).json({ message: "Successfully removed food to meal"})
    })
    .catch(() => {
      res.status(404).json({ message: "Cannot find requested meal and/or food to delete"})
    })
})


if (!module.parent) {
  app.listen(app.get('port'), function() {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`)
  })
}




module.exports = app
