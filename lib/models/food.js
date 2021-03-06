const environment   = process.env.NODE_ENV || 'development'
const configuration =  require('../../knexfile')[environment]
const database      = require('knex')(configuration)

const all = () => {
  return database.raw(`SELECT id, name, calories FROM foods`)
}

const find = (id) => {
  return database.raw(`SELECT id, name, calories FROM foods WHERE id = ?`, [id])
}

const create = (food) => {
  return database.raw(`INSERT INTO foods (name, calories, created_at, updated_at)
                       VALUES (?, ?, ?, ?)
                       RETURNING id, name, calories`, [food.name, food.calories, food.created, food.updated])
}

const update = (food) => {
  if (food[0] === "name") {
    return database.raw('UPDATE foods SET name = ?, updated_at = ? WHERE id = ?',
                      [food[1], food[2], food[3]])
  } else {
    return database.raw('UPDATE foods SET calories = ?, updated_at = ? WHERE id = ?',
                      [food[1], food[2], food[3]])
  }
}

const destroy = (id) => {
  return database.raw('DELETE FROM foods WHERE id=?', [id])
}

const last = () => {
  return database.raw(`SELECT * FROM foods ORDER BY id DESC LIMIT 1`)
}

module.exports = {
  all,
  find,
  create,
  update,
  destroy,
  last
}
