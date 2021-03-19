import React, { Component } from 'react';
import moment from 'moment';

class NoteByPlant extends Component {

    handleDeleteNote = () => {
    }

    render() {
        return (
            <div className={"bg-white shadow overflow-hidden sm:rounded-lg mt-5"}>
                <div className="text-sm font-medium px-4 pt-5 pb-0 col-span-full">
                    {moment().format("dddd, MMMM Do YYYY")}
                    <button onClick={this.handleDeleteNote} >
                        <i className="pl-5 fa p-2 fa-trash trashNote"></i>
                    </button>
                </div>
                <div className="text-sm font-medium px-4 py-5 col-span-full">
                    {this.props.note.content}
                </div>
            </div>
        )
    }
}

export default NoteByPlant;