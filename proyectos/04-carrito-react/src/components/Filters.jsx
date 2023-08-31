import { useFiltros } from "../hooks/useFilters";
import { useState, useEffect } from "react";

export function Filters() {
  const { filtros, setFiltros } = useFiltros();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategorias(data));
  }, []);

  const handleMinPrice = (event) => {
    setFiltros((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const handleCategory = (event) => {
    setFiltros((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <div className="filtros">
      <div>
        <label>Precio</label>
        <input
          type="range"
          min="0"
          max="2000"
          id="precio"
          onChange={handleMinPrice}
          value={filtros.price}
        ></input>
        <p>{filtros.price}</p>
      </div>
      <div>
        <label>Categoria</label>
        <select onChange={handleCategory}>
          <option value="all">All</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
