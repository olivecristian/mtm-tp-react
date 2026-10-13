import { useState } from 'react'
import FormularioProducto from '../FormularioProducto/FormularioProducto'

function FormularioContainer() {
  const [datosForm, setDatosForm] = useState({
    nombre: '',
    precio: '',
    stock: '',
    descripcion: ''
  })

  const manejarCambio = (evento) => {
    const { name, value } = evento.target

    setDatosForm({
      ...datosForm,
      [name]: value
    })
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    if (
    datosForm.nombre.trim() === '' ||
    datosForm.precio === '' ||
    datosForm.stock === ''
    ) {
    alert('Completá nombre, precio y stock antes de guardar')
    return
    }
    
    console.log('Producto ingresado:', datosForm)

    alert(`Producto "${datosForm.nombre}" cargado correctamente`)
    
    setDatosForm({
        nombre: '',
        precio: '',
        stock: '',
        descripcion: ''
        })
  }

  return (
    <FormularioProducto
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
    />
  )
}

export default FormularioContainer