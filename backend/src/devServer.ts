import "dotenv/config";
import cors from "cors";
import express from "express";
import serverRouter from "./Server.routes";

const app = express();
const port = process.env.PORT ?? 5001;

app.use(cors());
app.use(serverRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
