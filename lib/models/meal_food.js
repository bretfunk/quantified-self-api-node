const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../knexfile')[environment]
const database = require('knex')(configuration)

const create = (meal) => {
  return database.raw(`INSERT INTO meal_foods (meal_id, food_id, created_at, updated_at)
                VALUES (?, ?, ?, ?)`, [meal.mealId, meal.foodId, meal.created_at, meal.updated_at])
}

const destroy = (mealId, foodId) => {
  return database.raw(`DELETE FROM meal_foods
                       WHERE meal_id = ? AND food_id = ?`, [mealId, foodId])
}

module.exports = {
  create, destroy
}
