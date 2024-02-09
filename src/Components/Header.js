import React, { useEffect, useState } from "react";
import '../Css/Header.css';
import logo from './img_component/logo_crop_2.png';
import user from './img_component/user.jpeg';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    const use = localStorage.getItem("username");
    setIsLoggedIn(!!storedId);
    setUsername(use);
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
        {isLoggedIn && <p> {username}  </p>}
          <img src={user} alt=""/>
        </div>
      </nav>
    </header>
  );
}

export default Header;
