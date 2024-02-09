import React from 'react';
import '../Css/Box_Simulation.css';

function Box_Simulation(props) {
    const plantationDate = new Date(props.paragraphe_2_3);
    const formattedDate = `${plantationDate.getDate()}/${plantationDate.getMonth() + 1}/${plantationDate.getFullYear()}`;

    return (
        <div className="box_simulation">
            <div className="child_box">
                <div className="grand_titre_left">
                    <h1> Terrain Id{props.titre} </h1>
                </div>
                <span className="separateur"></span>
                <div className="information_middle">
                    <h2> Parcelle </h2>
                    <p>Id {props.paragraphe_1}</p>
                    <p> Surface {props.paragraphe_1_2}</p>
                </div>
                <span className="separateur"></span>
                <div className="information_right">
                    <h2> Details Recolte </h2>
                    <p> Rendement total {props.paragraphe_2}</p>
                    <p> Plante recoltée {props.paragraphe_2_1}</p>
                    <p> Date de la plantation {formattedDate}</p>
                </div>
            </div>
        </div>
    );
}

export default Box_Simulation;
