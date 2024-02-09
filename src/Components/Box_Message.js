import React from 'react'
import '../Css/Box_Message.css'
import Section_Recherche from './Section_Recherche';
function Box_Message(props) {
    const flexDirectionStyle = props.direction === 'reverse' ? 'row-reverse' : 'row';
    const backgroundStyle = props.direction === '' ? 'grey' : '#8BC462';
    return (
    <div className="container_box_message">
        <div className="box_message" style={{ flexDirection: flexDirectionStyle }}>
            <div className="sary_box_message">
                <img src={props.user_image} alt=''/> 
            </div>
            <div className="contenu_box_message"  style={{ background: backgroundStyle}}>
                <p>{props.user_texte}</p>
            </div>
        </div>
    </div>
  )
}

export default Box_Message