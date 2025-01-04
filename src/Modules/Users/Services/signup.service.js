import UserModel from "../../../DB/Models/user.model.js";

const signupRouter = async (req, res) => {
  try {
    const { user_name, email, password, age, gender } = req.body;

    if (!user_name || !email || !password || !age || !gender) {
      return res.status(400).json({
        message: "All data must be required..",
      });
    }

    const existEmail = await UserModel.findOne({
      where: { email },
    });
    if (existEmail)
      return res.status(400).json({
        message: "Email already exist.. try another email",
      });

    const newUser = await UserModel.create({
      user_name,
      email,
      password,
      age,
      gender,
    });

    res.status(201).json({
      message: "User Created successfully...✅",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      error: "Server error... try later",
    });
    console.log("error", error);
  }
};

export default signupRouter;
