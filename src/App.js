import './App.css';
import React, { Component } from 'react'
import Navbar from './Compnents/Navbar';
import Route from './Compnents/Route';
import Business from './Compnents/Business';
import Entertainment from './Compnents/Entertainment';
import General from './Compnents/General';
import Health from './Compnents/Health';
import Science from './Compnents/Science';
import Sports from './Compnents/Sports';
import Technology from './Compnents/Technology';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state={
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <div className="ui container">
          <Route path="/">
            <General setProgress={this.setProgress} />
          </Route>
          <Route path="/Business">
            <Business setProgress={this.setProgress} />
          </Route>
          <Route path="/Entertainment">
            <Entertainment setProgress={this.setProgress} />
          </Route>
          <Route path="/General">
            <General setProgress={this.setProgress} />
          </Route>
          <Route path="/Health">
            <Health setProgress={this.setProgress} />
          </Route>
          <Route path="/Science">
            <Science setProgress={this.setProgress} />
          </Route>
          <Route path="/Sports">
            <Sports setProgress={this.setProgress} />
          </Route>
          <Route path="/Technology">
            <Technology setProgress={this.setProgress} />
          </Route>
        </div>
      </div>
    )
  }
}

