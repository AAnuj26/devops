import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(helmet());

app.use(cors());

app.get("/", function (req, res) {
  return res.json({ message: "Hello World" });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
