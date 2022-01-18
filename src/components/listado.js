import peli from "../api/peliculas.json";
const Listado = ({ carrito, setCarrito }) => {
  return (
    <div>
      {peli.map((pelicula) => {
        return (
          <div>
            <h1 id="nombre">{pelicula.nombre} </h1>
            <button
              id="agregar"
              onClick={() =>
                setCarrito([...carrito, { nombre: pelicula.nombre }])
              }
            >
              Agregar Carrito
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Listado;
