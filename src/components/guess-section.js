import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
	function getFeedBack(guesses) {
		if(guesses.length > 0) {
			return guesses;
		}
	}
	return (
        <section>
            <h2 id="feedback">{getFeedBack(props.feedback)}</h2>
            <GuessForm onGuess={(guess) => props.onGuess(guess)}/>
        </section>
    );
}

