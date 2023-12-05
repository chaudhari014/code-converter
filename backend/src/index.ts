import {
  Express,
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler,
} from "express";
import codeQualityRoute from "./routes/codeQulityCheck.route";
import codeConverteRoute from "./routes/codeConvert.route";
import codeDebuggerRoute from "./routes/codeDebugge.route";
import axios from "axios";
const express = require("express");
const cors = require("cors");

const app: Express = express();

app.use(express.json());

app.use(cors());

app.use("/convert", codeConverteRoute);
app.use("/debug", codeDebuggerRoute);
app.use("/qualitycheck", codeQualityRoute);

app.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).json({ mesage: "Welcome to code Converter" });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});
// async function fetchCodeFromGitHub(githubUrl: string) {
//   // Use GitHub API or other methods to fetch code from the provided URL
//   // Example using axios:
//   const response = await axios.get(githubUrl);
//   const decodedContent = Buffer.from(response.data.content, "base64").toString(
//     "utf-8"
//   );
//   return decodedContent;
// }

// app.post("/fetch-code", async (req, res) => {
//   const filePath = req.body.githubUrl;
//   const { repo, owner } = req.body;
//   const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

//   try {
//     const code = await fetchCodeFromGitHub(apiUrl);
//     res.send(code);
//   } catch (error) {
//     res.status(500).send("Error fetching code from GitHub.");
//   }
// });

app.use((req, res) => {
  res.status(404).send("404 Not Found: This route does not exist");
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("500 Internal Server Error");
});

app.listen(7080, () => {
  try {
    console.log("Server is running");
  } catch (err: any) {
    console.log(err.message);
  }
});
