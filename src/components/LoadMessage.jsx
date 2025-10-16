import "./LoadMessage.css";
export function LoadMessage({ data }) {
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
