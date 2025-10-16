import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { MainPage } from "./components/MainPage";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
function App() {
  const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-pro" });
  async function sendMessage(myText) {
    if (!myText.trim()) return;
    const newMessages = [...data, { text: myText, sender: "user" }];
    setData(newMessages);
    setHistoryData([...historyData, myText]);
    try {
      const result = await model.generateContent(myText);
      const aiResponse = result.response.text();

      setData([...newMessages, { text: aiResponse, sender: "robot" }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setData([
        ...newMessages,
        {
          text: "Sorry, there was a problem connecting to Gemini.",
          sender: "computer",
        },
      ]);
    }
  }
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  return (
    <div className="total-container">
      <Sidebar show={show} setShow={setShow} historyData={historyData} />
      <MainPage show={show} sendMessage={sendMessage} data={data} />
    </div>
  );
}

export default App;
