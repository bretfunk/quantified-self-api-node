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

//app.get('/', function(request, response) {
  //database('meals').innerJoin('meal_foods', 'meals.id', 'meal_foods.meal_id')
    //.innerJoin('foods', 'foods.id', 'meal_foods.food_id')
    //.select([
        //'meals.id AS mealId',
        //'meals.name AS mealName',
        //database.raw('ARRAY_AGG(foods.name)'
     //)])
    //.groupBy('meals.id', 'meals.name')
      //.then((data) => {
      //response.json(data.rows)
        //process.exit()
        //})
//})

  app.get('/api/v1/foods', function(request, response) {
    database.raw('SELECT * FROM foods ORDER BY id')
      .then((data) => {
        response.json(data.rows)
          process.exit()
      })
  })

app.get('/api/v1/foods/:id', function(request, response) {
  database.raw('SELECT * FROM foods WHERE id=?', [request.params.id])
    .then((data) => {
      response.json(data.rows)
        process.exit()
    })
})

app.post('/api/v1/foods', function(request, response) {
  database.raw('INSERT INTO foods (name, calories, created_at, updated_at) VALUES (?, ?, ?, ?)',
      [request.param('name'), request.param('calories'), new Date, new Date])
    .then(() => {
      return database.raw('SELECT * FROM foods ORDER BY id')
    })
  .then((data) => {
    response.json(data.rows)
    process.exit()
  })
})

app.patch('/api/v1/foods/:id', function(request, response) {
  //{ food: { name: "Name of Food", calories: "Calories here" } }
  //if not sucessful a 300 status code will be returned
})

app.delete('/api/v1/foods/:id', function(request, response) {
  database.raw('DELETE FROM foods WHERE id=?', [request.params.id])
    .then(() => {
      return database.raw('SELECT * FROM foods ORDER BY id')
    })
  .then((data) => {
    response.json(data.rows)
    process.exit()
  })
})



if (!module.parent) {
  app.listen(app.get('port'), function() {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`)
  })
}




module.exports = app
