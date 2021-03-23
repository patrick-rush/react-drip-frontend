import React from 'react';

function Welcome({ info, sillyMessage }) {
        
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-green-900 sm:text-4xl">
                <span className="block">Welcome to Drip</span>
                <span className="block text-green-600">Keep those houseplants lookin their best</span>
                <span className="block text-green-300">{info}</span>
                <span className="block text-yellow-300">{sillyMessage}</span>
            </h2>
        </div>
    )
}

export default Welcome;