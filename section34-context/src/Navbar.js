import React, { Component } from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { IconButton, Typography, InputBase } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import Switch from "@mui/material/Switch";
import styles from "./styles/NavBarStyles";
import { makeStyles } from '@mui/styles';

class Navbar extends Component {
  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span>French</span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              App Title
            </Typography>
            <Switch />
            <div className={classes.grow}/>
            <div className={classes.search}/>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default makeStyles(styles)(Navbar);