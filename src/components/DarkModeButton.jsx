import "./DarkModeButton.css";
export function DarkModeButton({ isDark, setIsDark }) {
  return (
    <button
      className="dark-mode-button"
      onClick={() => {
        setIsDark(!isDark);
      }}
    >
      DarkMode
    </button>
  );
}
