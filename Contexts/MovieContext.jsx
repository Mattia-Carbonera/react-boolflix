import { createContext, useContext } from "react";

const MvoieContext = createContext();
const apiUrl = import.meta.env.VITE_API_URL;

export const MovieContextProvider = ({ children }) => {
  const provaApi = "API";
  const provaApiDue = "API2";
  console.log(provaApi, provaApiDue);

  //   console.log(provaApi);
  return (
    <MvoieContext.Provider value={{ provaApi, provaApiDue }}>
      {children}
    </MvoieContext.Provider>
  );
};

export const MoviesContext = () => {
  return useContext(MvoieContext);
};
