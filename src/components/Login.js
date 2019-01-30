import React, { Component } from "react";
import Layout from "./Layout";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import UserService from "../services/User.service";
import InputPink from "./InputPink";
import pink from '@material-ui/core/colors/pink';

import "./Login.css";

const styles = theme => ({
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  card: {
    minWidth: 300,
    padding: "10px 0 30px 0",
    margin: "0 auto",
    maxWidth: "320px"
  },
  container: {
    marginTop: "3em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  forgotPassword: {
    marginTop: "1em"
  },
  divCenter: {
    textAlign: "center"
  },
  buttonSignIn: {
    left: "30%",    
    position: "relative",
    textAlign: "center",
    "&:hover": {
      backgroundColor: pink[500]
    }
  }, 
  font: {
    fontFamily: "Raleway"
  }
});

const userService = new UserService();

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.updateUsernameInput = this.updateUsernameInput.bind(this);
    this.updatePasswordInput = this.updatePasswordInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    if (this.state.username !== "" && this.state.password !== "") {
      let userExists = userService.checkUser(
        this.state.username,
        this.state.password
      );
      if (userExists === "Logged") {
        this.props.history.push("/");
      } else {
        console.error("Log in failed!");
      }
    }
  }

  updateUsernameInput(event) {
    this.setState({
      username: event.target.value
    });
  }

  updatePasswordInput(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <div className={classes.container}>
          <Card className={classes.card}>
            <CardContent>
              <h1>Sign In</h1>
              <form className={classes.formContainer} autoComplete="off">
                <InputPink
                  label="Username"
                  type=""
                  onChange={this.updateUsernameInput}

                />
                <InputPink 
                  label="Password"
                  type="password"
                  onChange={this.updatePasswordInput}
                />
              </form>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                onClick={this.handleSubmit}
                className={classes.buttonSignIn}
              >
                Sign In
              </Button>
            </CardActions>
            <div className={classes.divCenter}>
              <Link to="create-account"> Create an Account </Link>
              <div className={classes.forgotPassword}>
                <Link to="forgot-password"> Forgot your password? </Link>
              </div>
            </div>
          </Card>
        </div>
      </Layout>
    );
  }
}

LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginComponent);
