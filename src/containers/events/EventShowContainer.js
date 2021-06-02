import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Welcome from '../../components/page/Welcome';
import Header from '../../components/page/Header';
import EventShow from '../../components/events/EventShow';
import { updatePlant } from '../../actions/plants';
import { objectIsEmpty } from '../../helpers';
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
                    header={!objectIsEmpty(this.props.currentEvent) ? `${this.props.currentEvent.event_type} ${this.props.currentPlant.name} on ${moment(this.props.currentEvent.due_date).format("dddd, MMMM Do YYYY")}` : <br/> }
                    currentEvent={this.props.currentEvent}
                />
                <div className="border-t border-gray-light">
                    {/*eslint-disable-next-line*/}
                    {!objectIsEmpty(this.props.currentEvent) ? <EventShow event={this.props.currentEvent} plant={this.props.currentPlant} updatePlant={this.props.updatePlant} history={this.props.history} deleteEvent={this.props.deleteEvent} updateEvent={this.props.updateEvent} createEvent={this.props.createEvent}/> : <Welcome info="Keep track of who needs watering today" sillyMessage="And who needed it yesterday" />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // currentPlant: state.plants.currentPlant,
        plants: state.plants.plants,
        currentPlant: state.plants.currentPlant,
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