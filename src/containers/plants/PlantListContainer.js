import React, { Component } from 'react';
import Plant from '../../components/plants/Plant';
import { connect } from 'react-redux';
import Header from '../../components/page/Header';
// import { manageNavigation } from '../actions/page';
import { setPlantToActive } from '../../actions/plants'; 
import { fetchEventsByPlant } from '../../actions/events';

class PlantListContainer extends Component {
    
    renderPlants = () => {
        return this.props.plants.map(plant => {
            return <Plant
                key={plant.id}
                plant={plant}
                history={this.props.history}
                setPlantToActive={this.props.setPlantToActive}
                fetchEventsByPlant={this.props.fetchEventsByPlant}
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
        // header: state.page.leftHeader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPlantToActive: (plantId) => dispatch(setPlantToActive(plantId)),
        fetchEventsByPlant: (plantId) => dispatch(fetchEventsByPlant(plantId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantListContainer);