import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";

const container = document.getElementById("chart-container");

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error("El contenedor con id 'chart-container' no se encontró en el DOM.");
}
