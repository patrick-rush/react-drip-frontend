import React, { Component } from 'react';

class PlantShow extends Component {
    render() {
        return (
            <ul>
                <div className="opacity-80 m-2 bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <li className="text-sm font-medium text-gray-900">
                        Location
                    </li>
                    <li className="location mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        {this.props.plant.location}
                    </li>
                    <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        <button className="pl-2 pr-2 text-sm font-medium text-gray-900"><i className="editPlant fa fa-pencil-alt content-end"></i></button>      
                        <button className="pl-2 pr-2 text-sm font-medium text-gray-900"><i className="deletePlant fa fa-trash content-end"></i></button>      
                    </li>
                </div>
                <div className="opacity-80 m-2 bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <li className="text-sm font-medium text-gray-900">
                        Watering Frequency
                    </li>
                    <li className="watering_frequency mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        {this.props.plant.watering_frequency} days
                    </li>
                    <li className="mt-1 text-sm col-span-2 text-green-900 sm:mt-0 sm:col-span-1">
                        <button className="pl-2 pr-2 text-sm font-medium text-gray-900"><i className="fa fa-minus decreaseDays"></i></button>
                        <button className="pl-2 pr-2 text-sm font-medium text-gray-900"><i className="fa fa-plus increaseDays"></i></button>      
                    </li>
                </div>
                <div className="opacity-80 m-2 bg-gray-50 px-4 py-5 sm:grid sm:px-6">
                    <li className="notesContainer text-sm font-medium text-gray-900">
                        Notes <button className="pl-2 pr-2 text-sm font-medium text-gray-900"><i className="fa fa-plus addNoteIcon"></i></button>
                    </li>
                </div>  
                <div className="opacity-80 m-2 bg-white px-4 py-5 sm:grid sm:px-6">
                    <li className="careEventsContainer text-sm font-medium text-gray-900">
                        Care Events <button className="pl-2 pr-2 text-sm font-medium text-gray-900"><i className="fa fa-plus addCareEventIcon"></i></button>
                    </li>
                </div>  
            </ul>

        )
    }
}

export default PlantShow;