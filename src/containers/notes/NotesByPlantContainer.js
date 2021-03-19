import React, { Component } from 'react';
import NoteByPlant from '../../components/notes/NoteByPlant';
import { connect } from 'react-redux';

class NotesByPlantContainer extends Component {
    
    renderNotes = () => {
        const sortedNotes = this.props.notes.sort((a, b) => a.created_at < b.created_at ? 1:-1);
        return sortedNotes.map(note => <NoteByPlant note={note} plant={this.props.plant} />);
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

// const mapDispatchToProps = dispatch => {
//     return {
//     }
// }

export default connect(mapStateToProps)(NotesByPlantContainer);