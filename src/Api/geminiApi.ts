import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const generateGeminiResponse = async (message) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `You are a great thermal Professor Who is expert in anything releated to thermal specially peltier module and seeback effect

Only answer questions related to:
- Thermal Study
- seeback effect
- peltier module
- greetings (hi hello how are you etc)

If the user's input is irrelevant, respond with: "I can only assist with Thermal queries."
only reply within 50 words and dont use any type of text format

Now, analyze the following message and respond professionall:

"${message}"
`,
              },
            ],
          },
        ],
      }
    );

    const aiText =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I can only assist with job-related queries.";

    return { aiText };
  } catch (error) {
    console.error("Gemini API Error:", error.response?.data || error.message);
    return { aiText: "Error processing request. Please try again." };
  }
};
