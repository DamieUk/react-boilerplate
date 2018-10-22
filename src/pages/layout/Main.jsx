import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from "react-router-dom";
import { HomePage } from "pages/home";
import Header from './Header';
import Footer from './Footer';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

class AppLayout extends React.PureComponent {
	static propTypes = {};
	
	render() {
		return (
			<main>
				<div className="page-content">
					<Header/>
					<Switch>
						<Route path="/home" component={HomePage}/>
						<Redirect to="/home"/>
					</Switch>
				</div>
				<Footer/>
			</main>
		);
	}
}

AppLayout.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);