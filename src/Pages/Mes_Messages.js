import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../Css/Mes_Messages.css'
import Header from '../Components/Header'
import Data_Message from '../Data/Data_Message'
import Data_Amis from '../Data/Data_Amis'
import '../Css/Section_Gauche_Message.css'
import '../Css/Section_Droite_Message.css' 
import Box_Message_Preview from '../Components/Box_Message_Preview'
import Head_Link from '../Components/Head_Link'
import Section_Recherche from '../Components/Section_Recherche'
import icon_boutton from '../Components/img_component/chercher_white.png'


function Mes_Messages() {
  const [data_amis,setData_Amis] = useState(Data_Amis)
  const [data_message,setData_Message] = useState(Data_Message)
  const [recherche, setRecherche] = useState('')
  
   // Fonction de filtrage pour les amis en fonction du texte de recherche
   const filterFriends = (searchText) => {
    setRecherche(searchText); // Met à jour le texte de recherche
  };

  

  useEffect(() => {

    let storedId = localStorage.getItem("userId");
    let request = "https://cropfarmback-production.up.railway.app/proprietaires/amis/";
    request+= storedId;
    
    console.log(request);

    axios.get(request)
    .then(response => {
      setData_Amis(response.data);
      // Mettez à jour l'état avec les données récupérées depuis l'API
      // setMyparcelles(response.data);
    })
    .catch(error => {
      console.log('Erreur lors de la récupération des terrains non valides :', error);
    });
    
  }, []);

  // const filteredFriends = data_amis.filter((ami) =>

  //   ami.nom.toLowerCase().includes(recherche.toLowerCase()) 

  // );

  const All_Friends = data_amis.map((ami) => {

  //   const messagesAmi = data_message.filter(
  //     (message) =>
  //       message.senderMessage.idPersonne === ami.idPersonne ||
  //       message.receiverMessage.idPersonne === ami.idPersonne
  // );
  


  //   messagesAmi.sort((a, b) => new Date(b.dateMessage) - new Date(a.dateMessage));
  
  //   const dernierMessage = messagesAmi.length > 0 ? messagesAmi[0].texteMessage : '';
  
    return (
      <Box_Message_Preview
        // key={ami.idPersonne}
        idPersonne={ami.id}
        nomPersonne={ami.nom}
        // prenomPersonne={ami.prenomPersonne}
        imagePersonne="Image_Terrain/profil.jpeg"
        // texteMessage={dernierMessage} // Passer le dernier message comme prop
      />
    );

  });
  
  return (
    <body>
    <div id="page">
        <Header/>
        <main>
            <section className="section_recherche">
            <img class="section_recherche_background" src="./Image_Terrain/forest_2.gif" alt=""/>
              <div className="top">
                <Head_Link titre = "Plus d'information sur la plantation" lien="https://www.plantezcheznous.com/conseils-potager/fruits-et-legumes-de-saison/"/>
              </div>
              <div className="bottom">
                <Section_Recherche titre_recherche="Recherche" placeholder="Nom de votre ami..." icon_boutton={icon_boutton} onRecherche={filterFriends}/>
                  <div className="titre">
                      <h1>Discutez avec vos amis pour plus
                      de productivité</h1>
                  </div>
              </div>
          </section>

          <section className="section_liste">
              <div className='top'>
                    <div className="mini_titre">
                        <h3>Liste des messsages</h3>
                    </div>
                    <div className="all_liste">
                          {All_Friends}
                    </div>
              </div>
              
          </section>


        
        </main>
    </div>
    </body>
  )
}

export default Mes_Messages