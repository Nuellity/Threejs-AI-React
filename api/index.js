import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRoute from "./routes/dalle.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/dalle", dalleRoute);

const port = 4000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
