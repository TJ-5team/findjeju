import express from "express";
import cors from "cors";
import path from 'path';
import joinRouter from "./router/joinRouter.js";
import uploadRouter from "./router/uploadRouter.js";

const PORT = 8000;
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/uploads', express.static(path.join('uploads')));

server.use('/join', joinRouter);
server.use('/upload', uploadRouter);

server.listen(PORT, () => {
  console.log(`server start --->> ${PORT}`);
})