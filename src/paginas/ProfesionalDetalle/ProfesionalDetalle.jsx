import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './ProfesionalDetalle.module.css'

function ProfesionalDetalle() {
  const { id } = useParams()

  const [profesional, setProfesional] = useState(null)
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
        const profesionalEncontrado = datos.find(
          (profesional) => profesional.id === Number(id)
        )

        if (!profesionalEncontrado) {
          throw new Error('No se encontró el profesional')
        }

        setProfesional(profesionalEncontrado)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setCargando(false)
      })
  }, [id])

  if (cargando) {
    return <p>Cargando profesional...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className={styles.detalle}>
      <img 
        className={styles.imagen}
        src={profesional.foto} 
        alt={profesional.nombre} 
      />

      <h2>{profesional.nombre}</h2>

      <p>{profesional.orientacion}</p>

      <p>{profesional.descripcionCorta}</p>

      <p>
        Especialidades: {profesional.especialidades.join(', ')}
      </p>

      <p>
        Modalidades: {profesional.modalidades.join(', ')}
      </p>
    </div>
  )
}

export default ProfesionalDetalle