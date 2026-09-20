import { useState, useEffect } from 'react';
import { dispositivos } from './data/dispositivos';
import ListaDispositivos from './components/ListaDispositivos';
import './App.css';

function App() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');

  const dispositivosFiltrados = dispositivos.filter((d) => {
    const coincideNombre = d.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === 'Todas' || d.categoria === categoria;
    return coincideNombre && coincideCategoria;
  });

  useEffect(() => {
    console.log(`Resultados: ${dispositivosFiltrados.length}`);
  }, [busqueda, categoria]);

  return (
    <div className="app">
      <h1>Catálogo de Dispositivos Electrónicos</h1>

      <input
        type="text"
        placeholder="Buscar dispositivo..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="Todas">Todas</option>
        <option value="Celulares">Celulares</option>
        <option value="Laptops">Laptops</option>
        <option value="Audio">Audio</option>
        <option value="Pantallas">Pantallas</option>
        <option value="Accesorios">Accesorios</option>
      </select>

      <p className="contador">
        {dispositivosFiltrados.length} de {dispositivos.length} dispositivos
      </p>

      {dispositivosFiltrados.length === 0 && (
        <p className="vacio">No se encontraron dispositivos con esos filtros.</p>
      )}

      <button onClick={() => { setBusqueda(''); setCategoria('Todas'); }}>
        Limpiar filtros
      </button>

      <ListaDispositivos dispositivos={dispositivosFiltrados} />
    </div>
  );
}

export default App;