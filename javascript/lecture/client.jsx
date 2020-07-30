const React = require('react');
const ReactDom = require('react-dom');

//함수형 컴포넌트  ref 속성값 사용
//const Test = require('./Text');

//ref 속성값으로 함수 사용
const Test = require('./Test');


ReactDom.render(<Test />, document.querySelector('#root'));