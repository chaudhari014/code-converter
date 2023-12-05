import express, { Router } from "express";
import outputFromOpneAI from "../controller/getPromptData";

const codeDebuggerRoute: Router = express.Router();

codeDebuggerRoute.post("/", async (req, res) => {
  try {
    const { code } = req.body;
    let prompt = `Debug the following code:\n\n${code}`;
    let debugCode = await outputFromOpneAI(prompt);
    res.status(200).json({ code: debugCode });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default codeDebuggerRoute;
