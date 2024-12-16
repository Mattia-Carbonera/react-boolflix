export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <h1>BOOLFLIX</h1>
      </div>
      <nav className="nav-container">
        <div className="input-container">
          <form>
            <select name="" id="">
              <option value="0">Seleziona genere</option>
            </select>
            <input placeholder="Cerca un film/serieTV" type="text" />
            <button>Cerca</button>
          </form>
        </div>
      </nav>
    </header>
  );
}
