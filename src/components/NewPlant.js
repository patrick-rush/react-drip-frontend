import React, { Component } from 'react';

class NewPlant extends Component {
    
    state = {
        name: "",
        species: "",
        location: "",
        watering_frequency: "0"
    };

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
          })      
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const plant = {
          name: this.state.name,
          species: this.state.species,
          location: this.state.location,
          watering_frequency: this.state.watering_frequency
        }
        this.props.addPlant(plant);
        this.setState({
          name: "",
          species: "",
          location: "",
          watering_frequency: "0"
        })
        this.props.history.push('/')
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-medium text-green-700">
                                    Name
                                </label>
                                <input 
                                    onChange={this.handleOnChange} 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    value={this.state.name} 
                                    className="name mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-100 rounded-md"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-medium text-green-700">
                                    Species
                                </label>
                                <input 
                                    onChange={this.handleOnChange} 
                                    type="text" 
                                    name="species" 
                                    id="species" 
                                    value={this.state.species} 
                                    className="species mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-100 rounded-md" 
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                                <label className="block text-sm font-medium text-green-700">
                                    Location
                                </label>
                                <input 
                                    onChange={this.handleOnChange} 
                                    type="text" 
                                    name="location" 
                                    id="location" 
                                    value={this.state.location} 
                                    className="location mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-100 rounded-md" 
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-medium text-green-700">
                                    Watering Frequency (days)
                                </label>
                                <input 
                                    onChange={this.handleOnChange} 
                                    type="number" 
                                    name="watering_frequency" 
                                    id="watering_frequency" 
                                    value={this.state.watering_frequency} 
                                    className="watering_frequency mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-100 rounded-md" 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <input 
                            type="submit" 
                            value="Save" 
                            className="submit inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default NewPlant;