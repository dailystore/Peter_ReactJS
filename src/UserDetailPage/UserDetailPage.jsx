import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Select from 'react-select';

import { userActions } from '../_actions';

const contentStyles = {
    center: {
        fontFamily: 'sans-serif',
        textAlign: 'center',
    },
    back: {
        position: 'absolute',
        left: '10px',
        top: '10px',
        backgroundColor: 'yellow',
        width: '65px',
        letterSpacing: '4px',
        fontWeight: 'bold',
        lineHeight: '2em',
        paddingLeft: '5px'
    }
}


class UserDetailPage extends React.Component {

    constructor(props) {
        super(props);

    };

    componentDidMount() {
        this.setState({ users: null });
        const { match: { params } } = this.props;
        this.props.dispatch(userActions.getById(params.name));
    }

    render() {
        const { users } = this.props;
        const { items } = users;
        if (items === null) return <p style={contentStyles.center}>Loading ...</p>;
        return (

            <div style={contentStyles.center}>
                {items &&
                    <div className="App">
                        <Image src={items.avatar_url} />
                        <Profile name={items.name} location={items.location} />
                    </div>
                }
                <Link style={contentStyles.back} to='/user_list_page'>Back</Link>
            </div>
        );
    }
}

function Image(props) {
    return (
        <div className="Image" style={{ backgroundImage: 'url(' + props.src + ')' }}></div>
    );
}
function Profile(props) {
    return (
        <div className="Profile">
            <h1 className="Name">{props.name}</h1>
            <p className="Location">{props.location ? props.location + ' is the location where the folk lives' : 'A man who lives everywhere lives nowhere'} </p>
            <div className="Quote">
                <blockquote>&ldquo; Beautiful things don't ask for attention &rdquo;</blockquote>
                <div className="byline">&mdash; 'The Secret Life of Walter Mitty'</div>
            </div>

        </div>
    );
}

function mapStateToProps(state) {
    const { users } = state;
    return {
        users
    };
}

const connectedUserDetailPage = connect(mapStateToProps)(UserDetailPage);
export { connectedUserDetailPage as UserDetailPage };