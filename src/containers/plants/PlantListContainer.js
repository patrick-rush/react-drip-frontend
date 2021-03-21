import React, { Component } from 'react';
import Plant from '../../components/plants/Plant';
import { connect } from 'react-redux';
import Header from '../../components/page/Header';
// import { manageNavigation } from '../actions/page';
import { setPlantToActive } from '../../actions/plants'; 
import { fetchEventsByPlant } from '../../actions/events';
import { fetchNotesByPlant } from '../../actions/notes';

class PlantListContainer extends Component {
    
    renderPlants = () => {
        const sortedPlants = this.props.plants.sort((a, b) => a.name > b.name ? 1:-1);

        return sortedPlants.map(plant => {
            return <Plant
                key={plant.id}
                plant={plant}
                history={this.props.history}
                textColor={this.props.currentPlant === plant ? "text-green-700" : "text-gray-500"}
                setPlantToActive={this.props.setPlantToActive}
                fetchEventsByPlant={this.props.fetchEventsByPlant}
                fetchNotesByPlant={this.props.fetchNotesByPlant}
            />
        });
    };
    
    render() {
        return (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <Header header={"Plants"} />
                <div className="border-t border-gray-200">
                    {this.props.loadingState === "successful" ? this.renderPlants() : "loading spinner"}
                    {/* ATTN loading spinner needs to be added and styled */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        plants: state.plants.plants,
        currentPlant: state.plants.currentPlant
        // header: state.page.leftHeader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPlantToActive: (plantId) => dispatch(setPlantToActive(plantId)),
        fetchEventsByPlant: (plantId) => dispatch(fetchEventsByPlant(plantId)),
        fetchNotesByPlant: (plantId) => dispatch(fetchNotesByPlant(plantId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantListContainer);