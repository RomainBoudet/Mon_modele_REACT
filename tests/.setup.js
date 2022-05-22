// pour expliquer à webpack la config !


require ("@babel/register")();
require("ignore-styles");
const enzyme = require("enzyme");
const Adapter = require ("enzyme-adapter-react-16");
enzyme.configure({adapter: new Adapter()});
