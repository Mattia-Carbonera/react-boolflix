import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// importo il context
import { MovieContextProvider } from "../Contexts/MovieContext";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <MovieContextProvider>
    <App />
  </MovieContextProvider>
  // </StrictMode>
);
