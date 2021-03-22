import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Header from '../../components/page/Header';
import EventShow from '../../components/events/EventShow';
import { updatePlant } from '../../actions/plants';
import {
    deleteEvent,
    updateEvent,
    createEvent
} from '../../actions/events';

class EventShowContainer extends Component {
    render() {
        return (
            <div className="overflow-hidden bg-white sm:min-h-screen col-span-2 rounded-md shadow">
                <Header 
                    // eslint-disable-next-line
                    header={this.props.currentEvent ? `${this.props.currentEvent.event_type} ${this.props.plants.find(plant => plant.id == this.props.currentEvent.plant_id).name} on ${moment(this.props.currentEvent.due_date).format("dddd, MMMM Do YYYY")}` : <br/> }
                    currentEvent={this.props.currentEvent}
                />
                <div className="border-t border-gray-200">
                    {/*eslint-disable-next-line*/}
                    {this.props.currentEvent ? <EventShow event={this.props.currentEvent} plant={this.props.plants.find(plant => plant.id == this.props.currentEvent.plant_id)} updatePlant={this.props.updatePlant} history={this.props.history} deleteEvent={this.props.deleteEvent} updateEvent={this.props.updateEvent} createEvent={this.props.createEvent}/> : <br/>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // currentPlant: state.plants.currentPlant,
        plants: state.plants.plants,
        currentEvent: state.events.currentEvent
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updatePlant: (plant, plantId) => dispatch(updatePlant(plant, plantId)),
        deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
        updateEvent: (event, eventId) => dispatch(updateEvent(event, eventId)),
        createEvent: (event) => dispatch(createEvent(event)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShowContainer);