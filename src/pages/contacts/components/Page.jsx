import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

class ContactsPage extends React.PureComponent {
	static propTypes = {};
	
	render() {
		return (
			<div className="p-15">
				<h1>Contacts Page</h1>
			</div>
		);
	}
}

ContactsPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);