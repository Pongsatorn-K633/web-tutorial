import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String,
    detail: {
        type: String,
    },
    price: {
        type: Number
    }
}, { timestamps: true })

const Product = mongoose.model("Product", productSchema);
export default Product;