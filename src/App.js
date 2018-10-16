import React, { Component } from 'react';
import './App.css';
import NumberButton from './NumberButton';
import IconButton from './IconButton';
import Display from './Display.js';
import { MuiThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import theme from './Theme.js';


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			diplayValue: "0",
		};
	}

	setDisplayText = (value) => {
		this.setState({diplayValue: value });
	}
	

	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<div className="App">
					<Grid container direction="row" justify="center" alignItems="center" spacing={24}>
						<Grid item xs={4}>
							<Grid container spacing={0}>
								<Grid item xs={12}>
									<Display text={this.state.diplayValue} />
								</Grid>
								<Grid item xs={3}>
									<NumberButton type='calc-button' text="7" addFunction={this.setDisplayText}></NumberButton>
									<NumberButton type='calc-button' text="4" addFunction={this.setDisplayText}></NumberButton>
									<NumberButton type='calc-button' text="1" addFunction={this.setDisplayText}></NumberButton>
									<NumberButton type='calc-button' text="0" addFunction={this.setDisplayText}></NumberButton>
								</Grid>
								<Grid item xs={3}>
									<NumberButton type='calc-button' text="8" addFunction={this.setDisplayText}></NumberButton>
									<NumberButton type='calc-button' text="5" addFunction={this.setDisplayText}></NumberButton>
									<NumberButton type='calc-button' text="2" addFunction={this.setDisplayText}></NumberButton>
									<NumberButton type='calc-button' text="." addFunction={this.setDisplayText}></NumberButton>
									</Grid>
								<Grid item xs={3}>
									<NumberButton type='calc-button' text="9" addFunction={this.setDisplayText}></NumberButton>
									<NumberButton type='calc-button' text="6" addFunction={this.setDisplayText}></NumberButton>
									<NumberButton type='calc-button' text="3" addFunction={this.setDisplayText}></NumberButton>
									<NumberButton type='calc-button' text="=" addFunction={this.setDisplayText}></NumberButton>
								</Grid>
								<Grid item xs={3}>
									<IconButton type="icon-button" name="Backspace" text="" addFunction={this.setDisplayText}></IconButton>
									<NumberButton type="icon-button" text="/" addFunction={this.setDisplayText}></NumberButton>
									<NumberButton type="icon-button" text="*" addFunction={this.setDisplayText}></NumberButton>
									<NumberButton type="icon-button" text="-" addFunction={this.setDisplayText}></NumberButton>
									<NumberButton type="icon-button" text="+" addFunction={this.setDisplayText}></NumberButton>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
