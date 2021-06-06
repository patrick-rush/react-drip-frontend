import React from 'react';
import moment from 'moment';

function Event({ handleClick, event, plant, textColor }) {
    return (
        <div onClick={() => handleClick(event.id, plant.id)} className="cursor-pointer bg-gray-light m-2 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <span className={`text-left text-sm font-medium cursor-pointer ${event.completed ? "line-through" : null} ${textColor}`}>
                {`${event.event_type} ${plant.name} (${moment(event.due_date).format("MMM Do")})`}
            </span>        
        </div>

    )

}

export default Event;