import React from 'react'
import '../Css/Box_Message_Sender.css'
function Box_Message_Sender(props) {
    return (
    <div className="container_box_message_sender">
        <div className="box_message_sender">
            <div className="sary_box_message_sender">
                <img src={props.user_image} alt=''/> 
            </div>
            <div className="contenu_box_message_sender" >
                <p>{props.user_texte}</p>
            </div>
        </div>
    </div>
  )
}

export default Box_Message_Sender