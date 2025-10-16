import { useState } from "react";
import "./Sidebar.css";
export function Sidebar() {
  const [show, setShow] = useState(true);
  function toggleExpand() {
    setShow(!show);
  }
  return (
    <div className={show ? "side-bar expand-side-bar" : "side-bar"}>
      <div className="top-side-bar">
        <div className="humburger-icon" onClick={toggleExpand}>
          <img src="sidebar-icons/humburger.png" />
        </div>
        <div className="new-chat">
          <span>+</span>
          <p>New Chat</p>
        </div>
        <div className="recent-chat">
          <p>Recent</p>
          <div className="history"></div>
        </div>
      </div>
      <div className="bottom-side-bar">
        <div className="bottom-container">
          <div className="sidebar-help">
            <img src="sidebar-icons/help.png"></img>
            <p className={show && "show"}>Help</p>
          </div>
          <div className="sidebar-activity">
            <img src="sidebar-icons/activity.png"></img>
            <p className={show && "show"}>Activity</p>
          </div>
          <div className="sidebar-settings">
            <img src="sidebar-icons/settings.png"></img>
            <p className={show && "show"}>Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
