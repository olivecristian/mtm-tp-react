import { useEffect, useState } from 'react'
import ListaProductos from '../ListaProductos/ListaProductos'

function ProductosContainer() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/data/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los productos')
        }

        return respuesta.json() //nota interna didáctica, se devuelve solo el .json del objeto respuesta que tiene más elementos como respuesta.ok, .status, etc.
      })
      .then((datos) => {
        setProductos(datos)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {    //nota interna, el finally se usa indepenientemente de los resultados anteriores sea si hubo error o no, etc.
        setCargando(false)
      })
  }, [])

  if (cargando) {
    return <p>Cargando productos...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <ListaProductos productos={productos} />
  )
}

export default ProductosContainer