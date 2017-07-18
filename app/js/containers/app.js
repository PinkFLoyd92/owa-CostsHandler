import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';
import * as DrugActions from '../actions/DrugActions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DrugActions, dispatch);
}

const mapStateToProps = state => Object.assign({}, state, {
    drugs: state.drugs,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
