import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        <Redirect to={{ pathname: '/user_list_page', state: { from: props.location } }} />
    )} />
)