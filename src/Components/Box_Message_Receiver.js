import React from 'react'
import '../Css/Box_Message_Receiver.css'
function Box_Message_Receiver (props) {
    return (
    <div className="container_box_message_receiver">
        <div className="box_message_receiver">
            <div className="sary_box_message_receiver">
                <img src={props.user_image} alt=''/> 
            </div>
            <div className="contenu_box_message_receiver" >
                <p>{props.user_texte}</p>
            </div>
        </div>
    </div>
  )
}
export default Box_Message_Receiver