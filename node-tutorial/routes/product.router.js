import productController from '../controllers/product.controller.js';

const productRouter = (router) => {
    router.get('/product', productController.getProduct),
    router.get('/product/:id', productController.getProductById),
    router.post('/product', productController.createProduct),
    router.put('/product/:id', productController.updateProduct),
    router.delete('/product/:id', productController.deleteProduct)
}


// router.post('/product', (req, res) => {
//     res.send('Product Post')
// })

// router.put('/product/:id', (req, res) => {
//     res.send('Product Put')
// })

// router.delete('/product/:id', (req, res) => {
//     res.json({
//         name: 'tai', 
//         id: 555
//     })
// }) 

export default productRouter;
