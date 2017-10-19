let Meal = require('../models/meal')

const index = (req, res) => {
  let breakfast = {foods: []}
  let lunch = {foods: []}
  let dinner = {foods: []}
  let snack = {foods: []}
  let display = [breakfast, lunch, dinner, snack]
  Meal.all()
    .then((data) => {
      data.rows.forEach((meal) => {
        if (meal.name === "Breakfast") {
          breakfast.name = meal.name
          breakfast.id = meal.id
          breakfast.foods.push({id: meal.food_id,
                                name: meal.food_name,
                                calories: meal.calories})
        } else if (meal.name === "Lunch") {
          lunch.name = meal.name
          lunch.id = meal.id
          lunch.foods.push({id: meal.food_id,
                            name: meal.food_name,
                            calories: meal.calories})
        } else if (meal.name === "Dinner") {
          dinner.name = meal.name
          dinner.id = meal.id
          dinner.foods.push({id: meal.food_id,
                             name: meal.food_name,
                             calories: meal.calories})
        } else {
          snack.name = meal.name
          snack.id = meal.id
          snack.foods.push({id: meal.food_id,
                             name: meal.food_name,
                             calories: meal.calories})
        }
      })
    })
    .then((data) => {
      res.status(200).json(display)
    })
    .catch(() => {
      res.status(404).json({message: "Not Found"})
    })
}

const show = (req, res) => {
  let mealId = req.params.meal_id
  meal = {foods: []}
  Meal.find(mealId)
    .then((data) => {
      meal.id = data.rows[0].id
      meal.name = data.rows[0].name
      return Meal.foods(meal.id)
    })
    .then((data) => {
      meal.foods = data.rows
    })
    .then(() => {
      res.status(200).json(meal)
    })
    .catch(() => {
      res.status(404).json({message: "Not Found"})
    })
}

module.exports = {
  index,
  show
}
