import React from 'react';

function Header(props) {

    return (
        <div className="bg-white opacity-90 opacity-100 px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-green-dark">
                {props.header}
            </h3>
        </div>
    )
}

export default Header;

