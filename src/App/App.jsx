import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { PrivateRoute } from '../_components';
import { UserProfilePage } from '../UserProfilePage';
import { UserListPage } from '../UserListPage';
import { UserDetailPage } from '../UserDetailPage';

import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
        });
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <PrivateRoute exact path="/" component={UserListPage} />
                        <Route path="/user_profile" component={UserProfilePage} />
                        <Route path="/user_list_page" component={UserListPage} />
                        <Route path="/user_list_page/:name" component={UserDetailPage} />
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { nil } = state;
    return {
        nil
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 