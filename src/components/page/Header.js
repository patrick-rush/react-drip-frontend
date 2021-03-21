import React from 'react';

function Header(props) {

    return (
        <div className="bg-white opacity-100 px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-green-900">
                {props.header}
            </h3>
        </div>
    )
}

export default Header;

