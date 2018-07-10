import React, { Component } from 'react';

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      name: 'MainPage'
    };
  }

  render() {
    return (
       <div className="container" id="mainpage">
        <div className="row">
          <div className="col s12 m6">
            <div className="card hoverable" id="personal">
              <div className="card-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Forest_panorama_2.jpg/1280px-Forest_panorama_2.jpg" />
                <span className="card-title">Personal</span>
              </div>
              <div className="card-content">
                <h5>Dear Mr. James Wong</h5>
                <ul className="fa-ul">
                  <li><i aria-hidden="true" className="fa-li fa fa-map-marker" /><a href="https://goo.gl/maps/bMKU1Zd5rMN2" target="_blank">Kuala Lumpur, Malaysia</a></li>
                  <li><i aria-hidden="true" className="fa-li fa fa-comments-o" />English, Dutch, Spanish</li>
                  <li><i aria-hidden="true" className="fa-li fa fa-code" />Smart TV Online connected to server</li>
                </ul>
                <p>Welcome to Bits Interactive Hospitality TV. Enjoy Our IPTV experience.We are dedicated to ensuring that you enjoy your stay with us.</p>
              </div>
              <div className="card-action center-align">
                <a href="https://github.com/RemarkableGuy" target="_blank"><i aria-hidden="true" className="fa fa-github fa-2x" /></a>
                <a href="https://www.linkedin.com/in/alvaroschipper" target="_blank"><i aria-hidden="true" className="fa fa-linkedin-square fa-2x" /></a>
                <a href="https://codepen.io/RemarkableGuy/" target="_blank"><i aria-hidden="true" className="fa fa-codepen fa-2x" /></a> <a href="#" target="_blank"><i aria-hidden="true" className="fa fa-envelope-o fa-2x" /></a>
              </div>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="card hoverable principle">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Code</span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">View Invoice<i className="material-icons right">close</i></span>
                <p>I pride myself in writing code that is as clean, maintainable and understandable as possible.</p>
              </div>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="card hoverable principle">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="https://images.pexels.com/photos/545034/pexels-photo-545034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Interactives</span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Express Checkout<i className="material-icons right">close</i></span>
                <p>When I work on projects, I focus on the end user. I keep the end user's wants and needs in the back of my head at all times, making for a smooth user experience.</p>
              </div>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="card hoverable principle">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">TV Channel</span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Design<i className="material-icons right">close</i></span>
                <p>I have a fervent passion for clear and clean design, and I incorporate that in all of my projects.</p>
              </div>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="card hoverable principle">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Weather</span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Responsive<i className="material-icons right">close</i></span>
                <p>I make my projects perfectly accessible on all devices, from the smallest smartphone touchscreen, to the biggest 4k monitor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}