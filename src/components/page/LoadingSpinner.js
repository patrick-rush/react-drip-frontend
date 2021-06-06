import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="fixed top-0 flex items-center w-screen h-screen z-20 bg-green bg-opacity-70">
            <div className="text-5xl text-white text-center w-10 mx-auto">
                <i className="fa fa-leaf animate-spin text-center w-full m-2 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6"></i>
            </div>
        </div>
    )
}

export default LoadingSpinner;