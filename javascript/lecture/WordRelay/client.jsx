// const React = require('react');
// const ReactDOM = require('react-dom');
// const { hot } = require('react-hot-loader/root');
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

//import NumberBaseball from './NumberBaseball';
//import Test from './RenderTest';
import ResponseCheck from './ResponseCheck';

const Hot = hot(ResponseCheck);

ReactDOM.render(<Hot />, document.querySelector('#root'));