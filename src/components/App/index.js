// Ce composant est un container à composants, dans lequel je mettrais tous mes autres composants.
// Et cet unique composant App sera rendu via la méthode render dans le fichier index.js
// situé a la racine du fichier src.
// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import
import './styles.scss';
import Header from '../../containers/Header';
import Main from '../../containers/Main';
import Footer from '../Footer';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer propsFooter={(new Date()).getFullYear()} />
  </div>
);
// == Export
export default App;
