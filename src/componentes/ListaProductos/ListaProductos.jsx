import TarjetaProducto from '../TarjetaProducto/TarjetaProducto'

function ListaProductos({ productos }) {
  return (
    <div className="productos-grid">
      {productos.map((producto) => (
        <TarjetaProducto
          key={producto.id}
          {...producto}
        />
      ))}
    </div>
  )
}

export default ListaProductos