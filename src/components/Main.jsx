import "./Main.css";
import { Welcome } from "./Welcome";
import { LoadMessage } from "./LoadMessage";
export function Main({ data }) {
  return (
    <div className="main-container">
      {data.length ? <LoadMessage data={data} /> : <Welcome />}
    </div>
  );
}
