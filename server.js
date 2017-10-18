let express = require('express')
let app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.json()) //parses JSON
app.use(bodyParser.urlencoded({ extended: true })) //parses HTML forms

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Quantified Self'

app.get('/api/v1/foods', function(request, response) {
  response.send('all foods currently in database')
    //response.json({'name': 'Bret'}
})

app.get('/api/v1/foods/:id', function(request, response) {
  response.send('returns foods with that id, 404 if not found')
    //response.json({'name': 'Bret'}
})

app.post('/api/v1/foods', function(request, response) {
  response.json({})
    //needs 400 status code if unsucessful
})

app.patch('/api/v1/foods/:id', function(request, response) {
  //{ food: { name: "Name of Food", calories: "Calories here" } }
  //if not sucessful a 300 status code will be returned
})

app.delete('/api/v1/foods/:id', function(request, response) {
  //if food not found return a 404
})



if (!module.parent) {
  app.listen(app.get('port'), function() {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`)
  })
}




module.exports = app
