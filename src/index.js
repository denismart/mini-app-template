import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router';
import { Provider } from 'react-redux';
import { erudaInit } from 'mini-juice/common';
import { bridgeInitApp } from 'mini-juice/vk';
import App from './App';
import store from './store';
import history from './history';

bridgeInitApp();

const urls = ['', 'dummy'];

const pathRegex = `/:pageId(${urls.join('|')}|)?`;

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path={pathRegex} component={(props) => <App pageId={props.match.params.pageId} />} />
        </Router>
    </Provider>,
    document.getElementById('root'),
);

erudaInit();
