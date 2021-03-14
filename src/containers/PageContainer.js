import React, { Component } from 'react';
import PlantIndexContainer from './PlantIndexContainer';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions/plants';
import PlantShowContainer from './PlantShowContainer'

class PageContainer extends Component {

    componentDidMount() {
        this.props.fetchPlants();
    }

    render() {
        return (
            <>
                <div className="pl-10 pt-5 mx-auto sm:grid grid-cols-3 gap-4 my-4">
                    <PlantIndexContainer history={this.props.history}/>
                </div>
                <div className="bg-white sm:min-h-screen col-span-2 rounded-md shadow">
                    <PlantShowContainer />
                </div>
                {/* <section id="flash" class="rounded-md -m-10 h-10 col-span-3 py-2 pl-4 opacity-0 transition-opacity duration-500"></section> */}
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPlants: () => dispatch(fetchPlants()),
    }
}

export default connect(null, mapDispatchToProps)(PageContainer);