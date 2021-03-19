import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteForm from '../../components/notes/NoteForm';
import { createNote } from '../../actions/notes';

class NoteFormContainer extends Component {
    render() {
        return (
            <NoteForm currentPlant={this.props.currentPlant} createNote={this.props.createNote} />
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
        createNote: (note) => dispatch(createNote(note))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteFormContainer);