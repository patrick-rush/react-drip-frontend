import React, { Component } from 'react';
import EventByPlant from '../../components/events/EventByPlant';
import { connect } from 'react-redux';
import { setEventToActive } from '../../actions/events';
import { fetchEvents } from '../../actions/events';

class EventsByPlantContainer extends Component {
    
    renderEvents = () => {
        const sortedEvents = this.props.events.sort((a, b) => a.completed ? 1:-1 && a.due_date > b.due_date ? 1:-1);
        return sortedEvents.map(event => {
            return <EventByPlant
                key={event.id}
                event={event}
                plant={this.props.plant}
                history={this.props.history}
                fetchEvents={this.props.fetchEvents}
                setEventToActive={this.props.setEventToActive}
            />
        })
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
        // plant: state.plants.currentPlant,
        events: state.events.eventsByCurrentPlant
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEvents: () => dispatch(fetchEvents()),
        setEventToActive: eventId => dispatch(setEventToActive(eventId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsByPlantContainer);