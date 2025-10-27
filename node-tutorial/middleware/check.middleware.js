const checkMiddleware = () => {
    return (req, res, next) => {
        const productId = req.params.id;
        if (productId.length !== 24) {
            return res.status(400).json({ message: "Invalid product ID format" });
        }
        next();
    }
}

export default checkMiddleware;