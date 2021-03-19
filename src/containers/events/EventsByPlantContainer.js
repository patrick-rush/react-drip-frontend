import React, { Component } from 'react';
import EventByPlant from '../../components/events/EventByPlant';
import { connect } from 'react-redux';
import { setEventToActive } from '../../actions/events';

class EventsByPlantContainer extends Component {
    
    renderEvents = () => {
        return this.props.events.map(event => <EventByPlant key={event.id} event={event} plant={this.props.plant} history={this.props.history} setEventToActive={this.props.setEventToActive}/>)
    }
    
    render() {
        return (
            <div>
                {this.renderEvents()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        plant: state.plants.currentPlant,
        events: state.events.eventsByCurrentPlant
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setEventToActive: eventId => dispatch(setEventToActive(eventId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsByPlantContainer);