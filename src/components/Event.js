import React, { Component } from 'react';

class Event extends Component {
    
    handleClick = event => {
        this.props.selectEvent(this.props.event.id);
        this.props.history.push(`/events/${this.props.event.id}`)
    }
    
    render() {
        return (
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <button onClick={this.handleClick} className="text-left text-sm font-medium text-gray-500">
                    {`${this.props.event.event_type} ${this.props.plant.name}`}
                </button>        
            </div>

        )
    }
}

export default Event;