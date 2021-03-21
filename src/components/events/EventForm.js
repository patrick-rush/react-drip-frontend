import React, { Component } from 'react';

class EventForm extends Component {

    state = {
        date: "",
        selected: "water"
    }

    handleOnChange = event => {
        this.setState({
            date: event.target.value
        })
    }

    handleOptionChange = event => {
        this.setState({
            selected: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        console.log("from handleOnSubmit =", event.target);
        const newEvent = {
            event_type: this.state.selected,
            plant_id: this.props.currentPlant.id,
            due_date: this.state.date
        }
        this.props.createEvent(newEvent)
        this.setState({
            date: null
        })
        this.props.toggleShowEventForm();
    }
    
    render() {
        return (
            <form onSubmit={this.handleOnSubmit} className="bg-grey-50 shadow overflow-hidden sm:rounded-lg mt-5">
                <div className="col-span-6 sm:col-span-3">
                    <div className="col-span-6 sm:col-span-3">
                        <div className="opacity-90 m-2 bg-gray-50 text-center px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                            <div>
                                <label className="text-sm font-medium">
                                    <input onChange={this.handleOptionChange} type="radio" value="water" checked={this.state.selected === "water"} className="mr-2 form-radio"></input>
                                    <span className="ml-1" >Water</span>
                                </label>
                            </div>
                            <div>
                                <label className="text-sm font-medium">
                                    <input onChange={this.handleOptionChange} type="radio" value="fertilize" checked={this.state.selected === "fertilize"} className="mr-2 form-radio"></input>
                                    <span className="ml-1" >Fertilize</span>
                                </label>
                            </div>
                        </div>
                        <label className="block p-4 text-sm font-medium text-green-700">
                            Choose a date to {this.state.selected} {this.props.currentPlant.name}
                        </label>
                        <input
                            onChange={this.handleOnChange}
                            type="date"
                            id="dueDate"
                            value={this.state.date}
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