import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
// import SidebarNavigation from './SidebarNavigation';

const MainComponentWithRouter = withRouter<any> (
  class MainWrapper extends React.Component<RouteComponentProps<any>, any> {
    render() {
      return (
        <div className="main-page">
          {this.props.children}
        </div>
      );
    }
  }
)

export default MainComponentWithRouter;
