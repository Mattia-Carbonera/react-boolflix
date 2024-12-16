import { useState } from "react";

export default function Card({ image, title, originalTitle, language, rate }) {
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

  const originPathImage = "http://image.tmdb.org/t/p/w342/";

  const newRating = parseInt(rate / 2);

  return (
    <div className="card">
      <img src={image ? originPathImage + image : "/placeholder.png"} alt="" />
      <ul>
        <li>Titolo: {title}</li>
        <li>Titolo originale: {originalTitle}</li>
        <li>
          Lingua:
          {language}
          <img src={nation}></img>
          {}
        </li>
        <li>
          <span>
            <i class={`fa-${newRating > 0 ? "solid" : "regular"} fa-star`}></i>
          </span>
          <span>
            <i class={`fa-${newRating > 1 ? "solid" : "regular"} fa-star`}></i>
          </span>
          <span>
            <i class={`fa-${newRating > 2 ? "solid" : "regular"} fa-star`}></i>
          </span>
          <span>
            <i class={`fa-${newRating > 3 ? "solid" : "regular"} fa-star`}></i>
          </span>
          <span>
            <i class={`fa-${newRating > 4 ? "solid" : "regular"} fa-star`}></i>
          </span>
        </li>
      </ul>
    </div>
  );
}
