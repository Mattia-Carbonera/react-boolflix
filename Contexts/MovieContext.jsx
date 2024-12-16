import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const MovieContext = createContext();
const apiUrl = import.meta.env.VITE_API_URL;
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
  const [searchResult, setSearchResult] = useState([]);

  const apiFetch = () => {
    setSearchedName("harry");
    fetch(apiUrl + searchedName, apiOptions)
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data.results);
        // console.log(data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    apiFetch();
  }, [searchedName]);

  return (
    <MovieContext.Provider value={{ searchResult }}>
      {children}
    </MovieContext.Provider>
  );
};

export const MoviesContext = () => {
  return useContext(MovieContext);
};
