import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../actions/auth';


function NavigationContainer(props) {

  const handleLogout = () => {
    const proceed = window.confirm("Are you sure you want to log out?");
    if (proceed) {
      props.logout()
    }
  }

  return (
    <nav className="bg-gradient-to-r to-green-dark via-green-light from-yellow">
    {/* <nav className="bg-gradient-to-r from-green-400 to-green-800"> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    exact
                    to="/"
                    className="hover:bg-green-dark hover:text-white bg-green text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="text-green-light bg-green-dark"
                    >Today
                  </NavLink>
                  <NavLink 
                    exact
                    to="/plants"
                    className="hover:bg-green-dark hover:text-white bg-green text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="text-green-light bg-green-dark"
                    >Plants
                  </NavLink>
                  <NavLink
                    exact
                    to="/plants/new"
                    className="hover:bg-green-dark hover:text-white bg-green text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="text-green-light bg-green-dark"
                    >New Plant
                  </NavLink>
                  {/* <button
                    onClick={() => localStorage.clear()}
                    className="hover:bg-green-dark hover:text-white bg-green text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="text-green-light bg-green-dark"
                    >Logout
                  </button> */}
                  <div onClick={handleLogout} className="cursor-pointer hover:bg-green-dark hover:text-white bg-green text-white px-3 py-2 rounded-md text-sm font-medium">Logout</div>
                </div>
              </div>  
            </div>
          </div>
        </div>  
    </nav>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

export default connect(null, mapDispatchToProps)(NavigationContainer);