import React, { Component } from 'react';
import Header from '../../components/page/Header';
import { connect } from 'react-redux';
import EventShow from '../../components/events/EventShow';
import { updatePlant } from '../../actions/plants';
import { deleteEvent } from '../../actions/events';
import { updateEvent } from '../../actions/events';

class EventShowContainer extends Component {
    render() {
        return (
            <div className="overflow-hidden bg-white sm:min-h-screen col-span-2 rounded-md shadow">
                <Header 
                    header={this.props.currentEvent ? `${this.props.currentEvent.event_type} ${this.props.currentPlant.name}` : "" }
                    currentEvent={this.props.currentEvent}
                />
                <div className="border-t border-gray-200">
                    {this.props.currentEvent ? <EventShow event={this.props.currentEvent} plant={this.props.currentPlant} updatePlant={this.props.updatePlant} history={this.props.history} deleteEvent={this.props.deleteEvent} updateEvent={this.props.updateEvent} /> : <br/>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // header: state.page.rightHeader,
        currentPlant: state.plants.currentPlant,
        currentEvent: state.events.currentEvent
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updatePlant: (plant, plantId) => dispatch(updatePlant(plant, plantId)),
        deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
        updateEvent: (event, eventId) => dispatch(updateEvent(event, eventId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShowContainer);