import { useState } from "react";

export default function Card({
  image,
  title,
  originalTitle,
  language,
  rate,
  overview,
}) {
  const lenguageFlag = (lang) => {
    if (lang == "en") return "GB";
    return lang.toUpperCase();
  };

  const originPathImage = "http://image.tmdb.org/t/p/w342/";

  const newRating = parseInt(rate / 2);

  return (
    <div className="card">
      <div className="production-image">
        <img
          src={image ? originPathImage + image : "/placeholder.png"}
          alt="backgrownd image"
        />
      </div>
      <div className="content-card">
        <ul>
          <li>
            <strong>Titolo: </strong>
            {title}
          </li>
          <li>
            <strong>Titolo originale: </strong>
            {originalTitle}
          </li>
          <li className="language-item">
            <strong>Lingua: </strong>
            {language}
            <img
              src={`https://flagsapi.com/${lenguageFlag(
                language
              )}/shiny/16.png`}
              alt="lenguageFlag"
            />
            {}
          </li>
          <li>
            <span>
              <i
                class={`fa-${newRating > 0 ? "solid" : "regular"} fa-star`}
              ></i>
            </span>
            <span>
              <i
                class={`fa-${newRating > 1 ? "solid" : "regular"} fa-star`}
              ></i>
            </span>
            <span>
              <i
                class={`fa-${newRating > 2 ? "solid" : "regular"} fa-star`}
              ></i>
            </span>
            <span>
              <i
                class={`fa-${newRating > 3 ? "solid" : "regular"} fa-star`}
              ></i>
            </span>
            <span>
              <i
                class={`fa-${newRating > 4 ? "solid" : "regular"} fa-star`}
              ></i>
            </span>
          </li>
          <li>
            <p>{overview}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
