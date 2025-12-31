import { useState } from 'react'
import './App.css'

function App() {
  const [productos, setProductos] = useState([])
  
  const [nuevoProducto, setNuevoProducto] = useState('')

  const agregarProducto = () => {
    if (nuevoProducto.trim() !== '') {
      setProductos([...productos, nuevoProducto])
      setNuevoProducto('')
    }
  }

  const eliminarProducto = (index) => {
    const nuevaLista = productos.filter((_, i) => i !== index)
    setProductos(nuevaLista)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Lista de Compras</h1>
        
        <div className="input-section">
          <input
            type="text"
            placeholder="Ej: Leche, Pan, Huevos..."
            value={nuevoProducto}
            onChange={(e) => setNuevoProducto(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && agregarProducto()}
          />
          <button onClick={agregarProducto}>Agregar</button>
        </div>

        <div className="lista">
          {productos.length === 0 ? (
            <p className="lista-vacia">No hay productos en tu lista</p>
          ) : (
            <ul>
              {productos.map((producto, index) => (
                <li key={index}>
                  <span>{producto}</span>
                  <button 
                    className="btn-eliminar"
                    onClick={() => eliminarProducto(index)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="contador">
          Total de productos: {productos.length}
        </p>
      </div>
    </div>
  )
}

export default App