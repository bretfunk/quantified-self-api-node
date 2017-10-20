exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM meal_foods; DELETE FROM meals; DELETE FROM foods')
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
                  VALUES (?, ?, ?, ?)`, [8, 1, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [9, 1, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [10, 1, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [6, 2, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [11, 2, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [12, 2, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [1, 3, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [1, 3, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [9, 3, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [1, 4, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [1, 4, new Date, new Date]),
        knex.raw(`INSERT INTO meal_foods(food_id, meal_id, created_at, updated_at)
                  VALUES (?, ?, ?, ?)`, [5, 4, new Date, new Date])
      ])
    })
}
