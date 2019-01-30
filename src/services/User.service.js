import User from "./User.json";

class UserService {
  getUserById(id) {
    console.error("Wrong password, please try again!");
    return User.users[id];
  }

  getUserByUsername(username) {
    return User.users.find(user => user.username === username);
  }

  checkUser(username, password) {
    let user = this.getUserByUsername(username);
    if (user) {
      if (user.password === password) {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        console.log("If del checkuser", sessionStorage.getItem('username'), sessionStorage.getItem('password'));
        return ("Logged");
      } else {
        console.error("Wrong password, please try again!");
        return("Error");
      }
    }else
    return("Error");
  }

  checkUsername(username,password,email,fullname){
    let user = this.getUserByUsername(username);
    if(user === undefined){
      this.addUser(username, password, email, fullname);
      this.checkUser(username, password);
      return ("Registered");
    } else {
      console.error("That user already exists.", user);
      return ("Error");
    }
  }

  addUser(username, password, email, fullname){
    console.log(User.users);

    var usersJson= User.users.push({
      name: fullname,
      username: username,
      email : email,
      password: password
  });
  User = JSON.stringify(usersJson);
  }
}
export default UserService;
