import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteForm from '../../components/notes/NoteForm';
import { createNote } from '../../actions/notes';
import { toggleShowNoteForm } from '../../actions/notes';

class NoteFormContainer extends Component {
    render() {
        return (
            <NoteForm currentPlant={this.props.currentPlant} createNote={this.props.createNote} toggleShowNoteForm={toggleShowNoteForm} />
        )
    }
}

const mapStateToProps = state => {
    return {
        currentPlant: state.plants.currentPlant
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createNote: (note) => dispatch(createNote(note)),
        toggleShowNoteForm: () => dispatch(toggleShowNoteForm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteFormContainer);