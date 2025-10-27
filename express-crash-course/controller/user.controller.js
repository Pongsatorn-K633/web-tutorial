import userService from "../services/user.service.js";

const userController = {
    getUsers: async (req, res) => {
        try{
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (err) {
            console.error("Error fetching users:", err);
            res.status(500).json({ message: err.message });
        }
    },
    getUserById: async (req, res) => {
        try{
            const userId = req.params.id;
            const user = await userService.getUserById(userId);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json(user);
        } catch (err) {
            console.error("Error fetching user:", err);
            res.status(500).json({ message: err.message +  "Tip: check id typo" });
        }
    },
    createUsers: async (req, res) => {
        try{
            const {name, age, phone} = req.body
            const newUser = await userService.createUsers(name, age, phone);
            res.status(201).json(newUser);
        } catch (err) {
            console.error("Error creating user:", err);
            res.status(500).json({ message: err.message });
        }
    },
    updateUser: async (req, res) => {
        try{
            const userId = req.params.id;
            const {name, age, phone} = req.body
            const updateUser = await userService.updateUser(userId, name, age, phone);
            res.status(201).json(updateUser);
        } catch (err) {
            console.error("Error updating user:", err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    },
    deleteUser: async (req, res) => {
        try{
            const userId = req.params.id;
            const deletedUser = await userService.deleteUser(userId);
            if (!deletedUser) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(201).json({ message: `User deleted successfully`, user: deletedUser?.name, age: deletedUser?.age });
        } catch (err) {
            console.error("Error deleting user:", err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

export default userController;