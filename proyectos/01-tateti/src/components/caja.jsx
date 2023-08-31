/* eslint-disable react/prop-types */
export const Caja = ({ index, isSeleccionado, children, tablaActualizada }) => {
  const className = isSeleccionado ? "turno" : "no_turno";

  const handleClick = () => {
    tablaActualizada(index);
  };

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};
