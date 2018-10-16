import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './Button.css';


class NumberButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.text,
        };
    }

    onButtonClicked = (ev) => {
        this.props.addFunction(ev.target.innerText);
    }

    render() {
        return <Button className={this.props.type} onClick={this.onButtonClicked}>{this.props.text}</Button>
    }
}



export default NumberButton;