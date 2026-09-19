import { useState } from 'react';
import { dispositivos } from './data/dispositivos';
import ListaDispositivos from './components/ListaDispositivos';
import './App.css';

function App() {
  const [busqueda, setBusqueda] = useState('');

  const dispositivosFiltrados = dispositivos.filter((d) =>
    d.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Catálogo de Dispositivos Electrónicos</h1>

      <input
        type="text"
        placeholder="Buscar dispositivo..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <ListaDispositivos dispositivos={dispositivosFiltrados} />
    </div>
  );
}

export default App;