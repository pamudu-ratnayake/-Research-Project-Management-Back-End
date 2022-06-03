const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.json());
app.use("/public/uploads", express.static(path.join(__dirname, "public/uploads")));

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  });

  app.listen(PORT, () => {
    console.log(`<=== Server is up and running on port ${PORT} ====>`);
  });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("        <=== Database connected ! ====>");
  console.log(`<=== Running on URL: http://localhost:${PORT} ====>`);
});

const authRoutes = require("./src/routes/admin/UserManagementRT");
app.use("/auth-user", authRoutes);

const AdminRoutes = require("./src/routes/admin/AdminManagementRT");
app.use("/admin", AdminRoutes);

const topicRouter = require("./src/routes/topicRouter/TopicRouter.js");
app.use("/researchTopic", topicRouter);
const staffMemberRouter = require("./src/routes/StaffRoutes/StaffDetailsRoutes.js");
app.use("/staffMember", staffMemberRouter);

const StudentRouter = require("./src/routes/StudentRoutes/StudentRoutes.js");
app.use("/student", StudentRouter);
const StudentGroupRouter = require("./src/routes/StudentRoutes/StudentGroupRoutes.js");
app.use("/studentgroup", StudentGroupRouter);
const TopicRouter = require("./src/routes/StudentRoutes/TopicRoutes.js");
app.use("/topic", TopicRouter);

// const ChatBox = require("./src/chat/ChatBox.js");
// app.use(ChatBox);


//----------- Chat Box -----------------

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:1234",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

// server.listen(8081, () => {
//   console.log("SERVER RUNNING");
// });
