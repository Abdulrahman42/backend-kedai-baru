const models = require('../models')
const Transaction = models.transactions
const Order = models.orders



exports.index = (req, res) => {
    Transaction.findAll({
        include: [{
            model: Order
        }]
    })
        .then(transaction => res.status(200).send(transaction))
        .catch(err => res.status(400).send(err))
}

exports.show = (req, res) => {
    const id = req.params.id

    Transaction.findOne({
        where: { id }, include: [{
            model: Order
        }]
    })
        .then(transaction => {
            if (transaction) {
                return res.status(200).send(transaction)
            } else {
                return res.status(400).send({ message: 'transaction not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    const data = req.body
    console.log(data)
    Transaction.create(data)
        .then(transaction => res.status(201).send(transaction))
        .catch(err => res.status(400).send(err))
}

// exports.patch = (req, res) => {
//     Transaction.update(
//         req.body, {
//             where: { id: req.params.id }
//         }
//     ).then(data => {
//         res.send({
//             message: "Berhasil"
//         })
//     })
// }
exports.update = (req, res) => {
    Transaction.findOne({ where: { id: req.params.id } })
        .then(transaction => {
            return transaction.update(req.body)
                .then(transaction => res.status(200).send(transaction))
                .catch(err => res.status(400).send(err))
        })
        .catch(err => res.status(400).send(err))
}

exports.delete = (req, res) => {
    const id = req.params.id

    Transaction.destroy({ where: { id } })
        .then(transaction => {
            if (transaction) {
                return res.status(204).send({ message: 'transaction deleted' })
            } else {
                return res.status(400).send({ message: 'transaction not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}