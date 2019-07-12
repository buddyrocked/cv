import React, { Component } from 'react';
import Navbar from './navbar';


class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cart_count : 0
		}
	}

	render() {
		return (
			<div>
				<Navbar />
				Home Page
			</div>
		);
	}
}

export default Home;
