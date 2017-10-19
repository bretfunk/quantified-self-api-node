let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let FoodsController = require('./lib/controllers/foods-controller')
let MealsController = require('./lib/controllers/meals_controller')
let MealFoodsController = require('./lib/controllers/meal-foods-controller')

app.use(bodyParser.json()) //parses JSON
app.use(bodyParser.urlencoded({ extended: true })) //parses HTML forms

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Quantified Self'

app.get('/api/v1/foods', FoodsController.index)

app.get('/api/v1/foods/:id', FoodsController.show)

app.post('/api/v1/foods', FoodsController.create)

app.put('/api/v1/foods/:id', FoodsController.update)

app.delete('/api/v1/foods/:id', FoodsController.destroy)

app.get('/api/v1/meals', MealsController.index)

app.get('/api/v1/meals/:meal_id', MealsController.show)

app.get('/api/v1/meals/:meal_id/foods', MealFoodsController.index)

app.post('/api/v1/meals/:meal_id/foods/:id', MealFoodsController.create)

app.delete('/api/v1/meals/:meal_id/foods/:id', MealFoodsController.destroy)


if (!module.parent) {
  app.listen(app.get('port'), function() {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`)
  })
}

module.exports = app
