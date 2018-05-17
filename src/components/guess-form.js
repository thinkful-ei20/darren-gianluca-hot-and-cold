import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {

    const verfiyDuplicate = (value) => {
        return props.feedback.includes(value)       
    }

	let guess = '';

	const proccessSubmit = (event) => {
		event.preventDefault();
		let value = +guess.value; //coersion
		if(value && (value > 0 && value <= 100) && !verfiyDuplicate(value)) {
			props.onGuess(value);
		} else {
			alert('Input must be a unique number between 0 and 100(inclusive)');
        }
        guess.value = '';
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

