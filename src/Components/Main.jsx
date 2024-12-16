import Card from "./Card";

// importo l'API
import { MoviesContext } from "../../Contexts/MovieContext";

export default function Main() {
  const { searchResult } = MoviesContext();
  //   console.log(searchResult);

  return (
    <main>
      <div className="container main-container">
        <div className="movie-container">
          <h2>Movie</h2>
          <div className="card-container">
            {searchResult?.length > 0 &&
              searchResult.map((movie) => (
                <Card
                  key={movie.id}
                  title={movie.title}
                  originalTitle={movie.original_title}
                  language={movie.original_language}
                  rate={movie.vote_average}
                />
              ))}
            {/* {searchResult.map((movie) => {
              console.log("ok");
            })} */}
          </div>
        </div>
        <div className="tv-container"></div>
      </div>
    </main>
  );
}
