import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./LoadMessage.css";
export function LoadMessage({ data, containerRef }) {
  useEffect(() => {
    const containerElem = containerRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [data, containerRef]);
  return (
    <>
      {data.map((eachData) => {
        return (
          <div
            className={eachData.sender === "user" ? "message right" : "message"}
            key={crypto.randomUUID()}
          >
            {eachData.sender !== "user" && <img src="robot.jpeg" />}
            <div className="message-text">
              {eachData.sender === "user" ? (
                <p>{eachData.text}</p>
              ) : (
                <ReactMarkdown>{String(eachData.text || "")}</ReactMarkdown>
              )}
            </div>
            {eachData.sender === "user" && <img src="logo.jpeg" />}
          </div>
        );
      })}
    </>
  );
}
