// import logo from "./logo.svg";
import "./App.css";
import QRCode from "react-qr-code";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const [qrVisible, setQrVisible] = useState(false);

  const generateQrCodeHandler = () => {
    if (!value) {
      return;
    }

    setQrVisible(true);
  };

  return (
    <div className="container">
      <h1>ReactJS QR Code Generate 🔥</h1>
      <input
        type="text"
        placeholder="Type a URL..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={generateQrCodeHandler}>Generate QR Code</button>

      {qrVisible && (
        <div className="qr-code-container">
          <QRCode value={value} size={300} />
        </div>
      )}
    </div>
  );
}

export default App;
