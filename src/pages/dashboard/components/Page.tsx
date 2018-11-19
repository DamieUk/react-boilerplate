import * as React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

class DashboardPage extends React.PureComponent<{}, {}> {
	render() {
        return (
            <div className="p-15">
                <h1>Dashboard Page</h1>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);