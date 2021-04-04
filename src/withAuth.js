import { connect } from 'react-redux';
import React from 'react';
import { checkLoginStatus } from './actions/auth';
import { loginUser } from './actions/auth';

function withAuth(WrappedComponent) {
    class AuthorizedComponent extends React.Component {

        state = {
            email: '',
            password: ''
        }

        componentDidMount() {
            this.props.dispatchCheckLoginStatus();
        }

        handleOnChange = event => {
            this.setState({
                [event.target.name]: event.target.value
              })      
        }

        handleOnSubmit = event => {
            event.preventDefault();
            this.props.dispatchLoginUser(this.state);
            this.setState({
                email: '',
                password: ''
            })
        }
        
        render() {
            if (!this.props.authChecked) {
                return "loading..."
            } else if (!this.props.loggedIn) {
                // return <p>You need to <button onClick={() => this.props.dispatchLoginUser()}>login</button></p>
            // START HERE - ADD FORM
                return (
                    <div>
                        <h3>You need to login</h3>
                        <form onSubmit={this.handleOnSubmit} >
                            <label name="email">Email</label>
                            <input onChange={this.handleOnChange} type="text" name="email" value={this.state.email}></input>
                            <label name="password">Password</label>
                            <input onChange={this.handleOnChange} type="password" name="password" value={this.state.password}></input>
                            <input type="submit" value="Login"></input>
                        </form>
                    </div>
                )
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