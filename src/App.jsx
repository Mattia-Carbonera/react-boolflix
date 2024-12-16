import { useState } from "react";
import "./App.css";

// importo i componenti
import Header from "./Components/Header";
import Main from "./Components/Main";

// importo l'API
import { MoviesContext } from "../Contexts/MovieContext";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
