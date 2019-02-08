import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";


const DefaultButton = props => {
    return(
        <Button
            variant={props.variant}
            color={props.color}
            component={props.component}
            to={props.to}
            //   onClick={() => this.props.changeFilter("F")}
            >
              {props.children}
        </Button>
    );
}

DefaultButton.protoTypes = {
    any: PropTypes.any
}
export default DefaultButton;
