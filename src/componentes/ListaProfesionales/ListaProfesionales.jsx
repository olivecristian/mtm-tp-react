import TarjetaProfesional from '../TarjetaProfesional/TarjetaProfesional'

function ListaProfesionales({ profesionales }) {
  return (
    <div className="profesionales-grid">
      {profesionales.map((profesional) => (
        <TarjetaProfesional
          key={profesional.id}
          {...profesional}
        />
      ))}
    </div>
  )
}

export default ListaProfesionales