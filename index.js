const express = require('express')
require('express-group-routes')
const bodyParser = require('body-parser')


const app = express()
 
app.use(bodyParser.json())
const PORT= process.env.PORT || 5000

const transactionController = require('./controller/transactions')
const menuController = require('./controller/menus')
const categoryController = require('./controller/categories')
const orderController = require('./controller/orders')


app.group("/api/v1", (router) => {

    //API TRANSACTION
    router.post('/transaction', transactionController.store)
    router.get('/transactions', transactionController.index)
    router.get('/transaction/:id', transactionController.show)
    router.patch('/transaction/:id', transactionController.update)
    // router.post('/orderbytransaction', transactionController.s)

    //API ORDER
    router.post('/order', orderController.store)
    router.get('/orders', orderController.index)
    router.get('/order/:id', orderController.show)
    router.get('/order/transaction/:id', orderController.getByTransId)
    router.patch('/order/:id', orderController.update)

    //API CATEGORY
    router.get('/categories', categoryController.index)
    router.get('/category/:id', categoryController.show)
    router.post('/category', categoryController.store)

    //API MENU
    router.get('/menus', menuController.indexAll)
    router.get('/menus/:id', menuController.index)
    router.get('/menu/:id', menuController.show)
    router.post('/menu', menuController.store)
    
})

app.listen(PORT, () => console.log(`listening on port ${PORT}!`))