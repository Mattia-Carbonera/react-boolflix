import { useState } from "react";

export default function Card({ title, originalTitle, language, rate }) {
  let nation = "";

  if (language == "it") {
    nation = "IT";
  } else if (language == "en") {
    nation = "GB";
  } else if (language == "es") {
    nation = "ES";
  } else if (language == "fr") {
    nation = "FR";
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
          <img src={`https://flagsapi.com/${nation}/shiny/16.png`}></img>
          {}
        </li>
        <li>Voto: {rate}</li>
      </ul>
    </div>
  );
}
