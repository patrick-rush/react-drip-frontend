import React, { Component } from 'react';

class Plant extends Component {
    
    handleClick = event => {
        this.props.history.push(`/plants/${this.props.plant.id}`)
    }
    
    render() {
        return (
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <button onClick={this.handleClick} className="text-left text-sm font-medium text-gray-500">
                    {this.props.plant.name}
                </button>        
            </div>

        )
    }
}

export default Plant;