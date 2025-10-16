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
            {eachHistory.shortText}
          </div>
        );
      })}
    </div>
  );
}
