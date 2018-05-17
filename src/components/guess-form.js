import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {

	let guess = '';

	const proccessSubmit = (event) => {
		event.preventDefault();
		const value = +guess.value; //coersion
		if(value && (value > 0 && value <= 100)) {
			props.onGuess(value);
		} else {
			alert('Input must be a valid number between 0 and 100(inclusive)');
		}
	};

	return (
        <form onSubmit={e => proccessSubmit(e)}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" ref={ input => guess = input } required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
}

