import User from "../../models/user.js";
import { encrypt, compare } from "../../services/dataEncryption.js";
import jsonwebtoken from "jsonwebtoken";
const jwt = jsonwebtoken;

export const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const passwordHash = await encrypt(password);
    const registerUser = await User.create({
      email,
      username,
      password: passwordHash,
    });
    res.send({ data: registerUser });
  } catch (error) {
    res.status(404);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    const userToken = {
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(userToken, process.env.SECRET);

    const checkPassword = await compare(password, user.password);
    if (checkPassword) {
      res.send({
        data: user,
        token: token,
      });
      return;
    }

    if (!(user && checkPassword)) {
      res.status(409);
      res.send({
        error: "Invalid user or password",
      });
      return;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getUsers = (req, res) => {
  let users = User.find({});
  res.send(users);
};

export const deleteUser = (req, res) => {
  const { username } = req.body;
  User.findOneAndRemove({ username });
};
