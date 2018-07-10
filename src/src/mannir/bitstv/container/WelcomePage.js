import React, { Component } from 'react';
import './WelcomePage.css';

export default class WelcomePage extends Component {
  constructor() {
    super();
    this.state = {
      name: 'WelcomePage'
    };
  }

  render() {
    return (
      <div className="demo-layout-waterfall mdl-layout mdl-js-layout">
        <main className="mdl-layout__content" style={{paddingTop: 35}}>
          <div className="page-content">
            <div className="mdl-grid blog-grid">
              {/* Your content goes here */}
              {/* Event card */}
              <div className="mdl-cell mdl-cell-8-col demo-card-event mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand">
                  <h4>
                    Bits TV:<br />
                    May 15, 2018<br />
                    10:11am
                  </h4>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                  <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    Add to Calendar
                  </a>
                  <div className="mdl-layout-spacer" />
                  <i className="material-icons">event</i>
                </div>
              </div>
              <div className="mdl-card mdl-cell mdl-cell--8-col mdl-shadow--2dp">
                <div className="mdl-card__supporting-text">
                  <h4>Welcome Mr. James Wong</h4> Welcome to Bits Interactive Hospitality TV. Enjoy Our IPTV experience.We are dedicated to ensuring that you enjoy your stay with us.
                </div>
                <div className="mdl-card__actions">
                  <a href="#" className="mdl-button">Read our features</a>
                </div>
              </div>
              <div className="mdl-card mdl-cell mdl-cell--12-col">
                <div className="mdl-card__title mdl-card--expand">
                </div>
                <div className="mdl-card__supporting-text">
                  <h2 className="mdl-card__title-text">Realtime Message from Front Desk</h2>
                  <ul className="mdl-list">
                    <li className="mdl-list__item mdl-list__item--three-line">
                      <span className="mdl-list__item-primary-content">
                        <i className="material-icons mdl-list__item-avatar">book</i>
                        <span>Guidelines and Deskbooks</span>
                        <span className="mdl-list__item-text-body">
                          The TPCOE and other stakeholders are currently working on producing or have produced various guidelines and desk books to help facilitate the management of funding agreements.
                        </span>
                      </span>
                      <span className="mdl-list__item-secondary-content">
                        <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
                      </span>
                    </li>
                    <li className="mdl-list__item mdl-list__item--three-line">
                      <span className="mdl-list__item-primary-content">
                        <i className="material-icons  mdl-list__item-avatar">directions</i>
                        <span>References</span>
                        <span className="mdl-list__item-text-body">
                          The following references from Transfer Payments Centre of Expertise have been provided for your information.
                        </span>
                      </span>
                    </li>
                    <li className="mdl-list__item mdl-list__item--three-line">
                      <span className="mdl-list__item-primary-content">
                        <i className="material-icons  mdl-list__item-avatar">insert_drive_file</i>
                        <span>Forms</span>
                        <span className="mdl-list__item-text-body">
                          Required forms for use in TPCOE business can be found here.
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                  <a href="#" className="mdl-button">Read our features</a>
                </div>
              </div>
              {/* Content Ends */}
            </div>
          </div>
        </main>
      </div>
    );
  }
}