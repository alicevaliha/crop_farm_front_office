import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../Css/Acceuil.css'
import Header from '../Components/Header'
import Box_Culture from '../Components/Box_Culture'
import Head_Link from '../Components/Head_Link'
import Box_Message_Preview from '../Components/Box_Message_Preview'
import Data_Astuce from '../Data/Data_Astuce'
import Data_Parcelle from '../Data/Data_Parcelle'
import Data_Culture from '../Data/Data_Culture'
import Carte_Terrain from '../Components/Carte_Terrain'
function Acceuil() {
    const [data_parcelle, setData_Parcelle] = useState([]);

    

      const All_Box_Astuces = Data_Astuce.map((astuce) => (
        <Box_Message_Preview
        imagePersonne = "Image_Terrain/profil.jpeg"
        nomPersonne={astuce.nomPersonne}
        texteMessage = {astuce.texteAstuce}
        lienAstuce = {astuce.lienAstuce}
        />
                  
      ));

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
    <div>
    <div id="page_acceuil">
    <Header/>
        <div class="a_la_une_et_astuce">
               <section class="a_la_une">
                     <div class="image_a_la_une"> </div>   
                    <div class="plus_information">
                            <Head_Link titre ="Plus d'information sur comment planter" lien="https://www.plantezcheznous.com/conseils-potager/fruits-et-legumes-de-saison/"/>
                    </div>
                    <h1> Un Terrain optimal associé à une culture exeptionelle.</h1>
                    <img class="a_la_une_background" src="./Image_Terrain/forest_2.gif" alt=""/>
                </section>

            <section class="astuce">
            <div class="titre_astuce">
            <h4>Astuces sympas pour vous</h4>
            </div>
                <div class="list_astuce">
                {All_Box_Astuces}
                </div>
                <div class="voir_plus_astuce">
                <Head_Link titre ="Voir plus d'astuces" lien ="https://www.deco.fr/jardin-jardinage/potager-legume/79582-12-astuces-pour-reussir-son-potager"/>
                </div>
            </section>
        </div>
        <div class="list_cultures_section">
            <div class="list_cultures_bottom">
                    <div class="culture_go">
                        <h1>Liste des parcelles des membres de Crop Farm</h1>
                    </div>
                    <div class="list_culture_affiche">
                        <div class="list_culture"> 
                            {All_Parcelle}
                        </div>
                        <div class="affiche_mignon"> 
                            <img class="image_de_fond" src="./Image_Terrain/poisson.gif"/>
                            <div class="text_milieu">
                                <h1> Coming soon...</h1>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Acceuil