function ListaDispositivos({ dispositivos }) {
  return (
    <ul className="lista">
      {dispositivos.map((d) => (
        <li key={d.id} className="item">
          <span className="nombre">{d.nombre}</span>
          <span className="categoria">{d.categoria}</span>
          <span className="valor">${d.valor}</span>
        </li>
      ))}
    </ul>
  );
}

export default ListaDispositivos;