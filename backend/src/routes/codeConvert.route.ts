import express, { Router } from "express";
import outputFromOpneAI from "../controller/getPromptData";

const codeConverteRoute: Router = express.Router();

codeConverteRoute.post("/", async (req, res) => {
  try {
    const { code, language } = req.body;
    let prompt = `Convert the following code into ${language}: ${code}`;
    let convertedCode = await outputFromOpneAI(prompt);
    res.status(200).json({ code: convertedCode });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default codeConverteRoute;
