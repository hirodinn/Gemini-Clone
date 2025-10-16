import "./MainPage.css";
import { Main } from "./Main";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export function MainPage({ data, setData }) {
  const [inputValue, setInputValue] = useState("");
  const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-pro" });

  function updateValue(event) {
    setInputValue(event.target.value);
  }
  async function sendMessage() {
    if (!inputValue.trim()) return;
    const newMessages = [...data, { text: inputValue, sender: "user" }];
    setData(newMessages);
    setInputValue("");
    console.log(import.meta.env.VITE_GEMINI_API_KEY);

    try {
      const result = await model.generateContent(inputValue);
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

  return (
    <main>
      <header>
        <p>Gemini</p>
        <img src="logo.jpeg" />
      </header>
      <Main data={data} />
      <footer>
        <div className="footer-top">
          <input
            type="text"
            placeholder="Enter a promt here"
            onChange={updateValue}
            value={inputValue}
          />
          <img src="footer-icons/gallery.png" />
          <img src="footer-icons/voice.png" />
          <img
            src="footer-icons/send.png"
            onClick={sendMessage}
            className={inputValue === "" ? "hidden" : ""}
          />
        </div>
        <div className="footer-bottom">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </div>
      </footer>
    </main>
  );
}
