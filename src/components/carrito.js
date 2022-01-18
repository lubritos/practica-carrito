const Carrito = ({ carrito, setCarrito }) => {
  function eliminar(nombre) {
    const listadoNuevo = carrito.filter((peli) => peli.nombre !== nombre);
    setCarrito(listadoNuevo);
  }
  return (
    <div>
      <h3>Carrito</h3>
      {carrito.map((item) => (
        <div>
          <h4>{item.nombre}</h4>
          <button onClick={() => eliminar(item.nombre)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};
export default Carrito;
