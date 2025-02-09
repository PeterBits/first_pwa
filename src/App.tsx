import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((reg) => console.log("Service Worker registrado:", reg))
        .catch((err) =>
          console.log("Error en el registro del Service Worker:", err)
        );
    });
  }

  return (
    <>
      <p>Esta es mi primera PWA...</p>
      <p>Vamos a ver que tal</p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        add
      </button>
      <p>{count}</p>
    </>
  );
}

export default App;
