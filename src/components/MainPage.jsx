import "./MainPage.css";
export function Main() {
  return (
    <main>
      <header>
        <p>Gemini</p>
        <img src="logo.jpeg" />
      </header>
      <footer>
        <div className="footer-top">
          <input type="text" placeholder="Enter a promt here" />
          <img src="footer-icons/gallery.png" />
          <img src="footer-icons/voice.png" />
        </div>
        <div className="footer-bottom">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </div>
      </footer>
    </main>
  );
}
