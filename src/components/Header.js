import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-green-900">
                    {this.props.header === "" ? <br/> : this.props.header}
                </h3>
            </div>
        )
    }
}

export default Header;