import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1>My Therapy Moment</h1>

      <p className={styles.subtitulo}>
        Encontrá un profesional y comenzá tu proceso de una manera más flexible.
      </p>

      <nav className={styles.nav}>
        <a href="#">Inicio</a>
        <a href="#">Profesionales</a>
        <a href="#">Cómo funciona</a>
        <a href="#">Recursos</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  )
}

export default Header