import React, { Component } from 'react';

class EventForm extends Component {

    state = {
        date: null
    }

    handleOnChange = event => {
        this.setState({
            date: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        console.log("from handleOnSubmit =", event.target);
        const newEvent = {
            event_type: "Water",
            plant_id: this.props.currentPlant.id,
            due_date: this.state.date
        }
        this.props.createEvent(newEvent)
    }
    
    render() {
        return (
            <form onSubmit={this.handleOnSubmit} className="bg-grey-50 shadow overflow-hidden sm:rounded-lg mt-5">
                <div className="col-span-6 sm:col-span-3">
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block p-4 text-sm font-medium text-green-700">
                            Choose a date to water {this.props.currentPlant.name}
                        </label>
                        <input
                            onChange={this.handleOnChange}
                            type="date"
                            id="dueDate"
                            className="px-4 py-4 mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-100 rounded-md" 
                        />
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <input
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default EventForm;