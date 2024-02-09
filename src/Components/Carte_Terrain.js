import React from 'react'
import '../Css/Carte_Terrain.css'
function Carte_Terrain(props) {
  return (
    <div  className='carte_terrain'>
        <img src={props.image_source} alt=""/>
        <div className='carte_top'>
            <h3>Parcelle Id {props.nomParcelle}</h3>
          </div>

        <div className='carte_body'>
            <h4>Cutlure</h4>
            <p> Types de plantes cultivées sur la parcelle {props.typeCulture} </p>
            <button>Détails de la parcelle {props.nomParcelle}</button>
          </div>
          
          <div className='carte_bottom'>
            <img src={props.imageProprietaire} alt=""/>
            <h3>{props.nomProprietaire} </h3>
          </div>
    </div>
  )
}

export default Carte_Terrain