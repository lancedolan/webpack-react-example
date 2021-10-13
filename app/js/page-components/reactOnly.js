import React from 'react'
import ReactDOM from 'react-dom';
import HelloWorldEs from "../components/HelloWorldEs";
import HelloWorldHook from "../components/HelloWorldHook";
import css from '../../css/basic-theme.scss'

ReactDOM.render(
    <React.StrictMode>
        <HelloWorldHook />
        <HelloWorldEs />
    </React.StrictMode>,
    document.getElementById('reactRoot')
);

