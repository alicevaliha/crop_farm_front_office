import React , { useState }from 'react'
import '../Css/Section_Recherche.css'
function Section_Recherche(props) {
  const border = props.border;
  const [texteAction, setTexteAction] = useState('');

  const handleInputChange = (e) => {
    setTexteAction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.onSubmitAction) {
      props.onSubmitAction(texteAction);
    } else {
      props.onRecherche(texteAction);
    }
    setTexteAction('');
  };

  return (
    <div className="recherche_component">
      <form onSubmit={handleSubmit}>
        <input
          className="text_input"
          style={{ border: border }}
          type="text"
          value={texteAction}
          onChange={handleInputChange}
          placeholder={props.placeholder}
        />
        <input
          className="submit_input"
          type="image"
          src={props.icon_boutton}
          alt="Envoyer"
        />
      </form>
    </div>
  );
}

export default Section_Recherche;