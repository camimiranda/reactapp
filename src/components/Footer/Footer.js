import React, { Component } from "react";
import pink from "@material-ui/core/colors/pink";
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div style={{borderTopColor: pink[500]}} class="footer-social-icons">
          <h4 class="_14">Follow us on: </h4>
          <ul class="social-icons">
            <li>
              <a href="http://www.facebook.com" rel="noopener noreferrer" target="_blank" class="social-icon">
                <i class="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="http://www.instagram.com" rel="noopener noreferrer" target="_blank" class="social-icon">
                <i class="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com" rel="noopener noreferrer" target="_blank" class="social-icon">
                <i class="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="http://Www.youtube.com" rel="noopener noreferrer" target="_blank" class="social-icon">
                <i class="fa fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
