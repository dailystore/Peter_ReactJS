import React from 'react';
import { connect } from 'react-redux';

class UserProfilePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            person: {
                name: 'Jack-Edward Oliver',
                biography: '26 year old Designer / Developer living in Stockholm. Originally from Oxford, England. Love to make stuff.',
            },
            image: 'https://data.whicdn.com/images/224800842/large.jpg',
            quote: {
                content: 'Beautiful things don\'t ask for attention',
                source: 'The Secret Life of Walter Mitty'
            }

        };
    }

    render() {
        const { creating } = this.props;
        return (
            <div className="App">
                <Image src={this.state.image} />
                <Profile person={this.state.person} quote={this.state.quote} />
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
            <h1 className="Name">{props.person.name}</h1>
            <p className="Bio">{props.person.biography}</p>
            <div className="Quote">
                <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
                <div className="byline">&mdash; {props.quote.source}</div>
            </div>

        </div>
    );
}

function mapStateToProps(state) {
    const { nil } = state;
    return {
        nil
    };
}

const connectedUserProfilePage = connect(mapStateToProps)(UserProfilePage);
export { connectedUserProfilePage as UserProfilePage };