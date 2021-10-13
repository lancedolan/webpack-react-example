import {ListOfLists} from '../components/ListOfLists'
import ExampleHook from "../components/ExampleHook";
import React from 'react'
import ReactDOM from 'react-dom';
import MountPrinter from "../components/MountPrinter";

customElements.define('atonoumous-lance', ListOfLists)

class MyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {lanceId : 1}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('click')
        this.setState({lanceId: this.state.lanceId + 1})
    }

    render() {
        return (
        <div onClick={this.handleClick}>
            Hi this is my Component. Click me to re-render a MountPrinter... but WILL it re-mount???
            <MountPrinter lanceId={this.state.lanceId} />
        </div>
        )
    }

}

ReactDOM.render(
    <React.StrictMode>
        <MyComponent />
        <br />
        <ExampleHook type="He Man" />
        <br />
        <ExampleHook type="voltron" />
    </React.StrictMode>,
    document.getElementById('reactRoot')
);

