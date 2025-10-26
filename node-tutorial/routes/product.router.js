import productController from '../controllers/product.controller.js';

const productRouter = (router) => {
    router.get('/product', productController.read),
    router.get('/product/:id', productController.read1)
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
