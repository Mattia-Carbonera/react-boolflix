import { useState } from "react";

export default function Card({ title, originalTitle, language, rate }) {
  let nation = "";

  if (language == "it") {
    nation = "https://flagsapi.com/IT/shiny/16.png";
  } else if (language == "en") {
    nation = "https://flagsapi.com/GB/shiny/16.png";
  } else if (language == "es") {
    nation = "https://flagsapi.com/ES/shiny/16.png";
  } else if (language == "fr") {
    nation = "https://flagsapi.com/FR/shiny/16.png";
  } else {
    nation = "";
  }

  return (
    <div className="card">
      <ul>
        <li>Titolo: {title}</li>
        <li>Titolo originale: {originalTitle}</li>
        <li>
          Lingua:
          {language}
          <img src={nation}></img>
          {}
        </li>
        <li>Voto: {rate}</li>
      </ul>
    </div>
  );
}
