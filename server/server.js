import express from "express";
import cors from "cors";

const server = express();
const PORT = 8000;

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/uploads', express.static(path.join('uploads')));

server.use('/join', joinRouter);
server.use('/upload', uploadRouter);

server.listen(PORT, () => {
  console.log(`server start --->> ${PORT}`);
})