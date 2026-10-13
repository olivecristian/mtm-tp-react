import styles from './TarjetaProducto.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function TarjetaProducto({
  id,
  imagen,
  nombre,
  precio,
  stock,
  tipo,
  descripcion,
  requiereTerapeuta
}) {
  const [cantidad, setCantidad] = useState(0);

  const incrementar = () => {
    setCantidad(cantidad + 1)
  }

  const decrementar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1)
    }
  }
  
  const manejarCompra = () => {
    alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito`)
  }

  return (
    <article className={styles.tarjeta}>
      <img
        className={styles.imagen}
        src={imagen}
        alt={nombre}
      />

      <h3 className={styles.nombre}>{nombre}</h3>

      <p className={styles.precio}>${precio}</p>

      <div>
        <button onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementar}>+</button>
      </div>

      <button onClick={manejarCompra}>
        Comprar
      </button>
      
      <Link to={`/producto/${id}`}>
        Ver detalle
      </Link>

    </article>
  )
}

export default TarjetaProducto