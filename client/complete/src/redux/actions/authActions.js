import axios from 'axios';
import { Settings } from '../../settings';
import { browserHistory } from 'react-router';

export function setCurrentUser(user) {
    return {
        type: 'AUTH_USER',
        user
    }
}

function handleError(error) {
    if(error.response) {
        console.log(error.response.data.error);
    } else {
        console.log(error);
    }
}

export function login(data) {
    return dispatch => {
        axios.post(`${Settings.host}/auth/login`,data).then(response => {
            const token = response.data.token;
            const user = response.data.user;
            const items = response.data.items;
            sessionStorage.setItem('jwtToken', token);
            sessionStorage.setItem('user', JSON.stringify(user));
            sessionStorage.setItem('items', JSON.stringify(items));
            dispatch(setCurrentUser(user));
            browserHistory.push(`/`);
            console.log("Login success!");
        }).catch(error => {
            handleError(error);
        });
    };
}

export function signup(data) {
    return dispatch => {
        axios.post(`${Settings.host}/auth/signup`, data).then(response => {
            const token = response.data.token;
            const user = response.data.user;
            const items = response.data.items;
            sessionStorage.setItem('jwtToken',token);
            sessionStorage.setItem('user', JSON.stringify(user));
            sessionStorage.setItem('items', JSON.stringify(items));
            dispatch(setCurrentUser(user));
            browserHistory.push('/');
            console.log('signup success');
        }).catch(error => {
            handleError(error);
        });
    }
}

export function logout() {
    return dispatch => {
        sessionStorage.removeItem('jwtToken');
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('items');
        dispatch(setCurrentUser({}));
        browserHistory.push('/');
    }
}