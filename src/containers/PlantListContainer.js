import React, { Component } from 'react';
import Plant from '../components/Plant';
import { connect } from 'react-redux';
import Header from '../components/Header';
// import { manageNavigation } from '../actions/page';
import { setPlantToActive } from '../actions/plants'; 

class PlantListContainer extends Component {
    
    renderPlants = () => {
        return this.props.plants.map(plant => {
            return <Plant
                plant={plant}
                history={this.props.history}
                setPlantToActive={this.props.setPlantToActive}
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
        setPlantToActive: (plantId) => dispatch(setPlantToActive(plantId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantListContainer);