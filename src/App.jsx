import './App.css'
import Layout from './componentes/Layout/Layout'
import ProductosContainer from './componentes/ProductosContainer/ProductosContainer'
import ProfesionalesContainer from './componentes/ProfesionalesContainer/ProfesionalesContainer'
import { Routes, Route } from 'react-router-dom'
import ProfesionalDetalle from './paginas/ProfesionalDetalle/ProfesionalDetalle'
import ProductoDetalle from './paginas/ProductoDetalle/ProductoDetalle'
import FormularioContainer from './componentes/FormularioContainer/FormularioContainer'


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route
          path="/"
          element={
            <>
              <section>
                <h2>Encontrá un profesional</h2>
                <p>
                  Conocé a los profesionales disponibles y encontrá con quién te gustaría comenzar.
                </p>

                <ProfesionalesContainer />
              </section>

              <section>
                <h2>Recursos para tu proceso</h2>
                <p>
                  Guías, audios, talleres y herramientas creadas por profesionales.
                </p>

                <ProductosContainer />

                <FormularioContainer />
              </section>
            </>
          }
        />

        <Route
          path="/profesional/:id"
          element={<ProfesionalDetalle />}
        />

        <Route
          path="/producto/:id"
          element={<ProductoDetalle />}
        />

      </Route>
    </Routes>
  )
}

export default App