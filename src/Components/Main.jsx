import Card from "./Card";

export default function Main() {
  return (
    <main>
      <div className="container main-container">
        <div className="movie-container">
          <h2>Movie</h2>
          <div className="card-container">
            <Card />
          </div>
        </div>
        <div className="tv-container"></div>
      </div>
    </main>
  );
}
