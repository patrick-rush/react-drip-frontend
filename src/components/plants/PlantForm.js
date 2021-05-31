import React, { Component } from 'react';

class PlantForm extends Component {
    
    state = {
        name: "",
        species: "",
        location: "",
        watering_frequency: "",
        fertilizing_frequency: "",
        photo: "",
        errors: {}
    };

    componentDidMount() {
            if (this.props.currentPlant) {
            this.setState({
                name: this.props.currentPlant.name,
                species: this.props.currentPlant.species,
                location: this.props.currentPlant.location,
                watering_frequency: this.props.currentPlant.watering_frequency,
                fertilizing_frequency: this.props.currentPlant.fertilizing_frequency,
                photo: "",
                errors: {}
            })
        }
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
          })      
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        const plantId = this.props.currentPlant ? this.props.currentPlant.id : null;
        formData.append('plant[name]', this.state.name)
        formData.append('plant[species]', this.state.species)
        formData.append('plant[location]', this.state.location)
        formData.append('plant[watering_frequency]', this.state.watering_frequency)
        formData.append('plant[fertilizing_frequency]', this.state.fertilizing_frequency)
        if (this.state.photo !== "") {
            formData.append('plant[photo]', event.target.photo.files[0], this.state.photo)
        }
        this.props.handlePlantEvent(formData, plantId)
            .then(() => {
                this.setState({
                  name: "",
                  species: "",
                  location: "",
                  watering_frequency: "",
                  fertilizing_frequency: "",
                  photo: ""
                })
                this.props.history.push('/plants')
            })
            .catch((errors) => {
                console.log("Errors:", errors)
                this.setState({
                    errors
                })
            })
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div className="shadow overflow-hidden rounded-none rounded-b-md">
                    {/* <div>
                        <span className="text-sm font-medium text-red-400">{this.state.errors.name}</span>
                    </div> */}
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label className="sr-only">
                                    Name
                                </label>
                                <input 
                                    onChange={this.handleOnChange} 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    value={this.state.name} 
                                    placeholder="Name"
                                    required
                                    // className="mt-1 focus:ring-green focus:border-green block w-full shadow-sm sm:text-sm border-green-light rounded-md"
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow focus:border-yellow focus:z-10 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="sr-only">
                                    Species
                                </label>
                                <input 
                                    onChange={this.handleOnChange} 
                                    type="text" 
                                    name="species" 
                                    id="species" 
                                    value={this.state.species} 
                                    placeholder="Species"
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow focus:border-yellow focus:z-10 sm:text-sm"                                />
                            </div>
                            <div className="col-span-6 sm:col-span-6">
                                <label className="sr-only">
                                    Location
                                </label>
                                <input 
                                    onChange={this.handleOnChange} 
                                    type="text" 
                                    name="location" 
                                    id="location" 
                                    value={this.state.location} 
                                    placeholder="Location"
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow focus:border-yellow focus:z-10 sm:text-sm"                                />
                            </div>
                            <div className="col-span-6 sm:col-span-6">
                                <label className="block text-sm font-medium text-green-700">
                                    Choose a Photo (optional)
                                </label>
                                <input 
                                    onChange={this.handleOnChange} 
                                    type="file" 
                                    name="photo" 
                                    id="photo" 
                                    className="mt-1 focus:ring-green focus:border-green block w-full sm:text-sm border-green-light rounded-md" 
                                    // className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="sr-only">
                                    Watering Frequency (days)
                                </label>
                                <input 
                                    onChange={this.handleOnChange} 
                                    type="number" 
                                    name="watering_frequency" 
                                    id="watering_frequency" 
                                    value={this.state.watering_frequency} 
                                    placeholder="Watering Frequency (days)" 
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow focus:border-yellow focus:z-10 sm:text-sm"                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="sr-only">
                                    Fertilizing Frequency (days)
                                </label>
                                <input 
                                    onChange={this.handleOnChange} 
                                    type="number" 
                                    name="fertilizing_frequency" 
                                    id="fertilizing_frequency" 
                                    placeholder="Fertilizing Frequency (days)" 
                                    required
                                    value={this.state.fertilizing_frequency} 
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow focus:border-yellow focus:z-10 sm:text-sm"                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <input 
                            type="submit" 
                            value={ this.props.currentPlant ? "Update" : "Save" } 
                            className="submit inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default PlantForm;