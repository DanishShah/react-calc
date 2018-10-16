import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Backspace from '@material-ui/icons/Backspace';
import Clear from '@material-ui/icons/Clear';
import './Button.css';

class IconButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.text,
        };
    }

    onButtonClicked = (ev) => {
        console.log(ev.target.innerText)
        this.props.addFunction(ev.target.innerText);
    }

    

    render() {
        // console.log(this.props.name);
        switch(this.props.name){
            case 'Add':
                return <Button className='icon-button' onClick={this.onButtonClicked} aria-label={this.props.name}>
                    <Add />
                </Button>
            case 'Remove':
                return <Button className='icon-button' onClick={this.onButtonClicked} aria-label={this.props.name}>
                    <Remove />
                </Button>
            case 'Backspace':
                return <Button className='icon-button' onClick={this.onButtonClicked} aria-label={this.props.name}>
                    <Backspace />
                </Button>
            case 'Clear':
                return <Button className='icon-button' onClick={this.onButtonClicked} aria-label={this.props.name}>
                    <Clear />
                </Button>
        }
        
            
        
    }
}

export default IconButton;