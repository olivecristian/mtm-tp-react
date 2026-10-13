import styles from './TarjetaProfesional.module.css'
import { Link } from 'react-router-dom'

function TarjetaProfesional({
  id,
  foto,
  nombre,
  orientacion,
  especialidades,
  modalidades,
  descripcionCorta
}) {
  return (
    <article className={styles.tarjeta}>
      <img
        className={styles.foto}
        src={foto}
        alt={nombre}
      />

      <h3 className={styles.nombre}>{nombre}</h3>

      <p className={styles.orientacion}>
        {orientacion}
      </p>

      <p className={styles.especialidades}>
        {especialidades.join(' · ')}
      </p>

      <p className={styles.modalidades}>
        {modalidades.join(' · ')}
      </p>

      <p className={styles.descripcion}>
        {descripcionCorta}
      </p>
      <Link
        to={`/profesional/${id}`}
        className={styles.boton}
      >
        Ver perfil
      </Link>

    </article>
  )
}

export default TarjetaProfesional