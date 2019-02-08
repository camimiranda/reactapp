import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "./Button";

const styles = theme => ({
  root: {
    flexGrow: 2,
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "stretch"
  },
  grow: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  rightSide: {
    display: "flex",
    position: "relative",
    left: "45%",
    flexFlow: "row wrap",
    justifyContent: "flex-end",
    margin: "0"
  },
  iconColor: {
    color: "white"
  }
});

class NavigationBar extends Component {

  handleOnClick = filter => {
    this.props.changeFilter(filter);
  };

  render() {
    const { classes } = this.props;
    // const { anchorEl } = this.state;
    return (
      <AppBar className={classes.root} position="static" color="secondary">
        <Toolbar>
          <div>
            <Icon component={Link} to="/">
              <Icon className={classes.iconColor}>home</Icon>
            </Icon>
          </div>
          <div>
            <Button
              variant="h6"
              color="inherit"
              className={classes.grow}
              //   onClick={() => this.props.changeFilter("F")}
            >
              WOMEN
            </Button>
          </div>
          <div>
            <Button
              variant="h6"
              color="inherit"
              className={classes.grow}
              //   onClick={() => this.props.changeFilter("M")}
            >
              MEN
            </Button>
          </div>
          <Button variant="h6" color="inherit" className={classes.grow}>
            GIRLS
          </Button>
          <Button variant="h6" color="inherit" className={classes.grow}>
            SALE
          </Button>
          <div className={classes.rightSide}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
            <Button variant="h6" color="inherit" component={Link} to="login">
              Login
            </Button>
            <Button variant="h6" color="inherit">
              <Icon>person</Icon>
            </Button>
            <Button variant="h6" color="inherit">
              <Icon style={{ color: "white" }}>shopping_cart</Icon>
            </Button>
            <Button variant="h6" color="inherit">
              <Icon style={{ color: "white"}}>favorite</Icon>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withStyles(styles)(NavigationBar);
