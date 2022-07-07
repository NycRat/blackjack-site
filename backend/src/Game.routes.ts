import express from "express";

const gameRouter = express();

gameRouter
  .route("/id/:id")
  .get((req, res) => {
    // do stuff

    res.status(200).json({ message: "XD" });
  })
  .post((req, res) => {
    // do stuff
  });

export default gameRouter;
