import { dispositivos } from './data/dispositivos';
import ListaDispositivos from './components/ListaDispositivos';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Catálogo de Dispositivos Electrónicos</h1>
      <ListaDispositivos dispositivos={dispositivos} />
    </div>
  );
}

export default App;