/*
INDEX.JS File is the entry point and labeled in webpackconfig file as entry Point
This will contain one function i.e render() from ReactDOM and will point which 'component' (App)
should be placed where ( in a div having ID= 'app')
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(
	<App />,
	document.getElementById('app')
);