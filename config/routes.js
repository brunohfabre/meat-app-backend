const express = require('express')

module.exports = function(server) {

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //Rotas restaurants
    const restaurantService = require('../api/restaurant/restaurantService')
    restaurantService.register(router, '/restaurants')

    //Rotas menus
    const menuService = require('../api/menu/menuService')
    menuService.register(router, '/menus')

    //Rotas reviews
    const reviewService = require('../api/review/reviewService')
    reviewService.register(router, '/reviews')
}
