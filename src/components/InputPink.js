import React from "react";
import PropTypes from "prop-types";

import pink from "@material-ui/core/colors/pink";

import { withStyles, InputLabel, Input, FormControl } from "@material-ui/core";

const styles = theme => ({
  cssLabel: {
    "&$cssFocused": {
      color: pink[500]
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: pink[500]
    }
  },
  container: {
    marginTop: 25
  },
  margin:{
      marginTop: 25
  }
});

const InputPink = props => {
  const { classes } = props;
  return (
      <FormControl className={classes.margin}>
        <InputLabel
       htmlFor="custom-css-standard-input"
       classes={{
         root: classes.cssLabel,
         focused: classes.cssFocused
       }}
     >
       {props.label}
       </InputLabel>
        <Input
          classes={{ underline: classes.cssUnderline }}
          type={props.type}
          onChange={props.onChange}
          value = { props.value}
        />
      </FormControl>
  );
};

InputPink.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.function,
  type: PropTypes.type,
  value: PropTypes.string
};

export default withStyles(styles)(InputPink);
