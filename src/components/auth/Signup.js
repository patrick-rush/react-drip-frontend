import React from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/auth';

class Signup extends React.Component {
    state = {
        email: "",
        password: "",
        errors: {status: {message: ""}}
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { email, password } = this.state;
        this.props
            .dispatchSignupUser({ email, password })
            .then(() => this.props.history.push("/"))
            .catch((errors) => this.setState({ errors }))
    }

    render() {
        return (
            <div>
                <div className="login-wrapper min-h-screen flex items-center justify-center bg-gradient-to-r to-green-dark via-green-light from-yellow py-12 px-4 sm:px-6 lg:px-8">
                    <div className={"max-w-md w-full space-y-8"}>
                        <h1 className="mt-6 text-center text-3xl font-extrabold text-black">Sign Up</h1>
                        <p className="h-8 text-red-400">{this.state.errors.status.message}</p>
                        <form onSubmit={this.handleSubmit} className="mt-8 space-y-6">
                            <div className="rounded-md -space-y-px">
                                <div>
                                    <label className="sr-only">Email</label>
                                    <input 
                                        onChange={this.handleChange} 
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
                                        onChange={this.handleChange} 
                                        type="password" 
                                        name="password" 
                                        required
                                        placeholder="Password" 
                                        value={this.state.password} 
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-white placeholder-gray text-gray-dark rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        />
                                </div>
                                <div>
                                    <input type="submit" value="Sign Up" className="group relative w-full flex justify-center my-2 py-2 px-4 border-2 border-white text-sm font-medium rounded-md text-white bg-green hover:bg-green-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-bright"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        dispatchSignupUser: (credentials) => dispatch(signupUser(credentials))
    }
}

export default connect(null, mapDispatchToProps)(Signup)