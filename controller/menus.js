const models = require('../models')
const Menu = models.menus

exports.index = (req, res) => {
    categoryId = req.params.id
    Menu.findAll({ where: {
        categoryId
    }}).then(menu => res.status(200).send(menu))
    .catch(err => res.status(400).send(err))
}

exports.indexAll = (req, res) => {
    Menu.findAll()
    .then(menu => res.status(200).send(menu))
    .catch(err => res.status(400).send(err))
}

exports.show = (req, res) => {
    const id = req.params.id

    Menu.findOne({ where: { id } })
        .then(menu => {
            if (menu) {
                return res.status(200).send(menu)
            } else {
                return res.status(400).send({ message: 'menu not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    const data = req.body
    console.log(data)
    Menu.create(data)
        .then(menu => res.status(201).send(menu))
        .catch(err => res.status(400).send(err))
}

exports.delete = (req, res) => {
    const id = req.params.id

    menu.destroy({ where: { id } })
        .then(menu => {
            if (menu) {
                return res.status(204).send({ message: 'menu deleted' })
            } else {
                return res.status(400).send({ message: 'menu not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}