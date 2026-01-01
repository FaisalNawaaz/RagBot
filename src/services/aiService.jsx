import axios from "axios";

export const sendMessageToAI = async (model, message) => {
  const response = await axios.post(
    "https://ragbot-backend.vercel.app/api/chat",
    {
      model,
      message,
    }
  );

  return response.data.reply;
};
