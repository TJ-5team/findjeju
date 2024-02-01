import express from "express";
import cors from "cors";
import path from 'path';
import memberRouter from "./router/memberRouter.js";
import uploadRouter from "./router/uploadRouter.js";
import reviewRouter from "./router/reviewRouter.js";

const PORT = 8000;
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// server.use('/uploads', express.static(path.join('uploads')));
server.use(express.static(path.join('uploads')));
server.use('/member', memberRouter);
server.use('/upload', uploadRouter);
server.use('/review', reviewRouter);

server.listen(PORT, () => {
  console.log(`server start --->> ${PORT}`);
})

