import React, { Component } from 'react'
import '../App.css';


export default class MyStepper extends Component {
	render () {
		return (
			<div>
					<div className='container'>
						<ul className='progressBar'>
							<li className='active'>step 1</li>
							<li>step 2</li>
							<li>step 3</li>
							<li>step 4</li>
							<li>step 5</li>
						</ul>
					</div>
			</div>
		)
	}
}