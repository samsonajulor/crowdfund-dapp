import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"
import ConnectionProvider from "./context/connection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ConnectionProvider>
            <App />
        </ConnectionProvider>
    </React.StrictMode>
);
