import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {default as MaterialToolbar} from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class Toolbar extends Component {
  render() {
    return (
      <AppBar position="static">
        <MaterialToolbar>
          <Typography type="title" color="inherit">
            Lending
          </Typography>
        </MaterialToolbar>
      </AppBar>
    );
  }
}

export default Toolbar;
