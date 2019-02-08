import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import DataService from "../services/Data.service";
import Footer from './Footer/Footer';

const styles = theme => ({
  root: {
    background: "#322f30",
    flexGrow: 1,
    flexWrap: "wrap",
    width: "auto",
    height: "auto",
    padding: "2em 2em"
  },

  media: {
    margin: "2px",
    paddingTop: "65.25%", // 16:9,
  },

  grid: {
    marginTop: "30px",
    marginRight: "10px",
    marginLeft: "10px",
    flexWrap: "wrap",
    padding: theme.spacing.unit * 2
  },

  mediaPortada: {
    // width:"100%",
    margin: "2px 2px",
    paddingTop: "0.25%",
    minHeight: "26em"
    
  },
  card:{
    width: "100%"
  },
  portada: {
    minHeight: "26em",
    marginTop: "0.5em"
  }
});

const dataService = new DataService();
const data = dataService.getData();
const portada = dataService.getPortada();

class Home extends Component {
  render() {
    const { classes } = this.props;
      return (
        <div className={classes.root}>
          <Grid container spacing={24}>
            {data.map(tile => (
              <Grid item xs={4}>
                <Card>
                  <CardMedia className={classes.media} image={tile.img} />
                </Card>
              </Grid>
            ))}
          </Grid>
          <div className={classes.portada}>
          <Grid container >
          {portada.map(tile => (
              <Grid item xs={12}>
                <Card className={classes.mediaPortada}>
                  <CardMedia image={tile.img} className={classes.mediaPortada} />
                </Card>
              </Grid>
            ))}
          </Grid>
          </div>
          {/* <ProductGridList/> */}
          <Footer/>
        </div>
        
      );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
