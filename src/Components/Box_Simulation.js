import React from 'react'
import '../Css/Box_Simulation.css';

function Box_Simulation(props) {
  return (
    <div class="box_simulation">
    <div class="child_box">
        <div class="grand_titre_left">
            <h1> {props.titre} </h1>
        </div>
        <span class="separateur"></span>
        <div class="information_middle">
            <h2> {props.petitTitre_1}</h2>
            <p>{props.paragraphe_1}</p>
            <p> {props.paragraphe_1_2}</p>
        </div>
        <span class="separateur"></span>
        <div class="information_right">
            <h2> {props.petitTitre_2 }</h2>
            <p> {props.paragraphe_2}</p>
            <p> {props.paragraphe_2_1}</p>
        </div>
    </div>
</div>
  )
}

export default Box_Simulation