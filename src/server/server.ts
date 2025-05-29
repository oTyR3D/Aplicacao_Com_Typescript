import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Eu vim fazer um anúncio!!!");
});

export { server };
