import Card from "./Card";

// importo l'API
import { MoviesContext } from "../../Contexts/MovieContext";

export default function Main() {
  const { searchResult, searchTvResult } = MoviesContext();
  console.log(searchResult);
  console.log(searchTvResult);

  return (
    <main>
      <div className="container main-container">
        <div className="movie-container">
          <h2>Movie</h2>
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
                />
              ))}
          </div>
        </div>

        <div className="tvseries-container">
          <h2>TV series</h2>
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
                />
              ))}
          </div>
        </div>
        <div className="tv-container"></div>
      </div>
    </main>
  );
}
