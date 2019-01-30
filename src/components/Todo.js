import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from './Layout';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "3rem",
    marginLeft: "3rem"
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class TodoComponent extends Component {
    state = {
        spacing: '16',
      };
    
      handleChange = key => (event, value) => {
        this.setState({
          [key]: value,
        });
      };
  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    return (
        <Layout>
        <Grid container className={classes.root} spacing={16}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
      </Layout>
    );
  }
}

TodoComponent.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(TodoComponent);
