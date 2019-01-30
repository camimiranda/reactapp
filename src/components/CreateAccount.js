import React, { Component } from "react";
import Layout from "./Layout";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import InputPink from "./InputPink";
import pink from "@material-ui/core/colors/pink";
import "./Login.css";
import UserService from "../services/User.service";

const styles = theme => ({
  root: {
    backgroundImage:
      "https://cdn.pixabay.com/photo/2018/02/02/23/27/office-3126597_960_720.jpg"
  },
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center"
  },
  buttonSignIn: {
    left: "30%",
    position: "relative",
    textAlign: "center",
    "&:hover": {
      backgroundColor: pink[500]
    }
  },
  container: {
    marginTop: "3em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2018/02/02/23/27/office-3126597_960_720.jpg)"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  card: {
    width: "50%",
    padding: "10px 0 30px 0",
    margin: "0 auto",
    maxWidth: "50%"
  },
  header: {
    borderBottom: "2px solid",
    paddingBottom: "0em",
    borderBottomColor: pink[600]
  }
});

const userService = new UserService();
class CreateAccountComponent extends Component {
  constructor(props) {
    super(props);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  onChangeFullName(event) {
    this.setState({
      fullName: event.target.value
    });
  }

  onChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  onChangeEmail(event){
    this.setState({
      email: event.target.value
    });
  }

  onChangePassword(event){
    this.setState({
      password: event.target.value
    });
  }

  onChangeConfirmPassword(event) {
    this.setState({
      confirmPassword: event.target.value
    });
  }

  onSubmit() {
    if (
      this.state.username !== "" &&
      this.state.confirmPassword !== "" &&
      this.state.password !== "" &&
      this.state.email !== "" &&
      this.state.fullName !== ""
    ) {
      if (this.state.confirmPassword === this.state.password) {
        let userExists = userService.checkUsername(
          this.state.username,
          this.state.password,
          this.state.confirmPassword,
          this.state.fullName,
          this.state.email
        );
        if (userExists === "Registered") {
          
          this.props.history.push("/login");
        } else {
          console.error("Couldn't register user");
          this.props.history.push("/create-account");
        }
      } else {
        console.error("Different passwords. Please create account again!");
      }
    } else {
      console.error("You can't leave fields empty");
      //this.props.history.push('/login')
    }
  }
  
  render() {
    const { classes } = this.props;
    let className = "button-signin";
    return (
      <Layout>
        <div className={classes.container}>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.header}>
                <h1>Create your Account</h1>
              </div>
              <form 
               onSubmit={this.onSubmit}
                className={classes.formContainer}
                autoComplete="off"
              >
                <InputPink
                  type="text"
                  label="Full Name"
                  onChange={this.onChangeFullName}
                  value= {this.state.fullName}
                />
                <InputPink
                  type="text"
                  label="Username"
                  onChange={this.onChangeUsername}
                  value={this.state.username}
                />
                <InputPink
                  type="text"
                  label="E-mail"
                  onChange={this.onChangeEmail}
                  value={this.state.email}
                />
                <InputPink
                  label="Password"
                  type="password"
                  onChange={this.onChangePassword}
                  value= {this.state.password}
                />
                <InputPink
                  label="Confirm Password"
                  type="password"
                  onChange={this.onChangeConfirmPassword}
                  value={this.state.confirmPassword}
                />
              </form>
            </CardContent>
            <CardActions>
              <Button 
                variant="contained" 
                className={classes.buttonSignIn}
                onClick={this.onSubmit}
                >
                Create Account
              </Button>
            </CardActions>
          </Card>
        </div>
      </Layout>
    );
  }
}
CreateAccountComponent.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CreateAccountComponent);
