import express from "express";
const app = express();
const port = 3000;

import connectDB from "./DB/Models/connection.js";
import userRouter from "./src/user/user.router.js";
import postRouter from "./src/post/post.router.js";

app.use(express.json());
app.use("/user", userRouter);
app.use("/post", postRouter);

connectDB();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
