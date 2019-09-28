const models = require('../models')
const Order = models.orders
const Menu = models.menus


exports.index = (req, res) => {
    transactionId = req.params.id
    Order.findAll({ where: { transactionId } })
        .then(menu => res.status(200).send(menu))
        .catch(err => res.status(400).send(err))
}

exports.indexAll = (req, res) => {
    Order.findAll()
        .then(order => res.status(200).send(order))
        .catch(err => res.status(400).send(err))
}
exports.update = (req, res) => {
    Order.findOne({ where: {id: req.params.id }})
        .then(order => {
            return order.update(req.body)
                .then(order => res.status(200).send(order))
                .catch(err => res.status(400).send(err)) 
        })
        .catch(err => res.status(400).send(err))
}
exports.show = (req, res) => {
    const id = req.params.id

    Order.findOne({ where: { id } })
        .then(order => {
            if (order) {
                return res.status(200).send(order)
            } else {
                return res.status(400).send({ message: 'order not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    const data = req.body
    console.log(data)
    Order.bulkCreate(data)
        .then(order => res.status(201).send(order))
        .catch(err => res.status(400).send(err))
}
exports.getByTransId = (req, res) => {
    Order.findAll({
        include: [
            {
                model: Menu
            }
        ],
        where: { transactionId: req.params.id}
    })
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(err))
}
exports.delete = (req, res) => {
    const id = req.params.id

    Order.destroy({ where: { id } })
        .then(order => {
            if (order) {
                return res.status(204).send({ message: 'order deleted' })
            } else {
                return res.status(400).send({ message: 'order not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}
