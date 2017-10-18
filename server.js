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

//app.get('/', function(req, res) {
  //database('meals').innerJoin('meal_foods', 'meals.id', 'meal_foods.meal_id')
    //.innerJoin('foods', 'foods.id', 'meal_foods.food_id')
    //.select([
        //'meals.id AS mealId',
        //'meals.name AS mealName',
        //database.raw('ARRAY_AGG(foods.name)'
     //)])
    //.groupBy('meals.id', 'meals.name')
      //.then((data) => {
      //res.json(data.rows)
        //process.exit()
        //})
//})

  app.get('/api/v1/foods', function(req, res) {
    database.raw('SELECT * FROM foods ORDER BY id')
      .then((data) => {
        res.json(data.rows)
          process.exit()
      })
  })

app.get('/api/v1/foods/:id', function(req, res) {
  database.raw('SELECT * FROM foods WHERE id=?', [req.params.id])
    .then((data) => {
      res.json(data.rows)
        process.exit()
    })
})

app.post('/api/v1/foods', function(req, res) {
  database.raw('INSERT INTO foods (name, calories, created_at, updated_at) VALUES (?, ?, ?, ?)',
      [req.param('name'), req.param('calories'), new Date, new Date])
    .then(() => {
      return database.raw('SELECT * FROM foods ORDER BY id')
    })
  .then((data) => {
    res.json(data.rows)
    process.exit()
  })
})

app.patch('/api/v1/foods/:id', function(req, res) {
  debugger
    let name = req.query.name
    let calories = req.query.calories
    let id = req.params.id
    console.log(req.query.name)
    console.log(req.query.calories)
    console.log(req.params.id)

    //database.raw('UPDATE foods SET ? = ?, ? = ? WHERE id = ?')
  //{ food: { name: "Name of Food", calories: "Calories here" } }
  //if not sucessful a 300 status code will be returned
})

app.delete('/api/v1/foods/:id', function(req, res) {
  database.raw('DELETE FROM foods WHERE id=?', [req.params.id])
    .then(() => {
      return database.raw('SELECT * FROM foods ORDER BY id')
    })
  .then((data) => {
    res.json(data.rows)
    process.exit()
  })
})



if (!module.parent) {
  app.listen(app.get('port'), function() {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`)
  })
}




module.exports = app
