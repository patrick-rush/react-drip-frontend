import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventForm from '../components/EventForm';
import { createEvent } from '../actions/events';

class EventFormContainer extends Component {
    render() {
        return (
            <EventForm currentPlant={this.props.currentPlant} createEvent={this.props.createEvent} />
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
        createEvent: (event) => dispatch(createEvent(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventFormContainer)