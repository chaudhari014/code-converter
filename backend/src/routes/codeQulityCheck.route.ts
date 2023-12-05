import express, { Router } from "express";
import outputFromOpneAI from "../controller/getPromptData";

const codeQualityRoute: Router = express.Router();

codeQualityRoute.post("/", async (req, res) => {
  try {
    const { code } = req.body;

    let prompt = `Please do the quality check of given code. Keep the reponse in given format.
            Format: 
            "
            Summary :
            
            1. Code Consistency :
            2. Code Performance : 
            3. Code Documentation :
            4. Error Handling: 
            "
            So score each criteria from out of 100 percent.

            ****

            Summary:
            refers to the overall feedback on quality check.

            Code Consistency: 
            ***
            refers to checking for indusrty level coding style such as naming conventions, duplication, code formatting.
            ###
            Code Performance:
            ***
            refers to where the code includes optimized algorithms or data structures.
            ###
            Code Documentation:
            ***
            refers to checking if the code contains proper comments/documentation or not.
            ###
            Error Handling:
            ***
            refers to check for whether the code handle errors or not.
            ###
            *Note: Provide the response in the format which I have provided with proper markdown language. Provide spaces between each criteria.*


            ###
            Code : ${code}`;
    let qualityResult = await outputFromOpneAI(prompt);
    res.status(200).json({ code: qualityResult });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default codeQualityRoute;
