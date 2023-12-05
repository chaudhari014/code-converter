import openai from "../config/openAI";

async function outputFromOpneAI(prompt: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful code conversion assistant.You are a code convert,debugger and code qualit check bot. You have provide the requested prompt to debug, convert or quality",
        },
        {
          role: "user",
          content: `${prompt}`,
        },
      ],
      max_tokens: 100,
      temperature: 0.8,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 1,
    });
    const convertedCode = response.choices[0].message.content;
    return convertedCode;
  } catch (error: any) {
    return error;
  }
}
export default outputFromOpneAI;
