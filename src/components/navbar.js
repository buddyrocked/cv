import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
	
	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){

	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-topx">
				<Link className="navbar-brand" to="/">
					My App
				</Link>

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/profile">
								Profile
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/skill">
								Skill
							</Link>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input className="form-control mr-sm-2" type="text" placeholder="Search" />
						<button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
					</form>
                </div>
			</nav>
		);	
	};
}

export default Navbar;