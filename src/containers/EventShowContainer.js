import React, { Component } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import EventShow from '../components/EventShow';
import { updatePlant } from '../actions/plants'

class EventShowContainer extends Component {
    render() {
        return (
            <div className="overflow-hidden bg-white sm:min-h-screen col-span-2 rounded-md shadow">
                <Header 
                    header={this.props.currentEvent ? `${this.props.currentEvent.event_type} ${this.props.currentPlant.name}` : "" }
                    currentEvent={this.props.currentEvent}
                />
                <div className="border-t border-gray-200">
                    {this.props.currentEvent ? <EventShow event={this.props.currentEvent} plant={this.props.currentPlant} updatePlant={this.props.updatePlant} /> : <br/>}
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
        updatePlant: (plant, plantId) => dispatch(updatePlant(plant, plantId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShowContainer);