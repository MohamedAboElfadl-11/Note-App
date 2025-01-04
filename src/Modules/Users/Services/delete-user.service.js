import UserModel from "../../../DB/Models/user.model.js";

const deleteUserRouter = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const user = await UserModel.findByPk(id)
        if (!user) {
            return res.status(404).json({
                message: "User id not found.."
            })
        }
        await UserModel.destroy({
            where: { id }
        })
        res.status(200).json({
            message: "User deleted successfully.."
        })
    } catch (error) {
        res.status(500).json({
            error: "Server error... try later",
        });
        console.log("error", error);
    }

}

export default deleteUserRouter