// import React, { Component } from 'react';

// class EventShowContainer extends Component {
//     render() {
//         return (
//             <div>EventShowContainer</div>
//         )
//     }
// }

// export default EventShowContainer;

import React, { Component } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import EventShow from '../components/EventShow';

class EventShowContainer extends Component {
    render() {
        return (
            <div className="overflow-hidden bg-white sm:min-h-screen col-span-2 rounded-md shadow">
                <Header 
                    header={this.props.currentEvent ? this.props.currentEvent.event_type : "" }
                    currentEvent={this.props.currentEvent}
                />
                <div className="border-t border-gray-200">
                    <EventShow event={this.props.currentEvent}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // header: state.page.rightHeader,
        currentEvent: state.events.currentEvent
    }
}

export default connect(mapStateToProps)(EventShowContainer);