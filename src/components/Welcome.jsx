import "./Welcome.css";
export function Welcome() {
  return (
    <div className="welcome-container">
      <h1>Hello, Dev</h1>
      <h1>How can I help You Today</h1>
      <div className="box-container">
        <div className="box">
          <p>Suggest beautiful places to see on an upcoming road trip</p>
          <img src="box-icons/navigate.png" />
        </div>
        <div className="box">
          <p>Briefly summarize this concept: urban planning</p>
          <img src="box-icons/insight.png" />
        </div>
        <div className="box">
          <p>Brainstorm team bonding activities for our work retreat</p>
          <img src="box-icons/message.png" />
        </div>
        <div className="box">
          <p>Tell me about React js and React native</p>
          <img src="box-icons/code.png" />
        </div>
      </div>
    </div>
  );
}
