import { createContext, useContext } from "react";

const MvoieContext = createContext();
const apiUrl = import.meta.env.VITE_API_URL;

export const MovieContextProvider = ({ children }) => {
  //   const provaApi = "API";

  //   console.log(provaApi);
  return <MvoieContext.Provider value={{}}>{children}</MvoieContext.Provider>;
};

export const MoviesContext = () => {
  return useContext(MvoieContext);
};
