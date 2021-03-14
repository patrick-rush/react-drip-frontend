import React, { Component } from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import { connect } from 'react-redux';

class RightContainer extends Component {
    render() {
        return (
            <div className="overflow-hidden bg-white sm:min-h-screen col-span-2 rounded-md shadow">
                <Header header={this.props.header} currentPlant={this.props.currentPlant}/>
                <div className="border-t border-gray-200">
                    <Welcome />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        header: state.page.rightHeader,
        currentPlant: state.plants.currentPlant
    }
}

export default connect(mapStateToProps)(RightContainer);