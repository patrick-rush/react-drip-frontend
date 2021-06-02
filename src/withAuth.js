import { connect } from 'react-redux';
import React from 'react';
import { checkLoginStatus, loginUser, signupUser } from './actions/auth';

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

        handleOnLogin = event => {
            event.preventDefault();
            console.log("type =", event)
            this.props.dispatchLoginUser(this.state);
            this.setState({
                email: '',
                password: ''
            })
        }

        handleOnSignup = event => {
            event.preventDefault();
            this.props.dispatchSignupUser(this.state);
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
                    {/* <div className="bg-green"> */}
                        <div>

                        <div className="login-wrapper min-h-screen flex items-center justify-center bg-gradient-to-r from-green-dark via-green-light to-yellow py-12 px-4 sm:px-6 lg:px-8">
                            <div className={"max-w-md w-full space-y-8"}>
                            {/* <div className={`max-w-md w-full space-y-8 animate-wiggle`}> */}

                                <h1 className="mt-6 text-center text-3xl font-extrabold text-black">Please Log In</h1>
                                <form className="mt-8 space-y-6">
                                    <div className="rounded-md shadow-sm -space-y-px">
                                        <div>
                                            <label className="sr-only">Email</label>
                                            <input 
                                                onChange={this.handleOnChange} 
                                                type="text" 
                                                name="email" 
                                                required
                                                placeholder="Email" 
                                                value={this.state.email} 
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-white placeholder-gray text-gray-dark rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                />
                                        </div>
                                        <div>
                                            <label className="sr-only">Password</label>
                                            <input 
                                                onChange={this.handleOnChange} 
                                                type="password" 
                                                name="password" 
                                                required
                                                placeholder="Password" 
                                                value={this.state.password} 
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-white placeholder-gray text-gray-dark rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                />
                                        </div>
                                        <div>
                                            <input type="submit" value="Login" onClick={this.handleOnLogin} className="group relative w-full flex justify-center mt-2 my-2 py-2 px-4 border-2 border-white text-sm font-medium rounded-md text-white bg-green hover:bg-green-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green"></input>
                                            <input type="submit" value="Signup" onClick={this.handleOnSignup} className="group relative w-full flex justify-center my-2 py-2 px-4 border-2 border-white text-sm font-medium rounded-md text-white bg-green hover:bg-green-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-bright"></input>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
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
            dispatchSignupUser: (user) => dispatch(signupUser(user))
        };
    }

    return connect(mapStateToProps, mapDispatchToProps)(AuthorizedComponent);

}

export default withAuth;