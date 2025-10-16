import "./MainPage.css";
import { Main } from "./Main";
import { useState } from "react";
export function MainPage({ data, setData }) {
  const [inputValue, setInputValue] = useState("");
  function updateValue(event) {
    setInputValue(event.target.value);
  }
  function sendMessage() {
    setData([
      ...data,
      {
        text: inputValue,
        sender: "robot",
      },
    ]);
    setInputValue("");
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
