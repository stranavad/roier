import React from 'react';
import PropTypes from 'prop-types';

class Protected extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.props.updateState(this.props.user, this.props.email); // Sending props to App.js, when page loads
    }

    handleLogout() {
        this.props.handleLogout();
        this.props.history.push({
                pathname: "/",
            })
    }

    render() {
        return (
            <div>
                <h1>Protected page</h1>
                <p>Email: {this.props.email}</p>
                <button onClick={this.handleLogout}>Log Out</button>
            </div>
         );
    }
}

Protected.propTypes = {
    email: PropTypes.string.isRequired,
    handleLogout: PropTypes.func.isRequired,
    updateState: PropTypes.func.isRequired,
}

export default Protected;