import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const MovieContext = createContext();
// const apiMovieUrl = import.meta.env.VITE_API_MOVIE_URL;
const apiMovieUrl = "https://api.themoviedb.org/3/search/movie?query=";

// const apiTvUrl = import.meta.env.VITE_API_TV_URL;
const apiTvUrl = "https://api.themoviedb.org/3/search/tv?query=";

const apiOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzVjMGIyNTUyYjU0NzRkOGM2ZDllOGFlMDJmODI0YyIsIm5iZiI6MTczNDM0Mjg3Mi42MDQsInN1YiI6IjY3NWZmOGQ4ZGU4ZjM0ZTBiMjU4YWE2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J-0HrpbZKpG3dXLpNYclJ5OO4tM9ej0d9Dmktxjj12o",
  },
};

export const MovieContextProvider = ({ children }) => {
  const [searchedName, setSearchedName] = useState("");

  //   raccolgo gli array di dati dei risultati
  const [searchResult, setSearchResult] = useState([]);
  const [searchTvResult, setSearchTvResult] = useState([]);

  //   eseguo il fetch per i film
  const apiFetch = () => {
    setSearchedName("");
    fetch(apiMovieUrl + searchedName, apiOptions)
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data.results);
      })
      .catch((err) => console.log(err));
  };

  //   eseguo il fetch per le serie TV
  const apiFetchTvSeries = () => {
    setSearchedName("");
    fetch(apiTvUrl + searchedName, apiOptions)
      .then((res) => res.json())
      .then((data) => {
        setSearchTvResult(data.results);
        console.log(data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    apiFetch();
    apiFetchTvSeries();
  }, [searchedName]);

  //   controllo dell'invio del form di ricerca
  const [inputTitleName, setInputTitleName] = useState("");
  const hadleInputChange = (e) => {
    e.preventDefault();
    setInputTitleName(e.target.value);
  };

  //   controllo l'invio del form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const searchedMovie = inputTitleName;
    setSearchedName(searchedMovie);
  };

  return (
    <MovieContext.Provider
      value={{
        searchResult,
        searchTvResult,
        hadleInputChange,
        handleFormSubmit,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const MoviesContext = () => {
  return useContext(MovieContext);
};
