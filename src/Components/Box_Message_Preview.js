import React from 'react'
import '../Css/Box_Message_Preview.css'
import Ma_discussion from '../Pages/Ma_discussion'
function Box_Message_Preview(props) {
  return (
    <div className="container">
    <a href={`/discussion?idPersonne=${props.idPersonne}&&nomPersonne=${props.nomPersonne}&&prenomPersonne=${props.prenomPersonne}&&imageAmi=${props.imagePersonne}`}>
    <a href={props.lienAstuce}>
    <div className="message_box_preview">
        <div className="sary">
        <img src={props.imagePersonne} alt=''/> 
        </div>
        <div className="contenu">
            <h4>{props.nomPersonne} {props.prenomPersonne}</h4>
            <p>{props.texteMessage}</p>
        </div>
    </div>
    </a>
    </a>
    </div>
  )
}

export default Box_Message_Preview