import React, { Component } from 'react';
import EventFormContainer from '../../containers/events/EventFormContainer';
import EventsByPlantContainer from '../../containers/events/EventsByPlantContainer';
import NoteFormContainer from '../../containers/notes/NoteFormContainer';
import NotesByPlantContainer from '../../containers/notes/NotesByPlantContainer'

class PlantShow extends Component {
    
    handleDelete = () => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            this.props.deletePlant(this.props.plant.id);
            this.props.history.push(`/plants`)
        }
    }

    handleFrequencyChange = event => {
        console.log(event.target.getAttribute('name'))
        const formData = new FormData();
        const frequencyType = event.target.getAttribute('name')
        let newFrequency
        if (event.target.id === "increase") {
            newFrequency = this.props.plant[frequencyType] += 1
        } else if (event.target.id === "decrease") {
            newFrequency = this.props.plant[frequencyType] -= 1
        }
        formData.append(`plant[${frequencyType}]`, newFrequency)
        this.props.updatePlant(formData, this.props.plant.id)
    }

    handleShowEventForm = () => {
        console.log("got to handleShowEventForm")
        this.props.toggleShowEventForm()
    }

    handleShowNoteForm = () => {
        this.props.toggleShowNoteForm()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.plant !== this.props.plant && prevProps.showNoteForm === true) {
            this.props.toggleShowNoteForm();
        }
        if (prevProps.plant !== this.props.plant && prevProps.showEventForm === true) {
            this.props.toggleShowEventForm();
        }
    }

    // renderCareEvents = () => this.props.careEvents.map(careEvent => <CareEventByPlant careEvent={careEvent} />)

    render() {
        return (
            <ul>
                <div className="opacity-90 m-2 bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <li className="text-sm font-medium text-gray-900">
                        Location
                    </li>
                    <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        {this.props.plant.location}
                    </li>
                    <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        <button onClick={() => this.props.history.push(`/plants/edit/${this.props.plant.id}`)} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i className="fa fa-pencil-alt content-end"></i>
                        </button>      
                        <button onClick={this.handleDelete} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i className="fa fa-trash content-end"></i>
                        </button>      
                    </li>
                </div>
                <div className="opacity-90 m-2 bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <li className="text-sm font-medium text-gray-900">
                        Watering Frequency
                    </li>
                    <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        {this.props.plant.watering_frequency} days
                    </li>
                    <li className="mt-1 text-sm col-span-2 text-green-900 sm:mt-0 sm:col-span-1">
                        <button id="decrease" name="watering_frequency" onClick={this.handleFrequencyChange} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i id="decrease" name="watering_frequency" className="fa fa-minus"></i>
                        </button>
                        <button id="increase" name="watering_frequency" onClick={this.handleFrequencyChange} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i id="increase" name="watering_frequency" className="fa fa-plus"></i>
                        </button>      
                    </li>
                </div>

                <div className="opacity-90 m-2 bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <li className="text-sm font-medium text-gray-900">
                        Fertilizing Frequency
                    </li>
                    <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        {this.props.plant.fertilizing_frequency} days
                    </li>
                    <li className="mt-1 text-sm col-span-2 text-green-900 sm:mt-0 sm:col-span-1">
                        <button id="decrease" name="fertilizing_frequency" onClick={this.handleFrequencyChange} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i id="decrease" name="fertilizing_frequency" className="fa fa-minus"></i>
                        </button>
                        <button id="increase" name="fertilizing_frequency" onClick={this.handleFrequencyChange} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i id="increase" name="fertilizing_frequency" className="fa fa-plus"></i>
                        </button>      
                    </li>
                </div>
                {/* <div className="opacity-90 m-2 bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <li className="text-sm font-medium text-gray-900">
                        Repotting Frequency
                    </li>
                    <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        {this.props.plant.repotting_frequency} days
                    </li>
                    <li className="mt-1 text-sm col-span-2 text-green-900 sm:mt-0 sm:col-span-1">
                        <button id="decrease" name="repotting_frequency" onClick={this.handleFrequencyChange} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i id="decrease" name="repotting_frequency" className="fa fa-minus"></i>
                        </button>
                        <button id="increase" name="repotting_frequency" onClick={this.handleFrequencyChange} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i id="increase" name="repotting_frequency" className="fa fa-plus"></i>
                        </button>      
                    </li>
                </div>
                <div className="opacity-90 m-2 bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <li className="text-sm font-medium text-gray-900">
                        Pruning Frequency
                    </li>
                    <li className="mt-1 text-sm text-green-900 sm:mt-0 sm:col-span-1">
                        {this.props.plant.pruning_frequency} days
                    </li>
                    <li className="mt-1 text-sm col-span-2 text-green-900 sm:mt-0 sm:col-span-1">
                        <button id="decrease" name="pruning_frequency" onClick={this.handleFrequencyChange} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i id="decrease" name="pruning_frequency" className="fa fa-minus"></i>
                        </button>
                        <button id="increase" name="pruning_frequency" onClick={this.handleFrequencyChange} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            <i id="increase" name="pruning_frequency" className="fa fa-plus"></i>
                        </button>      
                    </li>
                </div> */}

                <div className="opacity-90 m-2 bg-gray-50 px-4 py-5 sm:grid sm:px-6">
                    <li className="text-sm font-medium text-gray-900">
                        Notes 
                        <button onClick={this.handleShowNoteForm} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            {this.props.showNoteForm === false ? <i className="fa fa-plus"></i> : <i className="fa fa-minus"></i>}
                        </button>
                    </li>
                    {this.props.showNoteForm === true ? <NoteFormContainer /> : null}
                    {<NotesByPlantContainer history={this.props.history} />}
                </div>  
                <div className="opacity-90 m-2 bg-gray-50 px-4 py-5 sm:grid sm:px-6">
                    <li className="text-sm font-medium text-gray-900">
                        Care Events
                        <button onClick={this.handleShowEventForm} className="pl-2 pr-2 text-sm font-medium text-gray-900">
                            {this.props.showEventForm === false ? <i className="fa fa-plus"></i> : <i className="fa fa-minus"></i>}
                        </button>
                    </li>
                    {this.props.showEventForm === true ? <EventFormContainer /> : null}
                    {<EventsByPlantContainer history={this.props.history} />}
                </div>  
            </ul>

        )
    }
}

export default PlantShow;