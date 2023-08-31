/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filtros, setFiltros] = useState({
    category: "all",
    price: 0,
  });
  return (
    <FilterContext.Provider value={{ filtros, setFiltros }}>
      {children}
    </FilterContext.Provider>
  );
}
