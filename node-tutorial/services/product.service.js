import Product from '../models/Product.js';

const productService = {
    getAllProducts: async () => {
        return await Product.find();
    },
    getProductById: async (id) => {
        return await Product.findById(id);
    },
    createProduct: async (name, detail, price) => {
        const newProduct = new Product({
            name,
            detail,
            price
        });
        return await newProduct.save();
    },
    updateProduct: async (id, name, detail, price) => {
        return await Product.findByIdAndUpdate(
            id, 
            {
                $set: {
                    name,
                    detail,
                    price
                }            
            }, 
            { new: true }
        );
    },
    deleteProduct: async (id) => {
        return await Product.findByIdAndDelete(id);
    }  
};

export default productService;