import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventListContainer from './EventListContainer';
import EventShowContainer from './EventShowContainer';
import { fetchEvents, setEventToActive } from '../../actions/events';
import { fetchPlants } from '../../actions/plants';

class TodayPageContainer extends Component {
    
    constructor(props) {
        super(props);
        props.fetchPlants()
            .then(() => {
                props.fetchEvents()
                    .then(() => {
                        if (props.match.params.eventId) {
                            props.setEventToActive(props.match.params.eventId)
                        }
                    })        
            })
    }
    
    render() {
        return (
            <>
                <div className="pl-10 pr-10 pt-5 mx-auto sm:grid grid-cols-3 gap-4 my-4">
                    <EventListContainer loadingState={this.props.loadingState} history={this.props.history}/>
                    <EventShowContainer history={this.props.history} />
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentEvent: state.events.currentEvent,
        loadingState: state.events.loadingState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEvents: () => dispatch(fetchEvents()),
        fetchPlants: () => dispatch(fetchPlants()),
        setEventToActive: (eventId) => dispatch(setEventToActive(eventId)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodayPageContainer);