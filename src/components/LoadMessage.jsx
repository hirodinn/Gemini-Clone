import { useEffect } from "react";
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
            <p>{eachData.text}</p>
            {eachData.sender === "user" && <img src="logo.jpeg" />}
          </div>
        );
      })}
    </>
  );
}
