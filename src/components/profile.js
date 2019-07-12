import React, { Component } from 'react';
import Navbar from './navbar';


class Profile extends Component {

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
				Profile Page
			</div>
		);
	}
}

export default Profile;
