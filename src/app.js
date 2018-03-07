import ReactDOM from 'react-dom'
import React    from 'react'
import DemoComponent from './DemoComponent'

// setup container for housing react app
let container = document.createElement('div');
document.body.appendChild(container);

// render demo component into container, and give it the property `username`
ReactDOM.render(<DemoComponent username='Pedro'/>, container);
