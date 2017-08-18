import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { default as MaterialToolbar } from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

class Toolbar extends Component {
  render() {
    // {/* TODO remove inline styling */}
    return (
      <AppBar position="static">
        <MaterialToolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography type="title" color="inherit">
              Lending
            </Typography>
          </Link>
        </MaterialToolbar>
      </AppBar>
    );
  }
}

export default Toolbar;
