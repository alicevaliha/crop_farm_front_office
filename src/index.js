import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Acceuil from './Pages/Acceuil';
import reportWebVitals from './reportWebVitals';
import Mes_Messages from './Pages/Mes_Messages';
import Login from './Pages/Login';
import Historique_Terrain from './Pages/Historique_Terrain'
import Resultat_Recherche_Terrain from './Pages/Resultat_Recherche_Terrain'
import Ma_discussion from './Pages/Ma_discussion';

const router = createBrowserRouter ([
  {
    path : "acceuil",
    element: <Acceuil/>,
  },
  {
    path : "login",
    element: <Login/>,
  },
  {
    path : "logout",
    element: <Login/>,
  },
  {
    path : "/",
    element: <App/>,
  },
  {
    path : "message",
    element: <Mes_Messages/>,
  },
  {
    path : "historique",
    element: <Historique_Terrain/>,
  },
  {
    path : "recherche_terrain",
    element: <Resultat_Recherche_Terrain/>,
  },
  {
    path : "discussion",
    element: <Ma_discussion/>,
  },
  ]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
