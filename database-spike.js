const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

return database.raw(`SELECT m.id, m.name, f.id as food_id, f.name as food_name, f.calories
       FROM meals m
       INNER JOIN meal_foods mf
       ON mf.meal_id = m.id
       INNER JOIN foods f
       ON mf.food_id = f.id
       GROUP BY m.id, f.id
       ORDER BY m.id`)
.then((data) => {
  console.log(data.rows)
process.exit()
})
