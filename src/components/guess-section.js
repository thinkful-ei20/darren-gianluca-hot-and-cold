import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    
	function getFeedBack(guesses) {
        if(props.feedback.length === 0){
            return 'Make a guess!'
        }
        const lastGuess = props.feedback[props.feedback.length -1];
        const answer = props.answer;
        const difference = Math.abs(answer - lastGuess);
        if(difference === 0){
            return 'YOU WIN! if youd like to play again, press NEW GAME';
        } else if(difference <= 5) {
            return 'VERY hot'
        } else if(difference >5 && difference <= 10){
            return 'Hot'
        } else if(difference >10 && difference <= 15){
            return 'Warm'
        } else if (difference > 15 && difference <= 20){
            return 'Cold'
        } else {
            return 'Ice Cold'
        }
    }

	return (
        <section>
            <h2 id="feedback">{getFeedBack(props.feedback)}</h2>
            <GuessForm feedback={props.feedback} onGuess={(guess) => props.onGuess(guess)}/>
        </section>
    );
}

