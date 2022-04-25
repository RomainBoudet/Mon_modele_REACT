// import npm
import React from 'react';
import PropTypes from 'prop-types';
// import { Routes, Route, Outlet, Link } from "react-router-dom";

// import style
import './style.scss';

// import react

const Main = ({ messageMain }) => (
  <main>
    <h1>{ messageMain } </h1>
  </main>

);

/* Exmaple.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    myFunction: PropTypes.func.isRequired,
  })).isRequired,
}; */

Main.propTypes = {
  messageMain: PropTypes.string.isRequired,
};

export default Main;
