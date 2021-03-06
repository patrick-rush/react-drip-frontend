import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/page/Header';
import Welcome from '../../components/page/Welcome';
import PlantShow from '../../components/plants/PlantShow';
import { deletePlant, updatePlant } from '../../actions/plants';
import { toggleShowEventForm } from '../../actions/events';
import { toggleShowNoteForm } from '../../actions/notes';
import { objectIsEmpty } from '../../helpers';

class PlantShowContainer extends Component {
    
    handleBackground = () => {
        if (this.props.currentPlant && this.props.currentPlant.photo_url) {
            return { backgroundImage: `url("${this.props.currentPlant.photo_url}")` };
        }
    }

    renderPlant = (props) => {
        return (
            <PlantShow
                plant={props.currentPlant}
                history={props.history} 
                deletePlant={props.deletePlant} 
                updatePlant={props.updatePlant} 
                toggleShowEventForm={props.toggleShowEventForm} 
                toggleShowNoteForm={props.toggleShowNoteForm} 
                showEventForm={props.showEventForm} 
                showNoteForm={props.showNoteForm} 
            />
        )
    }
    
    render() {
        return (
            <div 
                className="overflow-hidden bg-center bg-cover bg-white opacity-90 sm:min-h-screen col-span-2 rounded-md" 
                style={this.handleBackground()}
            >
                { !objectIsEmpty(this.props.currentPlant) ? <Header header={`${this.props.currentPlant.name} the ${this.props.currentPlant.species}`} currentPlant={this.props.currentPlant}/> : <Header header={<br/>} /> }
                <div className="border-t border-gray-light">
                    { !objectIsEmpty(this.props.currentPlant) ? this.renderPlant(this.props) : <Welcome info="All of your plant babies in one place" sillyMessage="" /> }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentPlant: state.plants.currentPlant,
        showEventForm: state.events.showEventForm,
        showNoteForm: state.notes.showNoteForm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePlant: (plant) => dispatch(deletePlant(plant)),
        updatePlant: (plant, plantId) => dispatch(updatePlant(plant, plantId)),
        toggleShowEventForm: () => dispatch(toggleShowEventForm()),
        toggleShowNoteForm: () => dispatch(toggleShowNoteForm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantShowContainer);