import React from 'react';
import GuessSection from './guess-section';
export default class Game extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			guesses: [],
			correctAnswer: Math.floor(Math.random()*100) + 1,
			feedback: 'Make your guess!' 
		};
	}

	makeGuess(guess){
		guess = parseInt(guess, 10);
		if (isNaN(guess)){
			this.setState({feedback: 'Please enter a valid number'});
			return;
		}
		let diff = Math.abs(this.state.correctAnswer - guess) ;
		let feedback;
		if ( diff > 70 ) {
			feedback = "Ice Cold";
		} else if ( diff >= 50 )  {
			feedback = "Cold";
		} else if ( diff >= 40 ){
			feedback = "Luke Warm";
		} else if ( diff >= 30 ) {
			feedback = "Warm";
		} else if ( diff >= 20) {
			feedback = "Warmer";
		} else if ( diff >= 10) {
			feedback = "Hot";
		} else if ( diff >= 1) {
			feedback = "Burning hot";
		} else if ( diff === 0) {
			feedback = "You got it!";
			() => this.state.correctAnswer()

		}

		this.setState({
			feedback,
			guesses: [...this.state.guesses, guess]
		});
	}

	
	render() {
		const {feedback, guesses} = this.state;
		const guessCount = guesses.length;

	return (
			<div>
				<GuessSection
					feedback={feedback}
					guessCount={guessCount}
					onMakeGuess={guess => this.makeGuess(guess)}
				/>
				<p>Guesses: {String(guesses).split(' ')}</p>
				<p>Number of Guesses: {guessCount}</p>
			</div>
		);
	}
}