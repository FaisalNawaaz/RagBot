import axios from "axios";

export const sendMessageToAI = async (model, message) => {
  const response = await axios.post("http://localhost:5000/api/chat", {
    model,
    message,
  });

  return response.data.reply;
};
