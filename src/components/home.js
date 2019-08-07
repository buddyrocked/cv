import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchHome } from '../actions';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title : '',
			content : ''
		}
	}

	componentWillMount(){
        this.props.onFetchHome();
    }

	componentDidMount(){
        this.props.onFetchHome();
    }

    renderPortfolio(){
    	let { skills } = this.props.home.content.summary;
    	return _.map(skills, skill => {
    		return (
    			<div className="col-md-3 col-sm-6  fashion logo" key="{ skill.id }">
                    <a href="single-project.html" className="portfolio_item">
                        <img src="http://placehold.it/1000x1000" alt="image-alt" className="img-responsive" />
                        <div className="portfolio_item_hover">
                            <div className="portfolio-border clearfix">
                                <div className="item_info">
                                    <span>{ skill.language }</span>
                                    <em>{ skill.status}</em>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
    		);
    	});
    }

	render() {
		
		return (
			<>
			    <div className="portfolio-div">
			        <div className="portfolio">
			            <div className="no-padding portfolio_container">			                
			                { this.renderPortfolio() }			                
			            </div>
			        </div>
			    </div>
			</>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
    return {
        home    : state.home,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchHome: () => { dispatch(fetchHome()); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);