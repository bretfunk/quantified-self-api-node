let Food = require('../models/food')

const index = (req, res) => {
  Food.all()
    .then((data) => {
      res.json(data.rows)
    })
    .catch(() => {
      res.status(404).json({message: "Not found"})
    })
}

const show = (req, res) => {
  let id = req.params.id
  Food.find(id)
    .then((data) => {
      res.json(data.rows)
    })
    .catch(() => {
      res.status(404).json({message: "Not Found"})
    })
}

const create = (req, res) => {
  let food = {
    name: req.param('name'),
    calories: req.param('calories'),
    created: new Date,
    updated: new Date
  }
  Food.create(food)
    .then((data) => {
      let id = data.rows[0].id
      return Food.find(id)
    })
      .then((data) => {
        res.status(201).json(data.rows)
      })
      .catch(() => {
        res.status(404).json({"Error": "Item not found"})
      })
}

const update = (req, res) => {
  let key = Object.keys(req.body)[0]
  let body = req.body[key]
  let id = req.params.id
  let attrs = [key, body, new Date, id]
  Food.update(attrs)
    .then((data) => {
      res.redirect(200, `/foods/${id}`)
    })
    .catch(() => {
      res.status(404).json({message: "Something went wrong"})
    })
}

const destroy = (req, res) => {
  let id = req.params.id
  Food.destroy(id)
    .then((data) => {
      res.status(204).json({})
    })
    .catch(() => {
      res.status(404).json({"Error": "Can't find specified food to delete"})
    })
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
