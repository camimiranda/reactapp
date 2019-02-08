import React from 'react';
import InputPink from '../InputPink';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";


const styles = theme => ({
    formContainer: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      justifyContent: "center"
    },
    header: {
        borderBottom: "2px solid",
        paddingBottom: "0em",
        borderBottomColor: pink[600]
    }
});
const CreateAccountForm = props => {
    const { classes } = props;
    return(
        <div>
            <div className={classes.header}>
        <h1>Create your Account</h1>
        </div>
        <form 
        onSubmit={props.onSubmit}
        className={classes.formContainer}
        autoComplete="off"
        >
        <InputPink
        type="text"
        label="Full Name"
        onChangeFullName={props.onChangeFullName}
        value= {props.fullName}
        />
        <InputPink
        type="text"
        label="Username"
        onChangeUsername={props.onChangeUsername}
        value={props.username}
        />
        <InputPink
        type="text"
        label="E-mail"
        onChangeEmail={props.onChangeEmail}
        value={props.email}
        />
        <InputPink
        label="Password"
        type="password"
        onChangePassword={props.onChangePassword}
        value={props.password}
        />
        <InputPink
        label="Confirm Password"
        type="password"
        onChangeConfirmPassword={props.onChangeConfirmPassword}
        value={props.confirmPassword}
        />
       </form>
    </div>
        
    );
}

CreateAccountForm.propTypes = {
    onChangeFullName: PropTypes.function,
    onChangeUsername: PropTypes.function,
    onChangeEmail: PropTypes.function,
    onChangePassword: PropTypes.function,
    onChangeConfirmPassword: PropTypes.function,
}
export default withStyles(styles)(CreateAccountForm);