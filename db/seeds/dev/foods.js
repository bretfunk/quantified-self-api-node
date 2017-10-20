exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meal_foods RESTART IDENTITY; TRUNCATE meals RESTART IDENTITY; TRUNCATE foods RESTART IDENTITY')
    .then(() => {
      return Promise.all([
        knex.raw(`INSERT INTO foods(name, calories, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, ["Banana", 150, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, ["Bagel Bites - Four Cheese", 650, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, ["Chicken Burrito", 800, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, ["Grapes", 180, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, ["Blueberry Muffins", 450, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, ["Yogurt", 550, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, ["Macoroni and Cheese", 950, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, ["Granola Bar", 200, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, ["Gum", 50, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, ["Cheese", 400, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, ["Fruit Snack", 120, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, ["Apple", 220, new Date, new Date]),
        knex.raw(`INSERT INTO meals(name, created_at, updated_at)
                  VALUES (?, ?, ?)`, ["Breakfast", new Date, new Date]),
        knex.raw(`INSERT INTO meals(name, created_at, updated_at)
                  VALUES (?, ?, ?)`, ["Lunch", new Date, new Date]),
        knex.raw(`INSERT INTO meals(name, created_at, updated_at)
                  VALUES (?, ?, ?)`, ["Dinner", new Date, new Date]),
        knex.raw(`INSERT INTO meals(name, created_at, updated_at)
                  VALUES (?, ?, ?)`, ["Snack", new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [1, 1, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [4, 1, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [11, 1, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [6, 1, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [9, 2, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [4, 2, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [2, 2, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [9, 2, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [4, 3, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [2, 3, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [9, 3, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [3, 3, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [12, 4, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [7, 4, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [9, 4, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [10, 4, new Date, new Date])

      ])
    })
}
