import React, { Component } from 'react';
import EventListContainer from './EventListContainer';
import RightContainer from './RightContainer';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/events';
import { fetchPlants } from '../actions/plants';

class TodayPageContainer extends Component {
    
    componentDidMount() {
        this.props.fetchEvents();
        this.props.fetchPlants();
    }
    
    render() {
        return (
            <>
                <div className="pl-10 pr-10 pt-5 mx-auto sm:grid grid-cols-3 gap-4 my-4">
                    <EventListContainer loadingState={this.props.loadingState} history={this.props.history}/>
                    <RightContainer />
                </div>
                {/* <section id="flash" class="rounded-md -m-10 h-10 col-span-3 py-2 pl-4 opacity-0 transition-opacity duration-500"></section> */}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        loadingState: state.events.loadingState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEvents: () => dispatch(fetchEvents()),
        fetchPlants: () => dispatch(fetchPlants()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodayPageContainer);