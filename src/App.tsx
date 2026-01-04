import "./App.css";
import Alert from "./Alert";
import { useState } from "react";
import { Visibility } from "./visibility";

function App() {
  const [visibility, setVisibility] = useState<Visibility>(Visibility.hidden);

  return (
    <>
      <Alert
        text="hello"
        visibility={visibility}
        setVisibility={setVisibility}
      />
      <button
        className="app-button"
        onClick={() => setVisibility(Visibility.visible)}
      >
        Warning! do NOT click
      </button>
    </>
  );
}

export default App;
