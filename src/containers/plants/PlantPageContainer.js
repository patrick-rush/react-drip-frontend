import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantListContainer from './PlantListContainer';
import PlantShowContainer from './PlantShowContainer';
import {
    fetchPlants,
    setPlantToActive
} from '../../actions/plants';
import { fetchEventsByPlant } from '../../actions/events';
import { fetchNotesByPlant } from '../../actions/notes';

class PlantPageContainer extends Component {

    constructor(props) {
        super(props);
        props.fetchPlants()
            .then(() => {
                const plantId = props.match.params.plantId
                if (plantId) {
                    props.setPlantToActive(plantId);
                    props.fetchEventsByPlant(plantId);
                    props.fetchNotesByPlant(plantId);
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
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        loadingState: state.plants.loadingState,
        plants: state.plants.plants
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPlants: () => dispatch(fetchPlants()),
        setPlantToActive: (plantId) => dispatch(setPlantToActive(plantId)),
        fetchEventsByPlant: (plantId) => dispatch(fetchEventsByPlant(plantId)),
        fetchNotesByPlant: ( plantId) => dispatch(fetchNotesByPlant(plantId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantPageContainer);