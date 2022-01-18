import { useState } from "react";
import Carrito from "./components/carrito";
import Listado from "./components/listado";
import "./styles.css";

export default function App() {
  const [carrito, setCarrito] = useState([]);

  return (
    <div className="App">
      <Carrito carrito={carrito} setCarrito={setCarrito} />
      -----------------------------------
      <Listado carrito={carrito} setCarrito={setCarrito} />
    </div>
  );
}
