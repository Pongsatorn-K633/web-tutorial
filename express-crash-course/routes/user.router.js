import userController from "../controller/user.controller.js"
import checkMiddleware from "../middleware/check.middleware.js";

const userRouter = (router) => {
    router.get('/user', userController.getUsers);
    router.get('/user/:id', checkMiddleware(), userController.getUserById);
    router.post('/user', userController.createUsers);
    router.put('/user/:id', userController.updateUser);
    router.delete('/user/:id', userController.deleteUser);
}

export default userRouter;