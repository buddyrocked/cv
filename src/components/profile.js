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
			<>			
			    <div className="top-bar">
			        <h1>About Me</h1>
			        <p><a href="#">Home</a> / About me</p>
			    </div>			    
			    <div className="container main-container clearfix"> 
			        <div className="col-md-6">
			            <img src="http://placehold.it/1200x800" className="img-responsive" alt="" />
			        </div>
			        <div className="col-md-6">
			           	<h3 className="uppercase">About Me </h3>
			           	<h5>Creative & Lorem ipsum dolor sit amet</h5>
			           	<div className="h-30"></div>
			            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim nosmet ipsos nosse non possumus. Inscite autem medicinae et gubernationis ultimum cum ultimo sapientiae comparatur. Tecum optime, deinde etiam cum mediocri amico. Et nemo nimium beatus est; Ac ne plura complectar-sunt enim innumerabilia-, bene laudata virtus voluptatis aditus </p>

			            <p>Tum ille: Tu autem cum ipse tantum librorum habeas, quos hic tandem requiris? Esse enim quam vellet iniquus iustus poterat inpune. </p>
			            <div className="h-10"></div>
			            <ul className="social-ul">
			                <li className="box-social"><a href="#0"><i className="ion-social-facebook"></i></a></li>
			                <li className="box-social"><a href="#0"><i className="ion-social-instagram-outline"></i></a></li>
			                <li className="box-social"><a href="#0"><i className="ion-social-twitter"></i></a></li>
			                <li className="box-social"><a href="#0"><i className="ion-social-dribbble"></i></a></li>
			            </ul>
			        </div>
			    </div>
			</>
		);
	}
}

export default Profile;
