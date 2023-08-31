import "./App.css";
import { useState } from "react";
import { Caja } from "./components/caja";
import { Ganador } from "./components/ganador";
import { TURNO } from "./constants/constants";
import { verGanador } from "./scripts/scripts";
import { Reset } from "./icons/reset";

function App() {
  const [tablero, setTablero] = useState(new Array(9).fill(null));
  const [turno, setTruno] = useState(TURNO.x);
  const [ganador, setGanador] = useState(null);

  const reiniciar = () => {
    setTablero(new Array(9).fill(null));
    setTruno(TURNO.x);
    setGanador(null);
  };

  const tablaActualizada = (index) => {
    if (tablero[index] !== null || ganador !== null) return;
    const newTurno = turno === TURNO.x ? TURNO.o : TURNO.x;
    const newTablero = [...tablero];
    newTablero[index] = turno;
    const newGanador = verGanador(newTablero);

    if (newGanador !== null) {
      setGanador(newGanador);
    }

    setTablero(newTablero);
    setTruno(newTurno);
  };

  return (
    <>
      <h1>Ta - Te - Ti</h1>

      <section>
        <button onClick={reiniciar} className="boton">
          <Reset />
        </button>
      </section>

      <section>
        <Ganador
          ganador={ganador}
          reiniciar={reiniciar}
          className="contenido"
        />
      </section>

      <section className="tablero">
        {tablero.map((_, index) => {
          return (
            <Caja index={index} key={index} tablaActualizada={tablaActualizada}>
              {tablero[index]}
            </Caja>
          );
        })}
      </section>

      <section className="tablero mt-2">
        <Caja isSeleccionado={turno === TURNO.x}>{TURNO.x}</Caja>
        <Caja isSeleccionado={turno === TURNO.o}>{TURNO.o}</Caja>
      </section>
    </>
  );
}

export default App;
