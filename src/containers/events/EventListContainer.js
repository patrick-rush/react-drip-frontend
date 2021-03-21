import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/page/Header';
import { setEventToActive } from '../../actions/events';
import { setPlantToActive } from '../../actions/plants';
import Event from '../../components/events/Event'
import moment from 'moment';

class EventListContainer extends Component {
    
    renderOverdue = () => {
        const today = moment().format().slice(0,10);
        const overdueEvents = this.props.events.filter(event => event.due_date < today );
        const sortedEvents = overdueEvents.sort((a, b) => a.due_date > b.due_date ? 1:-1);
        return this.renderEvents(sortedEvents);
    }
    
    renderToday = () => {
        const today = moment().format().slice(0,10);
        const eventsDueToday = this.props.events.filter(event => event.due_date === today)
        const sortedEvents = eventsDueToday.sort((a, b) => a.due_date > b.due_date ? 1:-1);
        return this.renderEvents(sortedEvents);
    };

    renderLater = () => {
        const today = moment().format().slice(0,10);
        const eventsDueLater = this.props.events.filter(event => event.due_date > today)
        const sortedEvents = eventsDueLater.sort((a, b) => a.due_date > b.due_date ? 1:-1);
        return this.renderEvents(sortedEvents);
    }

    renderEvents = (events) => {
        return events.map(event => {
            return (
                <Event
                    key={event.id}
                    event={event}
                    plant={this.props.plants.filter(plant => plant.id === event.plant_id)[0]}
                    textColor={this.props.currentEvent === event ? "text-green-700" : "text-gray-500"}
                    handleClick={this.handleClick}
                />
            );
        });
    }

    handleClick = (eventId, plantId) => {
        this.props.setEventToActive(eventId);
        this.props.setPlantToActive(plantId);
        this.props.history.push(`/events/${eventId}`)
    }
    
    render() {
        return (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <Header header="Overdue" />
                <div className="border-t border-gray-200">
                    {this.props.loadingState === "successful" ? this.renderOverdue() : <i className="fa fa-leaf animate-spin text-center w-full m-2 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6"></i>}
                </div>
                <Header header="Today" />
                <div className="border-t border-gray-200">
                    {this.props.loadingState === "successful" ? this.renderToday() : <i className="fa fa-leaf animate-spin text-center w-full m-2 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6"></i>}
                    {/* ATTN loading spinner needs to be added and styled */}
                </div>
                <Header header="Later" />
                <div className="border-t border-gray-200">
                    {this.props.loadingState === "successful" ? this.renderLater() : <i className="fa fa-leaf animate-spin text-center w-full m-2 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6"></i>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        plants: state.plants.plants,
        events: state.events.events,
        currentEvent: state.events.currentEvent
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPlantToActive: (plantId) => dispatch(setPlantToActive(plantId)),
        setEventToActive: (eventId) => dispatch(setEventToActive(eventId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);