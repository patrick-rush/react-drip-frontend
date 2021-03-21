import React from 'react';
import moment from 'moment';

function Event({ handleClick, event, plant, textColor }) {
    return (
        <div className="bg-gray-50 m-2 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <button onClick={() => handleClick(event.id, plant.id)} className={`text-left text-sm font-medium ${event.completed ? "line-through" : null} ${textColor}`}>
                {`${event.event_type} ${plant.name} (${moment(event.due_date).format("MMM Do")})`}
            </button>        
        </div>

    )

}

export default Event;