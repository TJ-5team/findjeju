import express from "express";
import cors from "cors";



server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const PORT = 8000;
const server = express();


server.listen(PORT, () => {
  console.log(`server start --->> ${PORT}`);
})