import React from 'react';
import moment from 'moment';

function NoteByPlant({ handleDelete, note }) {
    return (
        <div className={"bg-white opacity-90 shadow overflow-hidden sm:rounded-lg mt-5"}>
            <div className="text-sm font-medium px-4 pt-5 pb-0 col-span-full">
                {moment().format("dddd, MMMM Do YYYY")}
                <button onClick={() => handleDelete(note.id)} >
                    <i className="fa p-2 fa-trash trashNote"></i>
                </button>
            </div>
            <div className="text-sm font-medium px-4 py-5 col-span-full">
                {note.content}
            </div>
        </div>
    )
}

export default NoteByPlant;