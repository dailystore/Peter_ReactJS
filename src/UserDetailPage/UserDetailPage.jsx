import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Select from 'react-select';

import { userActions } from '../_actions';

const contentStyles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
}

class UserDetailPage extends React.Component {
    componentDidMount() {
        const { name } = this.props.match.params;
        this.props.dispatch(userActions.getById(name));
        this.props.handler;
    }
    constructor(props) {
        super(props);

        this.state = {
        };
    };

    render() {
        const { users } = this.props;

        return (

            <div style={contentStyles}>
                {users.items && <h1>{users.items.name}</h1>}
                <Link to='/user_list_page'>Back</Link>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { users } = state;
    return {
        users
    };
}

const connectedUserDetailPage = connect(mapStateToProps)(UserDetailPage);
export { connectedUserDetailPage as UserDetailPage };