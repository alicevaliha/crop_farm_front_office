import React, { useState, useRef, useEffect } from 'react';
import Header from '../Components/Header';
import Head_Link from '../Components/Head_Link';
import Section_Recherche from '../Components/Section_Recherche';
import user_image from '../Components/img_component/user.png';
import icon_search from '../Components/img_component/chercher_white.png';
import icon_send from '../Components/img_component/send.png';
import Data_Message from '../Data/Data_Message';
import Data_MyData from '../Data/Data_MyData';
import Box_Message_Receiver from '../Components/Box_Message_Receiver';
import Box_Message_Sender from '../Components/Box_Message_Sender';
import '../Css/Section_Droite_Ma_Discussion.css';

function Ma_discussion(props) {
  const [keyword,setKeyword] = useState(null);
  /// Recuperation des donnés du Box message preview ///
  const searchParams = new URLSearchParams(window.location.search);
  const idAmi = searchParams.get('idPersonne');
  const nomAmi = searchParams.get('nomPersonne');
  const prenomAmi = searchParams.get('prenomPersonne');
  const imageAmi = searchParams.get('imageAmi');
  const [data_message, setData_Message] = useState(Data_Message);
  //// Mes donnés d'utilisateurs
  const senderData = Data_MyData[0]; 
  // Fonction pour filtrer les messages des amis 

  const getFilteredAndSortedMessages = (personneId) => {
    const filteredMessages = data_message.filter(
      (message) =>
        message.senderMessage.idPersonne === personneId ||
        message.receiverMessage.idPersonne === personneId
    );

    const sortedMessages = filteredMessages.sort(
      (a, b) => new Date(b.dateMessage) - new Date(a.dateMessage)
    );

    return sortedMessages;
  };

  // Fonction pour envoier des messages
  const sendMessage = (textMessage) => {
    
    const newMessage = {
      idMessage: `00${data_message.length + 1}B`,
      dateMessage: new Date().toISOString(),
      senderMessage: senderData,
      receiverMessage: { idPersonne: idAmi, nomPersonne: nomAmi, prenomPersonne: prenomAmi, imagePersonne: imageAmi},
      texteMessage: textMessage,
    };
    ////////////////////////////////////



    // Ajouter dans le tableau message
    setData_Message([...data_message, newMessage]);
  };

  const handleSubmitMessage = (textMessage) => {
    if (textMessage.trim() !== '') {
      sendMessage(textMessage);
    }
  };
  //////////////////

  // Filtrer seulement les messages des ami
  const messages = getFilteredAndSortedMessages(idAmi);

  const All_message = messages.map((message) => {
    if (senderData.idPersonne=== message.senderMessage.idPersonne) {
      return(
        // La personne Connecter
        <Box_Message_Sender

          key={message.idMessage}
          user_image="Image_Terrain/user.jpeg"
          user_texte={message.texteMessage}
          />
      )
    } else {
      return(
        // La personne Non connecter
        <Box_Message_Receiver
          key={message.idMessage}
          user_image="Image_Terrain/profil.jpeg"
          user_texte={message.texteMessage}
          />
      )
    }
  }
 );

 // Fonction du section recherche
 const handleSearch = () => {
  // Ne rien faire
};
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollTop = topRef.current.scrollHeight;
    }
  }, []);

  return (
    <div id="page">
      <Header />
      <main>
        <section className="section_recherche">
          <img class="section_recherche_background" src="./Image_Terrain/forest_2.gif" alt="" />
          <div className="top">
            <Head_Link titre="Plus d'information sur la plantation" />
          </div>
          <div className="bottom">
            {/* <Section_Recherche titre_recherche="Recherche" placeholder="Votre recherche..." icon_boutton={icon_search} onSubmitAction={handleSearch} /> */}
            <div className="titre">
              <h1>Discutez avec vos amis pour plus de productivité</h1>
            </div>
          </div>
        </section>

        <section className="section_liste">
          <div className='top' ref={topRef}>
            <div className="mini_titre">
              <h3>{nomAmi} {prenomAmi}</h3>
            </div>
            <div className="all_liste_ma_discussion">
              {All_message}
            </div>
          </div>

          <div className='bottom'>
            <Section_Recherche icon_boutton={icon_send} placeholder="Votre message..." onSubmitAction={handleSubmitMessage} style={{ borderRadius: '18px', height: '87%' }}/>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Ma_discussion;
