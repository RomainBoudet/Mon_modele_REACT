// == Import npm
import React from 'react';

// == Import
import reactLogo from './react-logo.svg';
import romLogo from './RB.png';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <img src={reactLogo} alt="react logo" />
    <img src={romLogo} alt="Romain Boudet logo" />
    <h1>Ho..., le beau front qu'ont va faire en REACT...</h1>
  </div>
);

// == Export
export default App;
