const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [false, "Please enter a product name"]
        },
        id: {
            type: Number,
            required: false,
            default: 0
        },
        marks: {
            type: Number,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product;