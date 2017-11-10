import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './meedan-white.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <section className="header">
          <div className="section-inner">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Meedan User Interface Guide</h2>
          </div>

          <div className="section-inner">
            <p>
              2017 November
            </p>
          </div>
        </section>

        <section>
          <div className="section-inner">
            <h3>Buttons</h3>
            <RaisedButton label="Save" />
          </div>
        </section>
      </MuiThemeProvider>
    );
  }
}

export default App;
