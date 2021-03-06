import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BtnLogin from './buttonLogin';
import LoginButton from './loginButton';

import {
  BrowserRouter,
  Link,
  Router,
  HashRouter,
  Route
} from 'react-router-dom';
const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Projet_Test_JM
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Acceuil
          </Button>
          <Button color="inherit" component={Link} to="/form">
            Formulaire
          </Button>
          <Button color="inherit" component={Link} to="/enregistrements">
            Administrateur
          </Button>
          <LoginButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
