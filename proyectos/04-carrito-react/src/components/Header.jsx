import "./header.css";
import { Filters } from "./Filters";
export default function Header() {
  return (
    <section className="container-filtros">
      <h1>Carrito de compras</h1>
      <Filters />
    </section>
  );
}
