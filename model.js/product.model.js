import mongoose, { Schema } from 'mongoose'


const quantityPriceSchema = Schema({
    quantity: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const productSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    product_id: {
        type: String,
        required: true,
    },
    Image: {
        type: String, // images is handled by cloudinary
    },
    Image1: {
        type: String,  // images is handled by cloudinary
    },
    Image2: {
        type: String  // images is handled by cloudinary
    },
    Image3: {
        type: String,  // images is handled by cloudinary
    },
    desc: {
        type: String,
        required: true,
    },
    quantityPrices: [quantityPriceSchema],
    category: {
        type: String,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 1000,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }
});

// Exporting the model
export const Product = mongoose.model("Product", productSchema);