import React, { Component } from 'react';

class EventByPlant extends Component {
  
    formattedDueDate = ({due_date}) => {
        console.log(due_date);
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
    
    render() {
        return (
            <div className={"bg-gray-50 shadow overflow-hidden sm:rounded-lg mt-5"}>
                <button className="text-sm font-medium px-4 py-5 col-span-full">
                {`${this.props.event.event_type} on ${this.formattedDueDate(this.props.event)}`}
                </button>
            </div>
        )
    }
}

export default EventByPlant;