import React from 'react'
import Header from '../Components/Header'
import Carte_Terrain from '../Components/Carte_Terrain'
import '../Css/Resultat_Recherche_Terrain.css'
import image_terrain from '../Components/img_component/acceuil_1.jpg'
function Resultat_Recherche_Terrain() {
  return (
    <body>
    <div id="historique_resultat_recherche">
     <Header />
        <main>
            <section className='section_list_terrain'>
                <div className='top_list_terrain'>
                    <h1> Resultat recherche </h1>
                </div>
                <div className='bottom_list_terrain'>
                <Carte_Terrain image_source={image_terrain}/>
                <Carte_Terrain image_source={image_terrain}/>
                <Carte_Terrain image_source={image_terrain}/>
                <Carte_Terrain image_source={image_terrain}/>
                <Carte_Terrain image_source={image_terrain}/>
                <Carte_Terrain image_source={image_terrain}/>
                <Carte_Terrain image_source={image_terrain}/>
                <Carte_Terrain image_source={image_terrain}/>
                <Carte_Terrain image_source={image_terrain}/>
                <Carte_Terrain image_source={image_terrain}/>
                <Carte_Terrain image_source={image_terrain}/>
                <Carte_Terrain image_source={image_terrain}/>
                
          
                </div>

            </section>

        </main>
    </div>
    </body>
  )
}

export default Resultat_Recherche_Terrain