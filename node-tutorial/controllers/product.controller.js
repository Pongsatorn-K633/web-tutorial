const productController = {
    getProduct: async (req, res) => {
        try {
            res.send('Hello PRODUCT Endpoint')
        } catch (err) {
            console.error("Error fetching users:", err);
            res.status(500).json({ message: "Internal Server Error: getUser" });
        }
        
    },
    getProductById: async (req, res) => {
        try {
            res.send('Hello Single PRODUCT Endpoint')
        } catch (err) {
            console.error("Error fetching users:", err);
            res.status(500).json({ message: "Internal Server Error: getUserById" });
        }
    },
    createProduct: async (req, res) => {
        try {
            res.send('Hello Create PRODUCT Endpoint')
        } catch (err) {
            console.error("Error fetching users:", err);
            res.status(500).json({ message: "Internal Server Error: createUser" });
        }
    },
    updateProduct: async (req, res) => {
        try {
            res.send('Hello update PRODUCT Endpoint')
        } catch (err) {
            console.error("Error fetching users:", err);
            res.status(500).json({ message: "Internal Server Error: updateUser" });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            res.send('Hello delete PRODUCT Endpoint')
        } catch (err) {
            console.error("Error fetching users:", err);
            res.status(500).json({ message: "Internal Server Error: deleteUser" });
        }
    }
}


export default productController;