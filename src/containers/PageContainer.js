import React, { Component } from 'react';
import LeftContainer from './LeftContainer';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions/plants';
import RightContainer from './RightContainer'

class PageContainer extends Component {

    componentDidMount() {
        this.props.fetchPlants();
    }

    render() {
        return (
            <>
                <div className="pl-10 pr-10 pt-5 mx-auto sm:grid grid-cols-3 gap-4 my-4">
                    <LeftContainer history={this.props.history}/>
                    <RightContainer />
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