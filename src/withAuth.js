import { connect } from 'react-redux';
import React from 'react';
import { checkLoginStatus } from './actions/auth';
import { loginUser } from './actions/auth';

function withAuth(WrappedComponent) {
    class AuthorizedComponent extends React.Component {
        componentDidMount() {
            this.props.dispatchCheckLoginStatus();
        }    
        
        render() {
            if (!this.props.authChecked) {
                return "loading..."
            } else if (!this.props.loggedIn) {
                return <p>You need to <button onClick={() => this.props.dispatchLoginUser()}>login</button></p>
            // START HERE - ADD FORM
            }
            return <WrappedComponent {...this.props} />
        }
    };

    const mapStateToProps = state => {
        return {
            authChecked: state.auth.authChecked,
            loggedIn: state.auth.loggedIn
        };
    }
    
    const mapDispatchToProps = dispatch => {
        return {
            dispatchCheckLoginStatus: () => dispatch(checkLoginStatus()),
            dispatchLoginUser: (user) => dispatch(loginUser(user)),
        };
    }

    return connect(mapStateToProps, mapDispatchToProps)(AuthorizedComponent);

}

export default withAuth;