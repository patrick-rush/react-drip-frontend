import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
// import { manageNavigation } from '../actions/page';
import Event from '../components/Event'

class EventListContainer extends Component {
    
    renderEvents = () => this.props.events.map(event => <Event event={event} plant={this.props.plants.filter(plant => plant.id === event.plant_id)[0]} history={this.props.history} /*selectEvent={this.props.selectEvent}*//>)
    
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
        // selectEvent: (eventId) => dispatch(manageNavigation("event", eventId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);