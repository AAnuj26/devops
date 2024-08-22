import express from "express";
import cors from "cors";
import helmet from "helmet";
import csurf from "csurf";

const app = express();

app.use(helmet());

app.use(cors());

app.use(csurf());

app.get("/", function (req, res) {
  return res.json({ message: "Hello World" });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
