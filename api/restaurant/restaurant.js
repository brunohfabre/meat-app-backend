const restful = require('node-restful')
const mongoose = restful.mongoose

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    deliveryEstimate: { type: String, required: true },
    rating: { type: String, required: true },
    imagePath: { type: String, required: true },
    about: { type: String, required: true },
    hours: { type: String, required: true }
})

module.exports = restful.model('Restaurant', restaurantSchema )
