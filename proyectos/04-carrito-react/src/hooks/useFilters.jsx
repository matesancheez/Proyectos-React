import { useContext } from "react";
import { FilterContext } from "../context/filterContext";

export function useFiltros() {
  const { filtros, setFiltros } = useContext(FilterContext);
  const filterProducts = (productos) => {
    const filters = productos.filter((producto) => {
      if (filtros.category === "all") {
        return producto.price > filtros.price && productos;
      } else {
        return (
          producto.price > filtros.price &&
          producto.category === filtros.category
        );
      }
    });

    return filters;
  };

  return { filterProducts, setFiltros, filtros };
}
