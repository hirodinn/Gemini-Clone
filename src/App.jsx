import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { MainPage } from "./components/MainPage";

function App() {
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);
  return (
    <div className="total-container">
      <Sidebar show={show} setShow={setShow} />
      <MainPage show={show} data={data} setData={setData} />
    </div>
  );
}

export default App;
