import { useState } from "react";
import "./App.css";

// importo il context
import { MovieContextProvider } from "../Contexts/MovieContext";

// importo l'API
import { MoviesContext } from "../Contexts/MovieContext";

function App() {
  const { provaApi, provaApiDue } = MoviesContext();
  return (
    <MovieContextProvider>
      <h1>Title</h1>
      <span>{provaApi}</span>
      <span>{provaApiDue}</span>
    </MovieContextProvider>
  );
}

export default App;
