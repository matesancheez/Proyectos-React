/* eslint-disable react/prop-types */
import { AddCart } from "../icons/AddCart";
import { useFiltros } from "../hooks/useFilters";
import { useCart } from "../hooks/useCart";
import "./producto.css";
import { Close } from "../icons/Close";

function Productos({ productos }) {
  const { filterProducts } = useFiltros();
  const { addToCart, removeFromCart, cart } = useCart();

  const filtrados = filterProducts(productos);
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <section className="container-grid">
      {filtrados !== []
        ? filtrados.map((producto) => {
            const isProductInCart = checkProductInCart(producto);
            return (
              <div key={producto.id} className="cont">
                <img src={producto.image} alt="" />
                <div className="text">
                  <h3>{producto.title}</h3>
                  <div className="info">
                    <div className="price">
                      <h3>${producto.price}</h3>
                      <p>
                        <span>
                          12x $ {(parseFloat(producto.price) / 12).toFixed(2)}
                        </span>
                      </p>
                    </div>
                    <div>
                      {isProductInCart ? (
                        <button
                          className="agregar"
                          onClick={() => {
                            removeFromCart(producto);
                          }}
                        >
                          <Close />
                        </button>
                      ) : (
                        <button
                          className="agregar"
                          onClick={() => {
                            addToCart(producto);
                          }}
                        >
                          <AddCart />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : "Errooor"}
    </section>
  );
}

export default Productos;
