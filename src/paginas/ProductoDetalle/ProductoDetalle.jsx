import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './ProductoDetalle.module.css'

function ProductoDetalle() {
  const { id } = useParams()

  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [cantidad, setCantidad] = useState(1)
  const [terapeutaSeleccionado, setTerapeutaSeleccionado] = useState('')

  const incrementar = () => {
    if (cantidad < producto.stock) {
      setCantidad(cantidad + 1)
    }
  }

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  const manejarCompra = () => {
    if (producto.requiereTerapeuta && !terapeutaSeleccionado) {
      alert('Seleccioná un terapeuta antes de continuar')
      return
    }

    if (producto.requiereTerapeuta) {
      alert(
        `Agregarás ${cantidad} unidad(es) de ${producto.nombre} con ${terapeutaSeleccionado} al carrito`
      )
    } else {
      alert(
        `Agregarás ${cantidad} unidad(es) de ${producto.nombre} al carrito`
      )
    }
  }

  useEffect(() => {
    fetch('/data/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los productos')
        }

        return respuesta.json()
      })
      .then((datos) => {
        const productoEncontrado = datos.find(
          (producto) => producto.id === Number(id)
        )

        if (!productoEncontrado) {
          throw new Error('No se encontró el producto')
        }

        setProducto(productoEncontrado)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setCargando(false)
      })
  }, [id])

  if (cargando) {
    return <p>Cargando producto...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <section className={styles.detalle}>
      
      <img
        className={styles.imagen}
        src={producto.imagen}
        alt={producto.nombre}
      />

      <h2 className={styles.titulo}>{producto.nombre}</h2>

      <p className={styles.precio}>${producto.precio}</p>

      <p className={styles.descripcion}>{producto.descripcion}</p>

      <p>Stock disponible: {producto.stock}</p>

      {producto.requiereTerapeuta && (
        <div className={styles.selector}>
          <label htmlFor="terapeuta">Elegí un terapeuta:</label>

          <select
            id="terapeuta"
            value={terapeutaSeleccionado}
            onChange={(e) => setTerapeutaSeleccionado(e.target.value)}
          >
            <option value="">Seleccionar</option>
            <option value="Ana Pérez">Ana Pérez</option>
            <option value="Martín López">Martín López</option>
            <option value="Laura Gómez">Laura Gómez</option>
          </select>
        </div>
      )}

      <div className={styles.contador}>
        <button onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementar}>+</button>
      </div>

      <button onClick={manejarCompra}>
        Agregar al carrito
      </button>

    </section>
  )
}

export default ProductoDetalle