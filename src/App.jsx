import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./components/Main";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="total-container">
      <Sidebar show={show} setShow={setShow} />
      <Main show={show} />
    </div>
  );
}

export default App;
