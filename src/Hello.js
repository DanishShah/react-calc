import React, { Component } from 'react';

class Hello extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <h1>Hello {this.props.who}!</h1>
    }
}

export default Hello