import React, { Component } from 'react';
import Plant from '../components/Plant';
import { connect } from 'react-redux';
import Header from '../components/Header';

class LeftContainer extends Component {
    
    renderPlants = () => this.props.plants.map(plant => <Plant plant={plant} history={this.props.history}/>)
    
    render() {
        return (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                {/* <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-green-900">
                        Plants
                    </h3>
                </div> */}
                <Header />
                <div className="border-t border-gray-200">
                </div>
                <div>
                    {this.renderPlants()}
                    {/* Plants Go Here */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        plants: state.plants.plants
    }
}

// const mapDispatchToProps = dispatch => {
//     return {

//     }
// }

export default connect(mapStateToProps)(LeftContainer);