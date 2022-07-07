import express from "express";
import gameRouter from "./Game.routes";

const serverRouter = express();

serverRouter.route("/").get((_, res) => {
  res.status(200).json({ message: "Hello" });
});

serverRouter.use("/game", gameRouter);

serverRouter.use("*", (_, res) => {
  res.status(404).json({ message: "Not found" });
});

export default serverRouter;
