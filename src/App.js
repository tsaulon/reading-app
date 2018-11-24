import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function Navigation(props) {



  return (

    <div>
      <AppBar position='static' color="default">
        <Toolbar>
          <IconButton color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='inherit'>
            Milestones
          </Typography>
        </Toolbar>
      </AppBar>
    </div>

  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default App;
