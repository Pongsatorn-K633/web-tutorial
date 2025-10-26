import homeController from '../controllers/home.controller.js';

const homeRouter = (router) => {
    router.get('/', homeController.home)
}

export default homeRouter;
