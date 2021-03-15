import React, { Component } from 'react';

class EventShow extends Component {
    render() {
        return (
            <ul>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <li className="text-sm font-medium text-gray-500">
                    Watering Frequency
                </li>
                <li className="watering_frequency mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                    Hello World
                </li>
                <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                    <a href="#decrease" className="my-4 pr-2 text-right"><i className="fa fa-minus decreaseDays"></i></a>
                    <a href="#increase" className="my-4 p-2 text-right"><i className="fa fa-plus increaseDays"></i></a>      
                </li>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <li className="text-sm font-medium text-gray-500">
                    Mark as Complete
                </li>
                <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                    Hello World
                </li>
                <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                    <a href="#complete" className="my-4 pr-2 text-right"><i className="fas fa-check completed"></i></a>      
                    <a href="#delete" className="my-4 p-2 text-right"><i className="deleteCareEvent fa fa-trash content-end"></i></a>      
                </li>
                </div>
            </ul>
        )
    }
}

export default EventShow;