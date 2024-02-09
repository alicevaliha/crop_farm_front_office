import React from 'react'
import '../Css/Section_Gauche_Message.css'
import Section_Recherche from './Section_Recherche'
import Head_Link from './Head_Link'
import icon_boutton from './img_component/chercher.png'
function Section_Gauche_Message() {
  return (
    <section className="section_recherche">
      <div className="top">
        <Head_Link titre = "Plus d'information sur la plantation"/>
      </div>
      <div className="bottom">
        <Section_Recherche 
        titre_recherche="Recherche" 
        placeholder="Votre recherche..." 
        border ="2px solid blue"
        icon_boutton={icon_boutton}
        />

          <div className="titre">
              <h1>Discuté avec vos amis pour plus
              de productivité</h1>
          </div>
      </div>
    </section>
  )
}

export default Section_Gauche_Message