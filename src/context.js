import { createContext } from "react";

// const defaultContextName = {
//     user: "",
//     pushNames: () => null
//   };

// export const NamesContext = createContext(defaultContextName);

const defaultContextValue = {
  pushMessage: () => null,
  // Questo metodo ed il successivo, anche nel loro valore di default
  // devono restituire un array.
  getUsernames: () => [],
  getUserMessages: () => []
};
  
export const MessagesContext = createContext( defaultContextValue );