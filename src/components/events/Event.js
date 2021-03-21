import React, { Component } from 'react';
import moment from 'moment';

class Event extends Component {
    
    handleClick = () => {
        this.props.setEventToActive(this.props.event.id);
        this.props.setPlantToActive(this.props.plant.id);
        this.props.history.push(`/events/${this.props.event.id}`)
    }
    
    render() {
        return (
            <div className="bg-gray-50 m-2 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <button onClick={this.handleClick} className={`text-left text-sm font-medium ${this.props.event.completed ? "line-through" : null} ${this.props.textColor}`}>
                    {`${this.props.event.event_type} ${this.props.plant.name} (${moment(this.props.event.due_date).format("MMM Do")})`}
                </button>        
            </div>

        )
    }
}

export default Event;