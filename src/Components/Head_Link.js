import React from 'react'
import '../Css/Head_Link.css'
import fleche from '../Components/img_component/arrow.png'
import { Link } from 'react-router-dom'

function Head_Link(props) {
  return (
    <div className="information">
    <div className="sary">
        <a href={props.lien}>
          <img src={fleche} alt=""/>
        </a>
    </div>
    <div className="texte">
    <a href={props.lien}>
        <h3>{props.titre}</h3>
    </a>
    </div>
    </div>
  )
}

export default Head_Link