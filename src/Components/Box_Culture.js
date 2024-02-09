import React from 'react'
import '../Css/Box_Culture.css'
function Box_Culture(props) {
  return (
    <div className="box_culture">
    <img src={props.mainImage} alt=""/>
    <div className='box_culture_body'>
        <h4>{props.nomCulture}</h4>
        <p>{props.description}</p>
    </div>
    </div>
  )
}

export default Box_Culture