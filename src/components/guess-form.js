import React from 'react';

export default class GuessForm extends React.Component {
	onSubmit(event){
		event.preventDefault();

		if (this.props.onMakeGuess){
			this.props.onMakeGuess(this.input.value);
		}
		this.input.value ='';
		this.input.focus();
	}
	render() {
		return (
			<form onSubmit={e => this.onSubmit(e)}>
				<input
				id="userGuess"
				ref={input => (this.input = input)}

				/>
				<button
				id="guessButton"
				>
				Guess
				</button>
			</form>
		);
	}
}