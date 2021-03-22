import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventForm from '../../components/events/EventForm';
import { createEvent, toggleShowEventForm } from '../../actions/events';

class EventFormContainer extends Component {
    render() {
        return (
            <EventForm currentPlant={this.props.currentPlant} createEvent={this.props.createEvent} toggleShowEventForm={this.props.toggleShowEventForm}  />
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
        createEvent: (event) => dispatch(createEvent(event)),
        toggleShowEventForm: () => dispatch(toggleShowEventForm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventFormContainer)