import React from "react";

export default class MountPrinter extends React.Component {

    componentDidMount() {
        console.log(`BOOM, ${this.props.lanceId} mounted!`)
    }

    render() {
        console.log('Re-rendering ' + this.props.lanceId)
        return (<div>I log when I'm mounted!</div>);
    }

}