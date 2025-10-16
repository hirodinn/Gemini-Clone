import "./ChatHistory.css";
export function ChatHistory({ historyData }) {
  return (
    <div className="history">
      {historyData.map((eachHistory) => {
        return <div className="each-history">{eachHistory}</div>;
      })}
    </div>
  );
}
