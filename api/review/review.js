const restful = require('node-restful')
const mongoose = restful.mongoose

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: Date, default: new Date(), required: true},
    restaurantId: { type: String, required: true }
})

module.exports = restful.model('Review', reviewSchema )
