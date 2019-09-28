const models = require('../models')
const Category = models.categories
const Menu = models.menus

exports.index = (req, res) =>{
    Category.findAll({
        include: [{
            model:Menu
        }]
    })
        .then(categories => res.status(200).send(categories))
        .catch(err => exports.status(400).send(err))
}

exports.show = (req, res) => {
    const id = req.params.id

    Category.findOne({
        where: { id }, include: [{
            model: menu
        }]
    })
        .then(categories => {
            if (categories) {
                return res.status(200).send(categories)
            } else {
                return res.status(400).send({ message: 'categories not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    const data = req.body
    console.log(data)
    Category.create(data)
        .then(categories => res.status(201).send(categories))
        .catch(err => res.status(400).send(err))
}