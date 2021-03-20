import React, { Component } from 'react';
import PlantListContainer from './PlantListContainer';
import { connect } from 'react-redux';
import { fetchPlants } from '../../actions/plants';
import PlantShowContainer from './PlantShowContainer';
import { setPlantToActive } from '../../actions/plants';  
import { fetchEventsByPlant } from '../../actions/events';

class PlantPageContainer extends Component {

    componentDidMount() {
        this.props.fetchPlants()
        .then(() => {
            if (this.props.match.params.plantId) {
                this.props.setPlantToActive(this.props.match.params.plantId)
                this.props.fetchEventsByPlant(this.props.match.params.plantId)
            }
        })
    }

    render() {
        return (
            <>
                <div className="pl-10 pr-10 pt-5 mx-auto sm:grid grid-cols-3 gap-4 my-4">
                    <PlantListContainer loadingState={this.props.loadingState} history={this.props.history}/>
                    <PlantShowContainer history={this.props.history} />
                </div>
                {/* <section id="flash" class="rounded-md -m-10 h-10 col-span-3 py-2 pl-4 opacity-0 transition-opacity duration-500"></section> */}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        loadingState: state.plants.loadingState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPlants: () => dispatch(fetchPlants()),
        setPlantToActive: (plantId) => dispatch(setPlantToActive(plantId)),
        fetchEventsByPlant: (plantId) => dispatch(fetchEventsByPlant(plantId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantPageContainer);