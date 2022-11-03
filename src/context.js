import { createContext } from "react";

const defaultContextName = {
    user: "",
    pushNames: () => null
  };

export const NamesContext = createContext(defaultContextName);