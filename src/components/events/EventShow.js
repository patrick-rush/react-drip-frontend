import React, { Component } from 'react';
import moment from 'moment';

class EventShow extends Component {
    
    handleFrequencyChange = event => {
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
        const eventType = this.props.event.event_type;
        let frequencyName
        switch (eventType) {
            case 'water':
                frequencyName = 'watering_frequency';
                break
            case 'fertilize':
                frequencyName = 'fertilizing_frequency';
                break
            case 'repot':
                frequencyName = 'repotting_frequency';
                break
            case 'prune':
                frequencyName = 'pruning_frequency';
                break
            default:
                return null;
        }
        if (completed) {
            const newDate = moment().add(this.props.plant[frequencyName], 'days').format("YYYY-MM-DD");
            const newEvent = {
                event_type: eventType,
                plant_id: this.props.plant.id,
                due_date: newDate
            }
            this.props.createEvent(newEvent)
        }
    }

    createLabel = (eventType) => {
        switch (eventType) {
            case 'water':
                return 'Watering Frequency';
            case 'fertilize':
                return 'Fertilizing Frequency';
            case 'repot':
                return 'Repotting Frequency';
            case 'prune':
                return 'Pruning Frequency';
            default:
                return null;
        }
    }

    renderFrequency = (eventType, plant) => {
        switch (eventType) {
            case 'water':
                return plant.watering_frequency;
            case 'fertilize':
                return plant.fertilizing_frequency;
            case 'repot':
                return plant.repotting_frequency;
            case 'prune':
                return plant.pruning_frequency;
            default:
                return null;
        }
    }
    
    render() {
        return (
            <ul>
                <div className="opacity-80 m-2 bg-gray-light px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <li className="text-sm font-medium text-gray-dark">
                        {this.createLabel(this.props.event.event_type)}
                    </li>
                    <li className="mt-1 text-sm text-green-dark sm:mt-0 sm:col-span-1">
                        {this.renderFrequency(this.props.event.event_type, this.props.plant)} days
                    </li>
                    <li className="mt-1 text-sm text-green-dark sm:mt-0 sm:col-span-1">
                        <button id="decrease" onClick={this.handleFrequencyChange} className="pl-2 pr-2 text-sm font-medium text-gray-dark">
                            <i id="decrease" className="fa fa-minus"></i>
                        </button>
                        <button id="increase" onClick={this.handleFrequencyChange} className="pl-2 pr-2 text-sm font-medium text-gray-dark">
                            <i id="increase" className="fa fa-plus"></i>
                        </button>
                    </li>
                </div>
                <div className="opacity-80 m-2 bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <li className="text-sm font-medium text-gray-dark">
                        Mark as Complete
                    </li>
                    <li className="mt-1 text-sm text-green-dark sm:mt-0 sm:col-span-1">
                    </li>
                    <li className="mt-1 text-sm text-green-dark sm:mt-0 sm:col-span-1">
                        <button onClick={this.handleClickCheck} className={`pl-2 pr-2 text-sm font-medium ${this.props.event.completed ? "text-green" : "text-gray-dark"}`}>
                            <i className="fas fa-check"></i>
                        </button>
                        <button onClick={this.handleDelete} className={`pl-2 pr-2 text-sm font-medium text-gray-dark`}>
                            <i className="fa fa-trash content-end"></i>
                        </button>
                    </li>
                </div>
            </ul>
        )
    }
}

export default EventShow;