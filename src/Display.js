import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Display extends Component{
    constructor(props){
        super(props);
        this.state = {
            display: this.props.text,
        };
    }

    render(){
        console.log(this.props.text)
        return <Paper square="true" style={{height: '100px'}} elevation={0}>
            <Grid container spacing={0}>
                <Grid xs={8}></Grid>
                <Grid xs={4}>
                    <h1>{this.props.text}</h1>
                </Grid>
            </Grid>
        </Paper>;
    }
}

export default Display;