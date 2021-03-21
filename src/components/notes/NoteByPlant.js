import React, { Component } from 'react';
import moment from 'moment';

class NoteByPlant extends Component {

    handleDelete = () => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            this.props.deleteNote(this.props.note.id);
        }
    }

    render() {
        return (
            <div className={"bg-white shadow overflow-hidden sm:rounded-lg mt-5"}>
                <div className="text-sm font-medium px-4 pt-5 pb-0 col-span-full">
                    {moment().format("dddd, MMMM Do YYYY")}
                    <button onClick={this.handleDelete} >
                        <i className="fa p-2 fa-trash trashNote"></i>
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