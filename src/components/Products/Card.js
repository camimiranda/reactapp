import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const styles = {

}
class CardWrapper extends Component {
    
    render(){
        const { classes } = this.props;
        return(
            <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              src={this.props.product.image}
            />
            <CardContent>
              <h3>{this.props.product.name}</h3>
              <p>{this.props.product.size} </p>
              <p>{this.props.product.price} U$S</p>
            </CardContent>
            <CardActions>
              <Button color="secondary">Add to Cart</Button>
            </CardActions>
            </Card>
        );
    }

}

CardWrapper.PropTypes = {
    product: PropTypes.function,
    alt: PropTypes.string
}

export default withStyles(styles)(CardWrapper);
