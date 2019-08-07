import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class Navbar extends Component {
	
	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){

	}

	render() {
		return (
			<div className="container-fluid">
		        <header className="box-header">
		            <div className="box-logo">
		                <Link to="/">
		                	<img src={logo} width="50" alt="Logo" />
		                </Link>
		            </div>
		            <span className="box-primary-nav-trigger">
		                <span className="box-menu-text">Menu</span><span className="box-menu-icon"></span>
		            </span>
		        </header>
		        <nav>
		            <ul className="box-primary-nav">
		                <li className="box-label">About me</li>
		                <li>
		                	<Link to="/">Home</Link>
		                	<i className="ion-ios-circle-filled color"></i>
		                </li>
		                <li>
		                	<Link to="/profile">Profile</Link>
		                </li>
		                <li>
			                <Link to="/skill">Skill</Link>
						</li>
						<li>
			                <Link to="/service">Service</Link>
						</li>
						<li>
			                <Link to="/portfolio">Portfolio</Link>
						</li>
						<li>
			                <Link to="/contact">Contact</Link>
						</li>
		                <li className="box-label">Follow me</li>
		                <li className="box-social"><a href="#0"><i className="ion-social-facebook"></i></a></li>
		                <li className="box-social"><a href="#0"><i className="ion-social-instagram-outline"></i></a></li>
		                <li className="box-social"><a href="#0"><i className="ion-social-twitter"></i></a></li>
		                <li className="box-social"><a href="#0"><i className="ion-social-dribbble"></i></a></li>
		            </ul>
		        </nav>
		        <section className="box-intro">
		            <div className="table-cell">
		                <h1 className="box-headline letters rotate-2">
		                    <span className="box-words-wrapper">
		                        <b className="is-visible">E-Commerce.</b>
		                        <b>Marketplace.</b>
		                        <b>Desktop &nbsp; Apps.</b>
		                        <b>Personal &nbsp; Web.</b>
		                        <b>Mobile &nbsp; Apps.</b>
		                    </span>
				        </h1>
		                <h5>everything you need to build your personal portfolio</h5>
		            </div>
		            <div className="mouse">
		                <div className="scroll"></div>
		            </div>
		        </section>
		    </div>
		);	
	};
}

export default Navbar;