/* eslint-disable react/prop-types */
import { Reset } from "../icons/reset";
import "./ganador.css";

export const Ganador = ({ ganador, reiniciar }) => {
  return (
    ganador !== null && (
      <div className="fondo">
        <div className="contenedor_ganador">
          <div className="contenido">
            <img
              src="../public/winner.gif"
              alt="rata bailando"
              className="gif"
            />
            <h1>Gano la {ganador}</h1>
            <section>
              <button onClick={reiniciar} className="boton">
                <Reset />
              </button>
            </section>
          </div>
        </div>
      </div>
    )
  );
};
