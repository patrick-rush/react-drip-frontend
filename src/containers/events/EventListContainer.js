import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/page/Header';
import { setEventToActive } from '../../actions/events';
import { setPlantToActive } from '../../actions/plants';
import Event from '../../components/events/Event'

class EventListContainer extends Component {
    
    renderEvents = () => {
        return this.props.events.map(event => {
            return (
                <Event
                    key={event.id}
                    event={event}
                    plant={this.props.plants.filter(plant => plant.id === event.plant_id)[0]}
                    history={this.props.history}
                    setEventToActive={this.props.setEventToActive}
                    setPlantToActive={this.props.setPlantToActive}
                />
            );
        });
    };
    
    render() {
        return (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <Header header={"Events"} />
                <div className="border-t border-gray-200">
                    {this.props.loadingState === "successful" ? this.renderEvents() : "loading spinner"}
                    {/* ATTN loading spinner needs to be added and styled */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        plants: state.plants.plants,
        events: state.events.events,
        // header: state.page.leftHeader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // setEventToActive: (eventId) => dispatch(setEventToActive("event", eventId))
        setPlantToActive: (plantId) => dispatch(setPlantToActive(plantId)),
        setEventToActive: (eventId) => dispatch(setEventToActive(eventId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);