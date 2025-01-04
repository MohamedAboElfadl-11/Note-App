import UserModel from "../../../DB/Models/user.model.js";

const updateUserRouter = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { user_name, age, gender, password } = req.body;
        const user = await UserModel.findByPk(id)
        if (!user)
            return res.status(404).json({
                message: "user id not found"
            });
        await UserModel.update({
            user_name,
            password,
            gender,
            age
        }, {
            where: { id }
        })
        const updatedUser = await UserModel.findByPk(id);
        res.status(200).json({
            message: "User updated successfully...",
            new_data: {
                id: updatedUser.id,
                email: updatedUser.email,
                name: updatedUser.user_name,
                gender: updatedUser.gender,
                age: updatedUser.age,
            }
        });
    } catch (error) {
        res.status(500).json({
            error: "Server error... try later",
        });
        console.log("error", error);
    }
};

export default updateUserRouter;
