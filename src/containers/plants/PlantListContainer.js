import React, { Component } from 'react';
import { connect } from 'react-redux';
import Plant from '../../components/plants/Plant';
import Header from '../../components/page/Header';
import { fetchEventsByPlant } from '../../actions/events';
import { fetchNotesByPlant } from '../../actions/notes';
import { fetchPlant, setPlantToActive } from '../../actions/plants';

class PlantListContainer extends Component {
        
    renderPlants = () => {
        const sortedPlants = this.props.plants.sort((a, b) => a.name > b.name ? 1:-1);

        return sortedPlants.map(plant => {
            return <Plant
                key={plant.id}
                plant={plant}
                textColor={this.props.currentPlant === plant ? "text-gray-dark" : "text-green-dark"}
                handleClick={this.handleClick}
            />
        });
    };

    handleClick = (plantId) => {
        this.props.setPlantToActive(plantId)
        this.props.fetchEventsByPlant(plantId);
        this.props.fetchNotesByPlant(plantId);
        this.props.history.push(`/plants/${plantId}`)
    }
    
    render() {
        return (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <Header header={"Plants"} />
                <div className="border-t border-gray-light">
                    {this.props.loadingState === "successful" ? this.renderPlants() : <i className="fa fa-leaf animate-spin text-center w-full m-2 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6"></i>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        plants: state.plants.plants,
        currentPlant: state.plants.currentPlant
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPlantToActive: (plantId) => dispatch(setPlantToActive(plantId)),
        fetchEventsByPlant: (plantId) => dispatch(fetchEventsByPlant(plantId)),
        fetchNotesByPlant: (plantId) => dispatch(fetchNotesByPlant(plantId)),
        fetchPlant: (plantId) => dispatch(fetchPlant(plantId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantListContainer);