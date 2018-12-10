import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Select from 'react-select';

const contentStyles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
}

class UserListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topFive: ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"]
        };
    }

    render() {
        const { topFive } = this.state;
        return (
            <div style={contentStyles}>
                <h1>TOP 5 GITHUB USERS</h1>
                <p>Tap the username to see more information</p>

                <div className={'form-group ' + !this.props.match.params.name ? 'display' : 'hide'}>
                    {topFive.map((item, index) =>
                        <Link key={index} to={'/user_list_page/' + item} className="btn btn-link" > {item}</Link>
                    )}
                </div>

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

const connectedUserListPage = connect(mapStateToProps)(UserListPage);
export { connectedUserListPage as UserListPage };