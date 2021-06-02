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
        this.props.fetchEvents()
        .then(() => {
            this.props.setEventToActive(this.props.event.id);
            this.props.history.push(`/events/${this.props.event.id}`);
        })
    }
    
    render() {
        return (
            <div onClick={this.handleOnClick} className={"bg-gray-light shadow overflow-hidden sm:rounded-lg mt-5 cursor-pointer"}>
                <div disabled={this.props.event.completed} className={`text-sm font-medium px-4 py-5 col-span-full ${this.props.event.completed ? "line-through cursor-not-allowed" : null}`} >
                    {`${this.props.event.event_type} on ${this.formattedDueDate(this.props.event)}`}
                </div>
            </div>
        )
    }
}

export default EventByPlant;