import React, { Component } from 'react';
import Plant from '../components/Plant';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { manageNavigation } from '../actions/page';

class LeftContainer extends Component {
    
    renderPlants = () => this.props.plants.map(plant => <Plant plant={plant} history={this.props.history} selectPlant={this.props.selectPlant}/>)
    
    render() {
        return (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <Header header={this.props.header} />
                <div className="border-t border-gray-200">
                    {this.renderPlants()}
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
        selectPlant: () => dispatch(manageNavigation("plant"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftContainer);