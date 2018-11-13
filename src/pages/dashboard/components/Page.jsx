import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

class HomePage extends React.PureComponent {
	static propTypes = {};
	
	render() {
		return (
			<div className="p-15">
				<h1>Home Page</h1>
			</div>
		);
	}
}

HomePage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);