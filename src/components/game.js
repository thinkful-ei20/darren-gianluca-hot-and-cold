import React, {Component} from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: '',
			guesses: []
		};
	}

	updateGuesses(guess) {
		console.log(guess);
	}

	render(){
		return (
			<div>
				<Header />
				<GuessSection feedback={this.state.guesses[this.state.guesses.length-1]} onGuess={(guess) => this.updateGuesses(guess)} />
				<GuessCount count={this.state.guesses.length} />
				<GuessList guesses={this.state.guesses} />
			</div>
		);
	}
}

