import React, { Component } from 'react';

class Header extends Component {
    
    selectHeader = ({ header }) => {
        if (header === "") {
            return <br/>
        } else if (header === "NAME") {
            return (
                `${this.props.currentPlant.name} the ${this.props.currentPlant.species}`
            )
        } else if (header === "Plants") {
            return "Plants"
        } else {
            return header
        }
    }
    
    render() {
        return (
            <div className="bg-white opacity-100 px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-green-900">
                    {/* {this.props.header === "" ? <br/> : this.props.header} */}
                    {this.selectHeader(this.props)}
                </h3>
            </div>
        )
    }
}

export default Header;