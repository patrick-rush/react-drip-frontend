import React, { Component } from 'react';
import EventByPlant from '../components/EventByPlant';
import { connect } from 'react-redux';

class EventsByPlantContainer extends Component {
    
    renderEvents = () => {
        return this.props.events.map(event => <EventByPlant event={event} plant={this.props.plant} />)
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

export default connect(mapStateToProps)(EventsByPlantContainer);