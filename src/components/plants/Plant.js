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
                className="bg-gray-50 m-2 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <button onClick={this.handleClick} className={`text-left text-sm font-medium ${this.props.textColor}`}>
                    {this.props.plant.name} the {this.props.plant.species}
                </button>        
            </div>

        )
    }
}

export default Plant;