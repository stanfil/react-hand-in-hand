import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './ui/App';
import LogIn from './ui/auth/LogIn';
import Main from './ui/main/Main';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { setCurrentUser } from "./redux/actions/authActions";
import SignUp from "./ui/auth/SignUp";

if (sessionStorage.jwtToken) {
    const user = JSON.parse(sessionStorage.user);
    store.dispatch(setCurrentUser(user));
}

export const renderRoutes = () => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path={'/'} component={App}>
                <Route path={'/login'} component={LogIn} />
                <Route path={'/signup'} component={SignUp} />
                <Route path={'/app'} component={Main} />
            </Route>
        </Router>
    </Provider>
);