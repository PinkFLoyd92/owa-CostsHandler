/**
 * The contents of this file are subject to the OpenMRS Public License
 * Version 1.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://license.openmrs.org
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 * Copyright (C) OpenMRS, LLC.  All Rights Reserved.
 */
import React from 'react';
import { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import { deepOrange500 } from 'material-ui/styles/colors';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.muiTheme = getMuiTheme({
      palette: {
        accent1Color: deepOrange500,
      },
      userAgent: props.userAgent,
    });

  }

  componentWillMount() {
  }

  render() {
    console.log(this.props);
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        {/* <AppBar
            title="CRUD"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            /> */}
        <Drawer open={this.props.drawOpen}>
          <MenuItem>Manejo de Precios en Medicinas</MenuItem>
          <MenuItem>Visualizaci&oacute;n de facturas</MenuItem>
        </Drawer>
        {/* <RaisedButton
              label="Toggle Drawer"
              onTouchTap={this.handleToggleDrawer}
              /> */}
      </MuiThemeProvider>
    );
  }
}

export default App;
