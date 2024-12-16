import Card from "./Card";

// importo l'API
import { MoviesContext } from "../../Contexts/MovieContext";

export default function Main() {
  const { searchResult } = MoviesContext();
  console.log(searchResult);

  return (
    <main>
      <div className="container main-container">
        <div className="movie-container">
          <h2>Movie</h2>
          <div className="card-container">
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
