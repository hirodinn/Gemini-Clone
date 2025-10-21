import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { MainPage } from "./components/MainPage";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
function App() {
  const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-pro" });
  async function sendMessage(myText, fromHistory = false) {
    if (!myText.trim()) return;
    const newMessages = fromHistory
      ? [
          {
            text: myText,
            sender: "user",
          },
        ]
      : [...data, { text: myText, sender: "user" }];
    setData(newMessages);
    setData([
      ...newMessages,
      {
        text: (
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia
            voluptatum laudantium et, hic a dolorem facilis in tenetur expedita.
          </span>
        ),
        sender: "robot",
      },
    ]);
    const historyShort =
      myText.trim().length < 14
        ? myText.trim()
        : myText.slice(0, 14).trim() + " ...";
    if (!fromHistory)
      setHistoryData([
        ...historyData,
        {
          text: myText,
          shortText: historyShort,
        },
      ]);
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
  function reset() {
    setShow(true);
    setData([]);
    setHistoryData([]);
  }
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={isDark ? "total-container dark" : "total-container"}>
      <Sidebar
        show={show}
        setShow={setShow}
        historyData={historyData}
        sendMessage={sendMessage}
        reset={reset}
      />
      <MainPage
        show={show}
        sendMessage={sendMessage}
        data={data}
        setIsDark={setIsDark}
        isDark={isDark}
      />
    </div>
  );
}

export default App;
