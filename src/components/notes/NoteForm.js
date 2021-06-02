import React, { Component } from 'react';

class NoteForm extends Component {
    
    state = {
        content: ""
    }

    handleOnChange = event => {
        this.setState({
            content: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const newNote = {
            content: this.state.content,
            plant_id: this.props.currentPlant.id
        }
        this.props.createNote(newNote);
        this.setState({
            content: ""
        })
        this.props.toggleShowNoteForm()
    }
    
    render() {
        return (
            <form onSubmit={this.handleOnSubmit} className="bg-white shadow overflow-hidden sm:rounded-lg mt-5">
                <div className="col-span-6 sm:col-span-3">
                    <textarea onChange={this.handleOnChange} value={this.state.content} className="h-20 px-2 py-1 mt-1 focus:ring-green focus:border-green block w-full shadow-sm sm:text-sm border-gray-light rounded-md"></textarea>
                </div>
                <div className="px-4 py-3 bg-gray-light text-right sm:px-6">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green">
                        Save
                    </button>
                </div>
            </form>
        )
    }
}

export default NoteForm;