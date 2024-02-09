import React, { useEffect, useState } from "react";
import '../Css/Header.css';
import logo from './img_component/logo_crop_2.png';
import user from './img_component/user.jpeg';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    setIsLoggedIn(!!storedId);
  }, []);

  useEffect(() => {
    // Si l'utilisateur se déconnecte, supprimer les messages du localStorage
    if (!isLoggedIn) {
      // localStorage.removeItem("messages");
    }
  }, [isLoggedIn]);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt=""/>
      </div>
      <nav>
        <ul>
          <li><a href="acceuil">Acceuil</a></li>
          <li><a href={isLoggedIn ? "message" : "login"}>{isLoggedIn ? "Messages" : "Messages"}</a></li>
          <li><a href="historique">Recherche</a></li>
          <li><a href={isLoggedIn ? "logout" : "login"}>{isLoggedIn ? "Logout" : "Login"}</a></li>
          {isLoggedIn && <li><a href="historique">Simulations</a></li>}
          {/* <li><a href="recherche_terrain">Resultat</a></li> */}
        </ul>
        <div className="profile">
          <img src={user} alt=""/>
        </div>
      </nav>
    </header>
  );
}

export default Header;
