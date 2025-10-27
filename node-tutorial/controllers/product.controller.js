import productService from "../services/product.service.js";

const productController = {
    getProduct: async (req, res) => {
        try {
            const products = await productService.getAllProducts();
            // res.send('Hello PRODUCT Endpoint')
            res.status(200).json(products);
        } catch (err) {
            console.error("Error fetching products:", err);
            res.status(500).json({ message: "Internal Server Error: getProduct" });
        }
        
    },
    getProductById: async (req, res) => {
        try {
            const productID = req.params.id;
            const product = await productService.getProductById(productID);
            if (!product) {
                return res.status(404).json({ message: "Product not found (24 letters, but Invalid ID)" });
            }
            res.status(200).json(product);
        } catch (err) {
            console.error("Error fetching products:", err);
            res.status(500).json({ message: "Internal Server Error: getProductById" });
        }
    },
    createProduct: async (req, res) => {
        try {
            const {name, detail, price} = req.body;
            const newProduct = await productService.createProduct(name, detail, price);
            res.status(200).json(newProduct);
        } catch (err) {
            console.error("Error fetching products:", err);
            res.status(500).json({ message: "Internal Server Error: createProduct" });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const productID = req.params.id;
            const {name, detail, price} = req.body;
            const updatedProduct = await productService.updateProduct(productID, name, detail, price);
            res.status(200).json(updatedProduct);
        } catch (err) {
            console.error("Error fetching products:", err);
            res.status(500).json({ message: "Internal Server Error: updateProduct" });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const productID = req.params.id;
            const deletedProduct = await productService.deleteProduct(productID);
            if (!deletedProduct) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json({ message: `User deleted successfully`, product: deletedProduct?.name, price: deletedProduct?.price });
        } catch (err) {
            console.error("Error fetching products:", err);
            res.status(500).json({ message: "Internal Server Error: deleteProduct" });
        }
    }
}


export default productController;