import React from 'react';

import './placeholder.css';

export default function placeholder(props) {
	return (
			<div id ={props.index} className="placeholder">
				<p>{props.author}</p>
			</div>
		);
}