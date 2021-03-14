import React, { Component } from 'react';

class PlantShow extends Component {
    render() {
        return (
            <ul>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <li class="text-sm font-medium text-gray-500">
                        Location
                    </li>
                    <li class="location mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        {this.props.plant.location}
                    </li>
                    <li class="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        <a href="#edit" class="my-4 pr-2 text-right"><i class="editPlant fa fa-pencil-alt content-end"></i></a>      
                        <a href="#delete" class="my-4 p-2 text-right"><i class="deletePlant fa fa-trash content-end"></i></a>      
                    </li>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <li class="text-sm font-medium text-gray-500">
                        Watering Frequency
                    </li>
                    <li class="watering_frequency mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        {this.props.plant.watering_frequency} days
                    </li>
                    <li class="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        <a href="#decrease" class="my-4 pr-2 text-right"><i class="fa fa-minus decreaseDays"></i></a>
                        <a href="#increase" class="my-4 p-2 text-right"><i class="fa fa-plus increaseDays"></i></a>      
                    </li>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:px-6">
                    <li class="notesContainer text-sm font-medium text-gray-500">
                        Notes <a href="#addNote" class="my-4 p-2 text-right"><i class="fa fa-plus addNoteIcon"></i></a>
                    </li>
                    </div>  
                    <div class="bg-white px-4 py-5 sm:grid sm:px-6">
                    <li class="careEventsContainer text-sm font-medium text-gray-500">
                        Care Events <a href="#addCareEvent" class="my-4 p-2 text-right"><i class="fa fa-plus addCareEventIcon"></i></a>
                    </li>
                </div>  
            </ul>

        )
    }
}

export default PlantShow;