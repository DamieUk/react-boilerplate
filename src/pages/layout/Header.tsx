import * as React from 'react';
import {Link} from 'react-router-dom';

const NAV_ITEMS = [];

class Header extends React.PureComponent {
    render() {
        return (
            <header className="page-header flex flex-between">
                <div className="logo-holder">
                    <img src="http://conferencesolutions.com/wp-content/uploads/2017/03/logo-1.png" alt=""/>
                </div>
                <div className="p-15 flex">
                    <div className="p-5">
                        <Link to="/dashboard">Dashboard</Link>
                    </div>
                    <div className="p-5">
                        <Link to="/contacts">Contacts</Link>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
