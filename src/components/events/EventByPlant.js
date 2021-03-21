import React, { Component } from 'react';

class EventByPlant extends Component {
  
    formattedDueDate = ({due_date}) => {
        const date = new Date(`${due_date} 00:00`).toDateString(
            'en-us',
            {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric'
            }
        );
        return date;
    }

    handleOnClick = () => {
        this.props.setEventToActive(this.props.event.id);
        this.props.history.push(`/events/${this.props.event.id}`);
    }
    
    render() {
        return (
            <div className={"bg-gray-50 shadow overflow-hidden sm:rounded-lg mt-5"}>
                <button onClick={this.handleOnClick} disabled={this.props.event.completed} className={`text-sm font-medium px-4 py-5 col-span-full ${this.props.event.completed ? "line-through cursor-not-allowed" : null}`} >
                    {`${this.props.event.event_type} on ${this.formattedDueDate(this.props.event)}`}
                </button>
            </div>
        )
    }
}

export default EventByPlant;