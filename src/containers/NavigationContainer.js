import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { manageNavigation } from '../actions/page';

class NavigationContainer extends Component {
    render() {
        return (
        <nav className="bg-green-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <NavLink 
                        exact
                        to="/"
                        // isActive={this.props.manageNavigation("welcome")}
                        className="hover:bg-green-700 hover:text-white bg-green-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                        activeClassName="text-green-100 bg-green-900"
                        >Plants
                      </NavLink>
                      <NavLink
                        exact
                        to="/events"
                        className="hover:bg-green-700 hover:text-white bg-green-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                        activeClassName="text-green-100 bg-green-900"
                        >Today
                      </NavLink>
                      <NavLink
                        exact
                        to="/plants/new"
                        className="hover:bg-green-700 hover:text-white bg-green-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                        activeClassName="text-green-100 bg-green-900"
                        >New Plant
                      </NavLink>
                    </div>
                  </div>  
                </div>
              </div>
            </div>  
        </nav>
        )
    }
}

// const mapStateToProps = state => {

// }

// const mapDispatchToProps = dispatch => {
//   return {
//     manageNavigation: (location) => dispatch(manageNavigation(location, null))
//   }
// }

export default NavigationContainer;