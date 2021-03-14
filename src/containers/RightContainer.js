import React, { Component } from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';

class RightContainer extends Component {
    render() {
        return (
            <div className="overflow-hidden bg-white sm:min-h-screen col-span-2 rounded-md shadow">
                {/* <div className="overflow-hidden px-4 py-5 sm:px-6">
                    <h3 className="overflow-hidden text-lg leading-6 font-medium text-green-900">
                    <br />
                    </h3>
                </div> */}
                <Header />
                <div className="border-t border-gray-200">
                    {/* <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                        <h2 class="text-3xl font-extrabold tracking-tight text-green-900 sm:text-4xl">
                            <span class="block">Welcome to Drip</span>
                            <span class="block text-green-600">Keep those houseplants lookin their best</span>
                        </h2>
                    </div> */}
                    <Welcome />
                </div>
            </div>
        )
    }
}

export default RightContainer;