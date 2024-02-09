import React, { useEffect, useState } from "react";
import axios from 'axios';
import Header from '../Components/Header'
import Data_Simulation from '../Data/Data_Simulation'
import Box_Simulation from '../Components/Box_Simulation'
import Head_Link from '../Components/Head_Link'     
import '../Css/Simulation.css';

function Simulation() {
const [data_simulation,setData_Simulation] = useState(Data_Simulation)

useEffect(() => {

  const storedId = localStorage.getItem("userId");
  let request = "https://cropfarmback-production.up.railway.app/planters/simulations/";
  request += storedId;
  
  console.log(request);

  axios.get(request)
  .then(response => {
    // Mettez à jour l'état avec les données récupérées depuis l'API
    setData_Simulation(response.data)
  })
  .catch(error => {
    console.log('Erreur lors de la récupération des terrains non valides :', error);
  });
  
}, []);

const All_Simulation = data_simulation.map((simulation) => (
    <Box_Simulation
      titre={simulation.id_terrain}
      paragraphe_1={simulation.id_parcelle}
      paragraphe_1_2={simulation.surfacetotale}
      paragraphe_2 = {simulation.rendement }
      paragraphe_2_1 = {simulation.nom_plante}
      paragraphe_2_3 = {simulation.dateaction}
    />
  ));


  return (
    <body>
    <div id="simulation_page">
     <Header />
        <main>
            <section className='section_list_simulation'>
                <div className='top_list_simulation'>
                    <h1> Simulations de rendement de Terrain   </h1>
                </div>
                <div className='bottom_list_simulation'>
                        {All_Simulation}
                </div>
            </section>
            <section className='section_recherche_simulation'>
                <div className='head_title_simulation'>
                  <h1>Simulations de rendement de Terrain </h1>
                </div>
                <div className='body_recherche_simulation'>
                    <form className='formulaire_recherche_simulation' onSubmit="">
                      <input 
                      className="text_input"
                      type="text"
                      value=""
                      onChange=""
                      placeholder="De quel Terrain voulez vous connaitre les simulations"
                        />
                      <input 
                      className="text_input"
                      type="date"
                      value=""
                      onChange=""
                      />
                      
                      <input
                      className="submit_input"
                      type="submit"
                      src=""
                      value="Rechercher"
                      alt="Rechercher"
                      />
                </form>
                  </div>
                
                <div className='bottom_link'>
                  <Head_Link titre="Comment avoir une belle recolte" lien="https://www.rouchette.com/blog/conseils/520-comment-avoir-une-belle-recolte-de-petits-fruits-cette-annee.html"/>
                </div>
            </section>
        </main>
    </div>
    </body>










    
  )
}

export default Simulation