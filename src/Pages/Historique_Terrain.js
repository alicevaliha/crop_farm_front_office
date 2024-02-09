import React, { useEffect, useState } from "react";
import axios from 'axios';
import Header from '../Components/Header'
import Head_Link from '../Components/Head_Link'
import Section_Recherche from '../Components/Section_Recherche'
import '../Css/Historique_Terrain.css'
import icon_boutton from '../Components/img_component/chercher.png'
import Data_Terrain from '../Data/Data_Terrain'
import Data_Parcelle from '../Data/Data_Parcelle'
import Carte_Terrain from '../Components/Carte_Terrain'

function Historique_Terrain() {
const [data_terrain,setData_Terrain] = useState(Data_Terrain)
const [data_parcelle, setData_Parcelle] = useState(Data_Parcelle);
  const [idParcelle, setIdParcelle] = useState('');
  const [typeCulture, setTypeCulture] = useState('');
  const [proprietaire, setProprietaire] = useState('');
  const [filteredParcelles, setFilteredParcelles] = useState(data_parcelle);

  const handleIdParcelleChange = (e) => {
    setIdParcelle(e.target.value);
  };

  const handleTypeCultureChange = (e) => {
    setTypeCulture(e.target.value);
  };

  const handleProprietaireChange = (e) => {
    setProprietaire(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = data_parcelle.filter((parcelle) =>
      parcelle.nomParcelle.toLowerCase().includes(idParcelle.toLowerCase()) &&
      parcelle.typeCulture.toLowerCase().includes(typeCulture.toLowerCase()) &&
      parcelle.nomProprietaire.toLowerCase().includes(proprietaire.toLowerCase())
    );
    setFilteredParcelles(filtered);
    // Réinitialiser les valeurs des inputs
    setIdParcelle('');
    setTypeCulture('');
    setProprietaire('');
  };


  useEffect(() => {

    let request = "https://cropfarmback-production.up.railway.app/parcelles/list";
    // request += storedId;
    
    console.log(request);

    axios.get(request)
    .then(response => {
      // Mettez à jour l'état avec les données récupérées depuis l'API
      setData_Parcelle(response.data);
    })
    .catch(error => {
      console.log('Erreur lors de la récupération des terrains non valides :', error);
    });
    
  }, []);
 
  const All_Parcelle = data_parcelle.map((parcelle) => (
    <Carte_Terrain
      image_source="Image_Terrain/plant-gif.gif"
      nomParcelle={parcelle.id_parcelle}
      typeCulture={parcelle.nom_plantes}
      imageProprietaire="Image_Terrain/profil.jpeg"
      nomProprietaire={parcelle.nom}
    />
  ));

  return (
    <body>
    <div id="historique_page">
     <Header />
        <main>
            <section className='section_list_terrain'>
                <div className='top_list_terrain'>
                    <h1> Les parcelles   </h1>
                </div>
                <div className='bottom_list_terrain'>
                        {All_Parcelle}
                </div>
            </section>
            <section className='section_recherche_terrain'>
                
                <div className='head_title'>
                  <h1 style={{ color: 'white' }}>Effectuer une recherche</h1>
                </div>
                <div className='body_recherche_terrain'>
                    <form className='formulaire_recherche' onSubmit={handleSubmit}>
                      <input 
                      className="text_input"
                  type="text"
                  value={idParcelle}
                  onChange={handleIdParcelleChange}
                  placeholder="Id parcelle"
                      />
                      <input 
                      className="text_input"
                      type="text"
                      value={typeCulture}
                      onChange={handleTypeCultureChange}
                      placeholder="Type de culture"
                      />
                      <input 
                      className="text_input"
                      type="text"
                      value={proprietaire}
                      onChange={handleProprietaireChange}
                      placeholder="Proprietaire"
                      />
                      <input
                      className="submit_input"
                      type="submit"
                      src=""
                      alt="Rechercher"
                      />
                </form>
                  </div>
                
                <div className='bottom_link'>
                  <Head_Link titre="Comment avoir une belle recolte?" lien="https://www.rouchette.com/blog/conseils/520-comment-avoir-une-belle-recolte-de-petits-fruits-cette-annee.html"/>
                </div>
            </section>
        </main>
    </div>
    </body>
  )
}

export default Historique_Terrain