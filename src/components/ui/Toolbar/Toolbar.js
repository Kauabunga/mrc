import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { default as MaterialToolbar } from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss'
import {styles} from './Toolbar.styles';

const toolbarImg = getToolbarImg();

class Toolbar extends Component {
  render() {
    const {classes} = this.props;
    // {/* TODO remove inline styling */}
    return (
      <AppBar position="static" className={classes.appBar}>
        <MaterialToolbar className={classes.toolBar}>
          <Link to="/">
            <img src={toolbarImg} />
          </Link>
          <Typography type="title" color="inherit">
            DEMO
          </Typography>
        </MaterialToolbar>
      </AppBar>
    );
  }
}

export default injectSheet(styles)(Toolbar);


function getToolbarImg(){
  return 'data:image/png;base64,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\n';
}