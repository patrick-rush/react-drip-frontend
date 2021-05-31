import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationContainer() {
  return (
    <nav className="bg-green">
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
                    activeClassName="text-green-light bg-green-dar"
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
                </div>
              </div>  
            </div>
          </div>
        </div>  
    </nav>
  )
}

export default NavigationContainer;