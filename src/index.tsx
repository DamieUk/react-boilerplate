import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './rxjs-imports';

import App from './app';
import {
    store,
    browserHistory,
    epicMiddleware,
} from './store';

const renderRoot = (app: JSX.Element) => ReactDOM.render(app, document.getElementById('app'));

if (process.env.NODE_ENV === 'production') {
    renderRoot(<App store={store} history={browserHistory}/>);
} else {

    const AppContainer = require('react-hot-loader').AppContainer;

    renderRoot(
        <AppContainer>
            <App store={store} history={browserHistory}/>
        </AppContainer>
    );

    if (module.hot) {
        module.hot.accept('./app', () => {
            const NextApp = require('./app').default;
            renderRoot(
                <AppContainer>
                    <NextApp store={store} history={browserHistory}/>
                </AppContainer>
            );
        });

        module.hot.accept('./reducers', () => {
            const newRootReducer = require('./reducers').default;
            store.replaceReducer(newRootReducer);
        });

        module.hot.accept('./epics', () => {
            const newRootEpic = require('./epics').rootEpic;
            store.dispatch({type: 'END'});
            epicMiddleware.run(newRootEpic);
        });
    }
}