import Card from "./Card";

import { useEffect, useState } from "react";

// importo l'API
import { MoviesContext } from "../../Contexts/MovieContext";

export default function Main() {
  const {
    searchResult,
    searchTvResult,
    moviePage,
    tvPage,
    handleMovieChangePage,
  } = MoviesContext();

  //   gestisco il layover
  const [overlayTimer, setOverlayTimer] = useState("active");
  useEffect(() => {
    setTimeout(() => {
      setOverlayTimer("d-none");
    }, 2500);
  }, []);

  return (
    <>
      <main>
        <div className="container main-container">
          <div className="movie-container">
            <div className={searchResult?.length > 0 ? "" : "d-none"}>
              <div className="movie-header-container">
                <h2>Movie</h2>
                <div className="page-button">
                  <button value={"decr-movie"} onClick={handleMovieChangePage}>
                    Pecedente
                  </button>
                  <span>Pagina: {moviePage}</span>
                  <button value={"incr-movie"} onClick={handleMovieChangePage}>
                    Successivo
                  </button>
                </div>
              </div>
            </div>
            <div className={"card-container"}>
              {searchResult?.length > 0 &&
                searchResult.map((movie) => (
                  <Card
                    key={movie.id}
                    image={movie.poster_path}
                    title={movie.title}
                    originalTitle={movie.original_title}
                    language={movie.original_language}
                    rate={movie.vote_average}
                    overview={movie.overview}
                  />
                ))}
            </div>
          </div>

          <hr className={searchTvResult?.length > 0 ? "" : "d-none"} />

          <div className="tvseries-container">
            <div className={searchTvResult?.length > 0 ? "" : "d-none"}>
              <div className="tv-header-container">
                <h2>TV series</h2>
                <div className="page-button">
                  <button value={"decr-tv"} onClick={handleMovieChangePage}>
                    Precedente
                  </button>
                  <span>Pagina: {tvPage}</span>
                  <button value={"incr-tv"} onClick={handleMovieChangePage}>
                    Successivo
                  </button>
                </div>
              </div>
            </div>

            <div className="card-container">
              {searchTvResult?.length > 0 &&
                searchTvResult.map((tv) => (
                  <Card
                    key={tv.id}
                    image={tv.poster_path}
                    title={tv.title}
                    originalTitle={tv.original_name}
                    language={tv.original_language}
                    rate={tv.vote_average}
                    overview={tv.overview}
                  />
                ))}
            </div>
          </div>

          <div className="no-results-message">
            <div
              className={
                searchResult.length > 0 || searchTvResult > 0 ? "d-none" : ""
              }
            >
              <h2>Nessun risultato</h2>
              <h3>Cerca qualcosa!</h3>
              <span>
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </div>
        </div>
      </main>
      <div className={overlayTimer}>
        <div className={"layover"}>
          <div className="logo-container">
            <h1>BOOLFLIX</h1>
          </div>
        </div>
      </div>
    </>
  );
}
