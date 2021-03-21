import React from 'react';

function Plant({ plant, textColor, handleClick }) {
    return (
        <div
            className="bg-gray-50 m-2 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <button onClick={() => handleClick(plant.id)} className={`text-left text-sm font-medium ${textColor}`}>
                {plant.name} the {plant.species}
            </button>        
        </div>
    )
}

export default Plant;