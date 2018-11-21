import React from 'react'
import { NetInfo } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'

class ConnectivityManager extends React.Component {
    
    constructor(...args) {
        super(...args)
        // Binding function to have a attachable / detacheable reference 
        this.updateConnectionStatus = this.updateConnectionStatus.bind(this)    
    }

    updateConnectionStatus(isConnected) {
        const status = isConnected ? actions.connectivity.CONNECTIVITY_STATUS_CONNECTED : actions.connectivity.CONNECTIVITY_STATUS_DISCONNECTED
        if (this.props.status !== status)
            this.props.update(status)
    }

    // Init + handler
    componentDidMount() {
        actions.connectivity.isConnected().then(this.updateConnectionStatus)
        actions.connectivity.attach(this.updateConnectionStatus)
    }

    // remove event listener
    componentWillUnmount() {
        actions.connectivity.detach(this.updateConnectionStatus)
    }

    render() { return null }

}

export default connect(
    state => { return { status: state.connectivity.status } },
    dispatch => bindActionCreators({ update: actions.connectivity.update }, dispatch)
)(ConnectivityManager)