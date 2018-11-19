import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {History} from 'history';
import {Router, Route, Switch} from 'react-router';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {theme} from 'enums';
import Main from 'pages/layout/Main';
import {Dashboard} from 'pages/dashboard';
import {Contacts} from 'pages/contacts';

const Theme = createMuiTheme(theme);

interface Props {
    store: Store<any>;
    history: History;
}

export default class App extends React.Component<Props, {}> {
    componentDidCatch(error: any, info: any) {
        // You can also log the error to an error reporting service
        console.log(error, info)
    }
    
    render() {
        const {store, history} = this.props;

        return (
            <Provider store={store}>
                <MuiThemeProvider theme={Theme}>
                    <Router history={history}>
                        <Main>
                            <Switch>
                                <Route path="/dashboard" component={Dashboard}/>
                                <Route path="/contacts" component={Contacts}/>
                                <Route path="*" render={() => <div className="p-25 size-20">404</div>}/>
                            </Switch>
                        </Main>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        );
    }
}