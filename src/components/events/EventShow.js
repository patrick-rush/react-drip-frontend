import React, { Component } from 'react';
import moment from 'moment';

class EventShow extends Component {
    
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

    handleDelete = () => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            this.props.deleteEvent(this.props.event.id);
            this.props.history.push('/events');
        }
    }

    handleClickCheck = () => {
        const completed = !this.props.event.completed;
        const event = {
            completed: completed
        }
        this.props.updateEvent(event, this.props.event.id);
        if (completed) {
            const newDate = moment().add(this.props.plant.watering_frequency, 'days').format("YYYY-MM-DD");
            const today = moment().format('YYYY-MM-DD');
            console.log("this is watering frequency", this.props.plant.watering_frequency);
            console.log("this is today", today);
            console.log("this is the new date", newDate);
            const newEvent = {
                event_type: "Water",
                plant_id: this.props.plant.id,
                due_date: newDate
            }
            this.props.createEvent(newEvent)
        }
    }
    
    render() {
        return (
            <ul>
                <div className="opacity-80 m-2 bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <li className="text-sm font-medium text-gray-900">
                        Watering Frequency
                    </li>
                    <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        {this.props.plant.watering_frequency} days
                    </li>
                    <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        <button id="decrease" onClick={this.handleFrequencyChange} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i id="decrease" className="fa fa-minus"></i>
                        </button>
                        <button id="increase" onClick={this.handleFrequencyChange} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i id="increase" className="fa fa-plus"></i>
                        </button>
                    </li>
                </div>
                <div className="opacity-80 m-2 bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <li className="text-sm font-medium text-gray-900">
                        Mark as Complete
                    </li>
                    <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                    </li>
                    <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        <button onClick={this.handleClickCheck} className={`pl-2 pr-2 text-sm font-medium ${this.props.event.completed ? "text-green-500" : "text-gray-900"}`}>
                            <i className="fas fa-check"></i>
                        </button>
                        <button onClick={this.handleDelete} className={`pl-2 pr-2 text-sm font-medium text-gray-900`}>
                            <i className="fa fa-trash content-end"></i>
                        </button>
                    </li>
                </div>
            </ul>
        )
    }
}

export default EventShow;