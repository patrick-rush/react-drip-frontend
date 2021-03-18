import React, { Component } from 'react';
import Header from '../../components/page/Header';
import { connect } from 'react-redux';
import PlantForm from '../../components/plants/PlantForm';
import { addPlant } from '../../actions/plants';

class NewPlantContainer extends Component {
    render() {
        return (
            <div className="pl-10 pr-10 pt-5 mx-auto sm:grid gap-4 my-4">
                <div className="overflow-hidden bg-white sm:min-h-screen col-span-2 rounded-md shadow">
                    <Header header={"New Plant"} />
                    <div className="border-t border-gray-200">
                        <PlantForm handlePlantEvent={this.props.addPlant} history={this.props.history} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // header: state.page.rightHeader,
        // currentPlant: state.plants.currentPlant
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPlant: (plant) => dispatch(addPlant(plant))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlantContainer);