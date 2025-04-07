import React, { useState } from "react";
import '../Css/Login.css'
import axios from 'axios';


function Login() {


    localStorage.clear();

    const [email, setEmail] = useState(""); // état pour l'e-mail
    const [password, setPassword] = useState(""); // état pour le mot de passe
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value); // Met à jour l'état de l'e-mail lorsque l'utilisateur tape dans le champ d'entrée
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value); // Met à jour l'état du mot de passe lorsque l'utilisateur tape dans le champ d'entrée
    };

    const handleSubmit = async (e) => {

        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
      
        // Vous pouvez maintenant utiliser 'email' et 'password' pour effectuer des opérations, telles que des appels API avec Axios
        console.log("Email:", email);
        console.log("Password:", password);
      
        // Exemple d'appel API avec Axios
        try {
          // Appel de l'API pour se connecter avec l'email et le mot de passe
          const response = await axios.get("https://cropfarmback-production.up.railway.app/proprietaires/login", {
            params: {
              mail: email,
              mdp: password,
            },
          });
      
          // Gérer la réponse de l'API
          console.log("Réponse de l'API :", response.data);
          const userId = response.data.id;
          const username = response.data.nom;
          const usermail = response.data.mail;
  
          // Stocker des données dans le localStorage
          localStorage.setItem('userId', userId);
          localStorage.setItem('username',username);
          localStorage.setItem('usermail',usermail);
  
          window.location.href = "/Acceuil";
          // Rediriger vers le tableau de bord ou effectuer d'autres actions en fonction de la réponse
        } catch (error) {
          // Gérer les erreurs d'authentification
            alert("Erreur lors de la connexion veuillez réessayer ^^");
            console.log(error);
        }
  
  };
    
    // const handleRedirection = () => {
    //     // Vous pouvez également ajouter des logiques supplémentaires ici avant la redirection
    //     window.location.href = "/Acceuil";
    //   };


  return (
    <div className="main">
    <img className="image_login" src='./Image_Terrain/leaf.gif' alt="background" /> {/* Utilisez la balise <img> pour afficher l'image de fond */}
        <div className="box_container">
            <div className='left_box'>
                <div className='titre'>
                    <h1>
                    Login
                    </h1>
                </div>
                <p> Un terrain optimal à une culture exceptionelle. </p>
                
            </div>
            <div className='right_box'>
                <form className='login_form' onSubmit={handleSubmit}>
                    <div className="input_container">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="alicia@gmail.com" value={email} onChange={handleEmailChange} defaultValue="alicia@gmail.com"/>

                    <label htmlFor="password">Mot de passe:</label>
                    <input type="password" id="password" name="password" placeholder="mdpalicia" value={password} onChange={handlePasswordChange} defaultValue="mdpalicia"/>

                    </div>
                    
                    <div className="button-container">
                        <button className='submit_button' type="submit">Se connecter</button>
                        <a type="button" href='acceuil' >Retour</a>
                    </div>
                </form>
            </div>
        </div>
    </div>


  )
}

export default Login