import React, { Component } from 'react';
import Header from '../../components/page/Header';
import Welcome from '../../components/page/Welcome';
import { connect } from 'react-redux';
import PlantShow from '../../components/plants/PlantShow';
import { deletePlant } from '../../actions/plants';
import { updatePlant } from '../../actions/plants';
import { toggleShowEventForm } from '../../actions/events';

class PlantShowContainer extends Component {
    
    handleBackground = () => {
        if (this.props.currentPlant && this.props.currentPlant.photo_url) {
            return { backgroundImage: `url("${this.props.currentPlant.photo_url}")` };
        }
    }

    renderPlant = (props) => {
        return (
            <PlantShow
                plant={props.currentPlant}
                history={props.history} 
                deletePlant={props.deletePlant} 
                updatePlant={props.updatePlant} 
                toggleShowEventForm={props.toggleShowEventForm} 
                showEventForm={props.showEventForm} 
            />
        )
    }
    
    render() {
        return (
            <div 
                className="overflow-hidden bg-center bg-cover bg-white sm:min-h-screen col-span-2 rounded-md shadow" 
                style={this.handleBackground()}
            >
                { this.props.currentPlant ? <Header header={`${this.props.currentPlant.name} the ${this.props.currentPlant.species}`} currentPlant={this.props.currentPlant}/> : <Header header="" /> }
                {/* <Header header={`${this.props.currentPlant.name} the ${this.props.currentPlant.species}`} currentPlant={this.props.currentPlant}/> */}
                <div className="border-t border-gray-200">
                    { this.props.currentPlant ? this.renderPlant(this.props) : <Welcome /> }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // header: state.page.rightHeader,
        currentPlant: state.plants.currentPlant,
        showEventForm: state.events.showEventForm,
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePlant: (plant) => dispatch(deletePlant(plant)),
        updatePlant: (plant, plantId) => dispatch(updatePlant(plant, plantId)),
        toggleShowEventForm: () => dispatch(toggleShowEventForm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantShowContainer);