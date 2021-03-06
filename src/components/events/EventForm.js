import React, { Component } from 'react';

class EventForm extends Component {

    state = {
        date: "",
        selected: "water",
        errors: {}
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
        const newEvent = {
            event_type: this.state.selected,
            plant_id: this.props.currentPlant.id,
            due_date: this.state.date
        }
        this.props.createEvent(newEvent)
            .then(() => {
                this.setState({
                    date: null,
                    selected: "water",
                    errors: {}
                })
                this.props.toggleShowEventForm();
            })
        .catch((errors) => {
            this.setState({
                errors
            })
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleOnSubmit} className="bg-gray-light overflow-hidden sm:rounded-lg mt-5">
                <div className="col-span-6 sm:col-span-3">
                    <div className="col-span-6 sm:col-span-3">
                        <div className="opacity-90 m-2 bg-gray-light text-center px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
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
                        <label className="block p-4 text-sm font-medium text-green-dark">
                            Choose a date to {this.state.selected} {this.props.currentPlant.name} <span className="text-sm font-medium text-red-400">{this.state.errors.due_date}</span>
                        </label>
                        <input
                            onChange={this.handleOnChange}
                            type="date"
                            id="dueDate"
                            value={this.state.date}
                            className="px-4 py-4 mt-1 focus:ring-green focus:border-green block w-full sm:text-sm border-green-light rounded-md" 
                        />
                    </div>
                    <div className="px-4 py-3 bg-gray-light text-right sm:px-6">
                        <input
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default EventForm;