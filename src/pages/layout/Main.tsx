import * as React from 'react';
import {withRouter, RouteComponentProps} from 'react-router';
import Header from './Header';
// import SidebarNavigation from './SidebarNavigation';

const MainComponentWithRouter = withRouter<any>(
    class MainWrapper extends React.Component<RouteComponentProps<any>, any> {
        render() {
            return (
                <React.Fragment>
                    <Header/>
                    <div className="page-content">
                        {this.props.children}
                    </div>
                </React.Fragment>
            );
        }
    }
)

export default MainComponentWithRouter;
