import { Link } from 'react-router-dom';

const HomeComponent = () => {
  return (
    <main className="container p-5">
      <h1>Home</h1>
      <p>
        Esta es la pagina de inicio. Para agregar un nuevo Contacto dale click al botón de abajo
      </p>
      <div className="d-flex flex-row justify-content-around">
        <Link to="/new-contact">
          <button className="btn btn-success">Agregar Un Contacto</button>
        </Link>
        <Link to="/all-contacts">
          <button className="btn btn-secondary">Ir a Lista de Contactos</button>
        </Link>
      </div>
    </main>
  );
}

export default HomeComponent;