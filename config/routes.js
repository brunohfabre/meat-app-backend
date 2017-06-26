const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

    /*
     * Rotas abertas
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/AuthService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)

    /*
     * Rotas protegidas por Token JWT
     */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

	protectedApi.use(auth)

    //Rotas restaurants
    const restaurantService = require('../api/restaurant/restaurantService')
    restaurantService.register(protectedApi, '/restaurants')

    //Rotas menus
    const menuService = require('../api/menu/menuService')
    menuService.register(protectedApi, '/menus')

    //Rotas reviews
    const reviewService = require('../api/review/reviewService')
    reviewService.register(protectedApi, '/reviews')
}
