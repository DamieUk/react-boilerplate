import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {theme} from 'enums';
import Routes from './routes';
import store from './store';

const Theme = createMuiTheme(theme);

const App = () => (
    <Provider store={store}>
        <MuiThemeProvider theme={Theme}>
            <Routes/>
        </MuiThemeProvider>
    </Provider>
);

ReactDOM.render(React.createElement(App), document.getElementById('app'));