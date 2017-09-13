import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Spaceship from './Spaceship';
import CrewMember from './CrewMember';
import BadAlien from "./BadAlien";
import Planet from "./Planet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://vignette1.wikia.nocookie.net/stexpanded/images/d/d2/UFP_Flag.png/revision/latest?cb=20100211134913" className="App-logo" alt="logo" />
          <h2>Star Command</h2>
        </div>
        <Planet name="Earth">
          <CrewMember name="Uhuru" rank="Commander" />
          <CrewMember name="Kirk" rank="Captain" />
          <CrewMember name="Khan" rank="Genetically Modified Corn" />
        
        </Planet>
        <Spaceship name="WilleniumFalcon" commanderType="CrewMember">
          <CrewMember name="Riker" rank="Commander" />
          <CrewMember name="Wesley" rank="Ensign" />
          <BadAlien name="Borg" species="Borg" />
        </Spaceship>
      </div>
    );
  }
}

export default App;
