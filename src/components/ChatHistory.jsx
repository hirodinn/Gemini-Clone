import "./ChatHistory.css";
export function ChatHistory({ historyData, sendMessage }) {
  return (
    <div className="history">
      {historyData.map((eachHistory) => {
        return (
          <div
            key={crypto.randomUUID()}
            className="each-history"
            onClick={() => {
              sendMessage(eachHistory.text, true);
            }}
          >
            <img src="box-icons/message.png" />
            {eachHistory.shortText}
          </div>
        );
      })}
    </div>
  );
}
