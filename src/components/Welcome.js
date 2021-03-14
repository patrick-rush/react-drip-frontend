import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 class="text-3xl font-extrabold tracking-tight text-green-900 sm:text-4xl">
                    <span class="block">Welcome to Drip</span>
                    <span class="block text-green-600">Keep those houseplants lookin their best</span>
                </h2>
            </div>
        )
    }
}

export default Welcome;