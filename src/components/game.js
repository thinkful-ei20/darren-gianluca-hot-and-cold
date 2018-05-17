import React, {Component} from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends Component {

	constructor(props) {
		super(props);
		this.state = {
			answer: Math.floor(Math.random() * 100),
			guesses: [],
			winState: false
		};
	}

	updateGuesses(guess) {
		this.setState({
			guesses: [...this.state.guesses, guess]
		});
	}

	restartGame(){
		this.setState({
			answer: Math.floor(Math.random() * 100),
			guesses: [],
			winState: false
		});		
	}
	render(){
		return (
			<div>
				<Header restartGame={() => this.restartGame()}/>
				<GuessSection 
					feedback={this.state.guesses}
					onGuess={(guess) => this.updateGuesses(guess)}
					answer={this.state.answer} 
					winState={this.state.winState}
					 
				/>

				<GuessCount count={this.state.guesses.length} />

				<GuessList guesses={this.state.guesses} />
			</div>
		);
	}
}

