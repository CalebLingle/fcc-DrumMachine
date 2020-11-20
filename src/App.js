import './App.css';
import React, { Component } from 'react';
import Display from './Components/display.js';
import Drums from './Components/pads.js';
import Grid from '@material-ui/core/Grid';

let values = [
  {   
      key: 'q', 
      description: "Heater 1", 
      soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      charCode: 113
  },
  {
      key: 'w', 
      description: "Heater 2", 
      soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      charCode: 119
  },
  {
      key: 'e', 
      description: "Heater 3", 
      soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      charCode: 101
  },
  {
      key: 'a', 
      description: "Heater 4", 
      soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      charCode: 97
  },
  {
      key: 's', 
      description: "Heater 6", 
      soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      charCode: 115
  },
  {
      key: 'd', 
      description: "Open HH", 
      soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      charCode: 100
  },
  {
      key: 'z', 
      description: "Kick n Hat", 
      soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      charCode: 122
  },
  {
      key: 'x', 
      description: "Kick", 
      soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      charCode: 120
  },
  {
      key: 'c', 
      description: "Closed HH", 
      soundSource: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      charCode: 99
  }
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Try Out The Drums!",
      padsData: values
    };
    this.clickHandler = this.clickHandler.bind(this)
    this.keyPressHandler = this.keyPressHandler.bind(this)
  }
  
  clickHandler(event) {
    this.setState({
      display: event.target.id 
    })
    const index = this.state.padsData.findIndex(x => x.description === event.target.id);
    this.playSound(index);
  }

  keyPressHandler(event) {
    const objs =  this.state.padsData;
    const keyPressed = event.key.toLowerCase();
    if(objs.findIndex(x => x.key === keyPressed) >= 0) {
      let keyIndex = objs.findIndex(x => x.key === keyPressed);
      this.setState({
        display: objs[keyIndex].description
      });
      this.playSound(keyIndex);
    }
  }
  
  playSound(id) {
    const objs = this.state.padsData;
    const sound = document.getElementById(objs[id].key.toUpperCase());
    
    var isPlaying = sound.currentTime > 0 && !sound.paused && !sound.ended && sound.readyState > 2;
    if(!isPlaying) {
      sound.play();
    }
  }

  render() {
    return (
      <Grid 
        id="drum-machine" 
        style={{padding: '100px'}} 
        direction="column" 
        justify="center" 
        spacing={3}
        xs={9}
        container>

        <Display display={this.state.display} />
        <Drums 
          padsData={this.state.padsData} 
          clickHandler={this.clickHandler} 
          keyPressHandler={this.keyPressHandler} />
        
        
      </Grid>
    )
  }
}

export default App;
