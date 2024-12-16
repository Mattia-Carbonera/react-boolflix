import { useState } from "react";
import "./App.css";

// importo i componenti
import Header from "./Components/Header";
import Main from "./Components/Main";

// importo l'API
import { MoviesContext } from "../Contexts/MovieContext";

function App() {
  // const { provaApi } = MoviesContext();
  return (
    <>
      <Header />
      <Main />

      {/* <span>{provaApi}</span> */}
    </>
  );
}

export default App;
