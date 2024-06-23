import React, { useState } from 'react';
import { FaBars, FaSearch, FaPlus, FaUpload, FaStar } from 'react-icons/fa'; // Importamos los iconos necesarios
import './HomePage.css';

interface HomePageProps {
  signOut?: (data?: any) => void;
}

const HomePage: React.FC<HomePageProps> = ({ signOut }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-container">
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars size={30} />
      </div>
      {isMenuOpen && (
        <div className="menu-dropdown">
          <ul>
            <li><button onClick={() => alert('Opción 1')}>Opción 1</button></li>
            <li><button onClick={() => alert('Opción 2')}>Opción 2</button></li>
            <li><button onClick={() => signOut && signOut()}>Cerrar sesión</button></li>
          </ul>
        </div>
      )}
      <div className="icon-container">
        <button className="icon-button" onClick={() => alert('Búsqueda general')}>
          <FaSearch size={60} /> {/* Icono de búsqueda */}
          <p>Búsqueda general</p>
        </button>
        <button className="icon-button" onClick={() => alert('Agregar materia o tema')}>
          <FaPlus size={60} /> {/* Icono de agregar */}
          <p>Agregar materia o tema</p>
        </button>
      </div>
      <div className="icon-container">
        <button className="icon-button" onClick={() => alert('Subir tema')}>
          <FaUpload size={60} /> {/* Icono de subir */}
          <p>Subir tema</p>
        </button>
        <button className="icon-button" onClick={() => alert('Favoritos')}>
          <FaStar size={60} /> {/* Icono de favoritos */}
          <p>Favoritos</p>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
