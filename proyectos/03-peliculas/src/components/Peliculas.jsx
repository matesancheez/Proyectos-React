import "../App.css";
// eslint-disable-next-line react/prop-types
const MovieList = ({ pelicula }) => {
  return (
    <section className="container">
      {pelicula !== undefined ? (
        // eslint-disable-next-line react/prop-types
        pelicula.map((peli) => (
          <div key={peli.imdbID} className="pelicula">
            <img src={peli.Poster} alt={peli.imdbID} />
            <div>
              <p>
                {peli.Title} - {peli.Year}
              </p>
            </div>
          </div>
        ))
      ) : (
        <h3>No se encontraron películas</h3>
      )}
    </section>
  );
};

export default MovieList;
