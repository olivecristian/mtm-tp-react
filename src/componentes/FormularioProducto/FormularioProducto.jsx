function FormularioProducto({
  datosForm,
  manejarCambio,
  manejarEnvio
}) {
  return (
    <form onSubmit={manejarEnvio}>
      <h3>Agregar producto o servicio</h3>

      <div>
        <label>Nombre:</label>

        <input
          type="text"
          name="nombre"
          value={datosForm.nombre}
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label>Precio:</label>

        <input
          type="number"
          name="precio"
          value={datosForm.precio}
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label>Stock:</label>

        <input
          type="number"
          name="stock"
          value={datosForm.stock}
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label>Descripción:</label>

        <textarea
          name="descripcion"
          value={datosForm.descripcion}
          onChange={manejarCambio}
        />
      </div>

      <button type="submit">
        Guardar producto
      </button>
    </form>
  )
}

export default FormularioProducto