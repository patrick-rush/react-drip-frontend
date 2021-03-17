import React, { Component } from 'react';

class PlantShow extends Component {
    
    handleDelete = () => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            this.props.deletePlant(this.props.plant.id);
            this.props.history.push(`/plants`)
        }
    }

    handleFrequencyChange = event => {
        console.log(event.target.id)
        const formData = new FormData();
        let newFrequency
        if (event.target.id === "increase") {
            newFrequency = this.props.plant.watering_frequency += 1
        } else if (event.target.id === "decrease") {
            newFrequency = this.props.plant.watering_frequency -= 1
        }
        formData.append('plant[watering_frequency]', newFrequency)
        this.props.updatePlant(formData, this.props.plant.id)
    }

    render() {
        return (
            <ul>
                <div className="opacity-80 m-2 bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <li className="text-sm font-medium text-gray-900">
                        Location
                    </li>
                    <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        {this.props.plant.location}
                    </li>
                    <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        <button onClick={e => this.props.history.push(`/plants/edit/${this.props.plant.id}`)} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i className="fa fa-pencil-alt content-end"></i>
                        </button>      
                        <button onClick={this.handleDelete} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i className="fa fa-trash content-end"></i>
                        </button>      
                    </li>
                </div>
                <div className="opacity-80 m-2 bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <li className="text-sm font-medium text-gray-900">
                        Watering Frequency
                    </li>
                    <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        {this.props.plant.watering_frequency} days
                    </li>
                    <li className="mt-1 text-sm col-span-2 text-green-900 sm:mt-0 sm:col-span-1">
                        <button id="decrease" onClick={this.handleFrequencyChange} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i id="decrease" className="fa fa-minus"></i>
                        </button>
                        <button id="increase" onClick={this.handleFrequencyChange} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i id="increase" className="fa fa-plus"></i>
                        </button>      
                    </li>
                </div>
                <div className="opacity-80 m-2 bg-gray-50 px-4 py-5 sm:grid sm:px-6">
                    <li className="text-sm font-medium text-gray-900">
                        Notes 
                        <button className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i className="fa fa-plus"></i>
                        </button>
                    </li>
                </div>  
                <div className="opacity-80 m-2 bg-white px-4 py-5 sm:grid sm:px-6">
                    <li className="text-sm font-medium text-gray-900">
                        Care Events
                        <button className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i className="fa fa-plus"></i>
                        </button>
                    </li>
                </div>  
            </ul>

        )
    }
}

export default PlantShow;