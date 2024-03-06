import express from "express";
import dotenv from "dotenv";
import connectionDB from "./database/connectionDB.js";
import cookieParser from "cookie-parser";

import todosRoutes from "./routes/todos.js";
import usersRoutes from "./routes/users.js";
dotenv.config();
//instantiated express
const app = express();

//connecting the database
connectionDB();

//Created server

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// create
app.use("/api/todos", todosRoutes);
app.use("/api/users", usersRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on Port ${process.env.PORT}`)
);
