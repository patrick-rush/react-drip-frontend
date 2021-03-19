import React, { Component } from 'react';
import NoteByPlant from '../../components/notes/NoteByPlant';
import { connect } from 'react-redux';
import { deleteNote } from '../../actions/notes';

class NotesByPlantContainer extends Component {
    
    renderNotes = () => {
        const sortedNotes = this.props.notes.sort((a, b) => a.created_at < b.created_at ? 1:-1);
        return sortedNotes.map(note => <NoteByPlant key={note.id} note={note} plant={this.props.plant} deleteNote={this.props.deleteNote} />);
    }
    
    render() {
        return (
            <div>
                {this.renderNotes()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        plant: state.plants.currentPlant,
        events: state.events.eventsByCurrentPlant,
        notes: state.notes.notesByCurrentPlant
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteNote: (noteId) => dispatch(deleteNote(noteId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesByPlantContainer);