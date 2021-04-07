import React, { Component } from 'react';
import profilepic from '../img/profilepic.jpg';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src={profilepic} className="profilepic" alt='Brandon Toun Profile'></img>

        <div className="banner-text">
          <h1>I'm Brandon Toun</h1>
          <h3>I am a Software Engineer based in St. Petersburg, Florida. I've worked as a full stack software engineer.</h3>
        </div>
      </div>
    )
  }
}
export default Home