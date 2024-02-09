import React from 'react'
import '../Css/Section_Droite_Message.css'
import Box_Message_Preview from './Box_Message_Preview'
import user_image from '../Components/img_component/user.png'
import Section_Recherche from './Section_Recherche'
import Box_Message from './Box_Message'
import icon_boutton from '../Components/img_component/send.png'
function Section_Droite_Message() {
  return (
    <section className="section_liste">
    <div className='top'>
    <div className="mini_titre">
            <h3>Liste des messsages</h3>
        </div>
        <div className="all_liste">
        <Box_Message  direction="reverse" user_image={user_image} user_texte="zgggzrojgprjgijeqsqggqgqgqrqljbglqkfb pztjhpojtrphjethjo ehtjhpzjthz hztojhpotjh zthztjrhtlihretihezriohyzoimyhozithoizhtiztgzipthpztihoizthgihgoighoighoihgoihh bglqbglbqflbgqflkbgrgre"/>
        <Box_Message  direction="" user_image={user_image} user_texte="zgggzrojgprjgijeqsqggqgqgqrqljbglqkfb pztjhpojtrphjethjo ehtjhpzjthz hztojhpotjh zthztjrhtlihretihezriohyzoimyhozithoizhtiztgzipthpztihoizthgihgoighoighoihgoihh bglqbglbqflbgqflkbgrgre"/>
        <Box_Message  direction="reverse" user_image={user_image} user_texte="zgggzrojgprjgijeqsqggqgqgqrqljbglqkfb pztjhpojtrphjethjo ehtjhpzjthz hztojhpotjh zthztjrhtlihretihezriohyzoimyhozithoizhtiztgzipthpztihoizthgihgoighoighoihgoihh bglqbglbqflbgqflkbgrgre"/>
        <Box_Message  direction="reverse" user_image={user_image} user_texte="zgethjo ehtjhpzjthz hztojhpotjh zthztjrhtlihretihezriohyzoimyhozithoizhtiztgzipthpztihoizthgihgoighoighoihgoihh bglqbglbqflbgqflkbgrgre"/>
        <Box_Message  direction="reverse" user_image={user_image} user_texte="jethjo ehtjhpzjthz hztojhpotjh zthztjrhtlihretihezriohyzoimyhozithoizhtiztgzipthpztihoizthgihgoighoighoihgoihh bglqbglbqflbgqflkbgrgre"/>
        <Box_Message  direction="reverse" user_image={user_image} user_texte="bglqkfb pztjhpojtrphjethjo ehtjhpzjthz hztojhpotjh zthztjrhtlihretihezriohyzoimyhozithoizhtiztgzipthpztihoizthgihgoighoighoihgoihh bglqbglbqflbgqflkbgrgre"/>
        <Box_Message  direction="reverse" user_image={user_image} user_texte="thjo ehtriohyzoimyhozithoizhtiztgzipthpztihoizthgihgoighoighoihgoihh bglqbglbqflbgqflkbgrgre"/>
       
         <Box_Message  direction="" user_image={user_image} user_texte="zgggzrojgprjgijeqsqggqgqgqrqljbglqkfb pztjhpojtrphjethjo ehtjhpzjthz hztojhpotjh zthztjrhtlihretihezriohyzoimyhozithoizhtiztgzipthpztihoizthgihgoighoighoihgoihh bglqbglbqflbgqflkbgrgre"/>
        </div>
    </div>
        
        <div className='bottom'>
          <Section_Recherche icon_boutton = {icon_boutton} placeholder="Votre message..."/> 
        </div>
    </section>
  )
}

export default Section_Droite_Message