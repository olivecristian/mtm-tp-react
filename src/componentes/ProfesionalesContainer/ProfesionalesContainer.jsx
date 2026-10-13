import { useEffect, useState } from 'react'
import ListaProfesionales from '../ListaProfesionales/ListaProfesionales'

function ProfesionalesContainer() {
  const [profesionales, setProfesionales] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/data/profesionales.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los profesionales')
        }

        return respuesta.json()
      })
      .then((datos) => {
        setProfesionales(datos)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setCargando(false)
      })
  }, [])

  if (cargando) {
    return <p>Cargando profesionales...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <ListaProfesionales profesionales={profesionales} />
  )
}

export default ProfesionalesContainer