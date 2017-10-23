let MealFood = require('../models/meal_food')
let Meal = require('../models/meal')

const index = (req, res) => {
  let id = req.params.meal_id
    console.log(id)
  Meal.foods(id)
    .then((data) => {
      res.json(data.rows)
    })
    .catch(() => {
      res.status(404).json({ message: "Cannot find requested meal and/or foods"})
    })
}

const create = (req, res) => {
  let meal = {
    mealId: req.params.meal_id,
    foodId: req.params.id,
    created_at: new Date,
    updated_at: new Date
  }

  MealFood.create(meal)
    .then((data) => {
      res.status(201).json({ message: "Successfully added food to meal"})
    })
    .catch(() => {
      res.status(404).json({ message: "Cannot find requested meal and/or food to add food to specified meal"})
    })
}

const destroy = (req, res) => {
  let mealId = req.params.meal_id
  let foodId = req.params.id
  MealFood.destroy(mealId, foodId)
    .then((data) => {
      res.status(200).json({ message: "Successfully removed food to meal"})
    })
    .catch(() => {
      res.status(404).json({ message: "Cannot find requested meal and/or food to delete"})
    })
}

module.exports = {
  index,
  create,
  destroy
}
