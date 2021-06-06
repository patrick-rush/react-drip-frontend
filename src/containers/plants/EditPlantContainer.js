import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/page/Header';
import PlantForm from '../../components/plants/PlantForm';
import { updatePlant } from '../../actions/plants';

class EditPlantContainer extends Component {
    render() {
        return (
            <div className="pl-10 pr-10 pt-5 mx-auto sm:grid gap-4 my-4">
                <div className="overflow-hidden bg-white opacity-90 sm:min-h-screen col-span-2 rounded-md">
                    <Header header={`Edit ${this.props.currentPlant.name}`} />
                    <div className="border-t border-gray-light">
                        <PlantForm handlePlantEvent={this.props.updatePlant} history={this.props.history} currentPlant={this.props.currentPlant} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentPlant: state.plants.currentPlant
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updatePlant: (formData, plantId) => dispatch(updatePlant(formData, plantId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPlantContainer);