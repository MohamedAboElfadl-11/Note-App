import UserModel from "../../../DB/Models/user.model.js";

export const getAllUserRoute = async (req, res) => {
  try {
    const allUser = await UserModel.findAll({
      attributes: ["id", "user_name", "email", "age", "gender"],
    });
    if (allUser.length === 0)
      return res.status(404).json({
        message: "No users avaliable",
      });
    res.status(200).json({
      count: allUser.length,
      allUser,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error in server...",
    });
  }
};

export const getUserByIdRouter = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = await UserModel.findByPk(id);
    if (!user)
      return res.status(404).json({
        message: "User Not found..",
      });
    res.status(200).json({
      id: user.id,
      name: user.user_name,
      email: user.email,
      gender: user.gender,
      age: user.age,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error in server...",
    });
  }
};
