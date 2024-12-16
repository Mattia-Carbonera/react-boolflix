import { MoviesContext } from "../../Contexts/MovieContext";

export default function Header() {
  const { hadleInputChange, handleFormSubmit } = MoviesContext();

  return (
    <header>
      <div className="logo-container">
        <h1>BOOLFLIX</h1>
      </div>
      <nav className="nav-container">
        <div className="input-container">
          <form onSubmit={handleFormSubmit}>
            {/* <select name="" id="">
              <option value="0">Seleziona genere</option>
            </select> */}
            <input
              onChange={hadleInputChange}
              placeholder="Cerca un film/serieTV"
              type="text"
            />
            <button>Cerca</button>
          </form>
        </div>
      </nav>
    </header>
  );
}
