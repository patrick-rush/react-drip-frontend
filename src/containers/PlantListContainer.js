import React, { Component } from 'react';
import Plant from '../components/Plant';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { manageNavigation } from '../actions/page';

class PlantListContainer extends Component {
    
    renderPlants = () => this.props.plants.map(plant => <Plant plant={plant} history={this.props.history} selectPlant={this.props.selectPlant}/>)
    
    render() {
        return (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <Header header={this.props.header} />
                <div className="border-t border-gray-200">
                    {this.props.loadingState === "successfull" ? this.renderPlants() : "loading spinner"}
                    {/* ATTN loading spinner needs to be added and styled */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        plants: state.plants.plants,
        header: state.page.leftHeader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectPlant: (plantId) => dispatch(manageNavigation("plant", plantId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantListContainer);