import React, { Component } from 'react';

class Service extends Component {

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
		        <h1>services</h1>
		        <p><a href="#">Home</a> / Services</p>
		    </div>		    

		    <div className="container main-container">
		        <div className="clearfix">
		            
		            <div className="col-md-4 service-box">
		                <i className="ion-android-favorite-outline size-50"></i>
		                <h3>Responsive Design</h3>
		                <div className="h-10"></div>
		                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim nosmet ipsos nosse non possumus. Inscite autem medicinae </p>
		            </div>
		            
		            <div className="col-md-4 service-box">
		                <i className="ion-android-options size-50"></i>
		                <h3>Easy Customization</h3>
		                <div className="h-10"></div>
		                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim nosmet ipsos nosse non possumus. Inscite autem medicinae </p>
		            </div>
		            
		            <div className="col-md-4  service-box">
		                <i className="ion-android-checkmark-circle size-50"></i>
		                <h3>Creative Design</h3>
		                <div className="h-10"></div>
		                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim nosmet ipsos nosse non possumus. Inscite autem medicinae </p>
		            </div>
		            
		            <div className="col-md-4  service-box">
		                <i className="ion-ios-pulse-strong size-50"></i>
		                <h3>user friendly</h3>
		                <div className="h-10"></div>
		                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim nosmet ipsos nosse non possumus. Inscite autem medicinae </p>
		            </div>
		            
		            <div className="col-md-4  service-box">
		                <i className="ion-earth size-50"></i>
		                <h3>fully customizible</h3>
		                <div className="h-10"></div>
		                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim nosmet ipsos nosse non possumus. Inscite autem medicinae </p>
		            </div>
		            
		            <div className="col-md-4  service-box">
		                <i className="ion-speedometer size-50"></i>
		                <h3>retina ready</h3>
		                <div className="h-10"></div>
		                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim nosmet ipsos nosse non possumus. Inscite autem medicinae </p>
		            </div>
		        </div>
		    </div>
		    </>
		);
	}
}

export default Service;
