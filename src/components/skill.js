import React, { Component } from 'react';
import Navbar from './navbar';


class Skill extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cart_count : 0
		}
	}

	render() {
		return (
			<div>
				Skill Page
			</div>
		);
	}
}

export default Skill;
