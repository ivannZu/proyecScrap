import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css"; // Importar el archivo CSS

const links = [
  { name: "Home", href: "/home" },
  { name: "Reporte", href: "/reporte" },
  { name: "Administrador", href: "/administrador" },
  { name: "Perfil", href: "/perfil" },
  { name: "Historial", href: "/historial" },
];

const NavBar = () => {
  return (
    <div className="navbar">
      {links.map((x, index) => (
        <Link key={index} to={x.href} className="nav-link">{x.name}</Link>
      ))}
    </div>
  );
};

export default NavBar;
