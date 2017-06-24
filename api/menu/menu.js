const restful = require('node-restful')
const mongoose = restful.mongoose

const menuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    imagePath: { type: String, required: true },
    restaurantId: { type: String, required: true }
})

module.exports = restful.model('Menu', menuSchema )
