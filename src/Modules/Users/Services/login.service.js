import UserModel from "../../../DB/Models/user.model.js";

const loginRouter = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({
        maessage: "Both of email and password are required..",
      });
    const user = await UserModel.findOne({ where: { email } });
    if (!user)
      return res.status(401).json({
        message: "Email or Password Wrong.. try agin",
      });
    if (user.password !== password)
      return res.status(401).json({
        message: "Email or Password Wrong.. try agin",
      });
    res.status(202).json({
      message: "Login Successfully",
      id: user.id,
      name: user.user_name,
      email: user.email,
      gender: user.gender,
      age: user.age,
    });
  } catch (error) {
    res.status(500).json({
      error: "Server Error try later..!.",
    });
    console.log("error", error);
  }
};

export default loginRouter;