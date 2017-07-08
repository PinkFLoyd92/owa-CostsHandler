import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import {App} from "../components/App"

class Container extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <App/>
        )   
    }
}

const mapStateToProps = (state) => {
    return Object.assign({}, state, {
        products : state.products
    })
}

export default connect(mapStateToProps)(Container)
