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

const product = mongoose.model("Product", productSchema);
export default product;