import Productos from "./components/Productos";
import Header from "./components/Header";
import "./App.css";
import { Cart } from "./components/Carrito";
import { useEffect, useState } from "react";
import { CartProvider } from "./context/CartContext";

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <CartProvider>
      <Header />
      <Productos productos={productos} />
      <Cart />
    </CartProvider>
  );
}

export default App;
