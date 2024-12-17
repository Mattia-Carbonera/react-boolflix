import Card from "./Card";

// QUI QUI QUI ------------------------------------

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

  return (
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

        <hr />

        <div className="tvseries-container">
          <div className={searchResult?.length > 0 ? "" : "d-none"}>
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
        <div className="tv-container"></div>
      </div>
    </main>
  );
}
