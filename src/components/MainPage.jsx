import "./MainPage.css";
import { Main } from "./Main";
export function MainPage({ data, setData }) {
  function sendMessage() {
    setData();
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
          <input type="text" placeholder="Enter a promt here" />
          <img src="footer-icons/gallery.png" />
          <img src="footer-icons/voice.png" />
          <img src="footer-icons/send.png" onClick={sendMessage} />
        </div>
        <div className="footer-bottom">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </div>
      </footer>
    </main>
  );
}
