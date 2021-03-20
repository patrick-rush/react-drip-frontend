import React, { Component } from 'react';

class Plant extends Component {
    
    handleClick = event => {
        console.log("from plant component", this.props.plant.id)
        this.props.setPlantToActive(this.props.plant.id);
        this.props.fetchEventsByPlant(this.props.plant.id);
        this.props.fetchNotesByPlant(this.props.plant.id);
        this.props.history.push(`/plants/${this.props.plant.id}`)
    }
    
    render() {
        return (
            <div
                className="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <button onClick={this.handleClick} className={`text-left text-sm font-medium ${this.props.textColor}`}>
                    {this.props.plant.name}
                </button>        
            </div>

        )
    }
}

export default Plant;