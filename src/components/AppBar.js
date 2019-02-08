import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { changeFilter } from "../redux/actions";
import NavigationBar from './NavBar';

const styles = theme => ({
  root: {
    flexGrow: 2,

    display: "flex",
    flexFlow: "row wrap",
    alignItems: "stretch"
  }
});

class AppBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
         <NavigationBar />
      </div>
    );
  }
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const styledComponent = withStyles(styles)(AppBar);
export default connect(
  null,
  dispatch => ({ changeFilter: filter => dispatch(changeFilter(filter)) })
)(styledComponent);
