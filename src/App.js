import React from 'react';
import './App.css';
import Buttons from './Contoller';
import Screen from './Screen';
import ZingTouch from 'zingtouch';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      options : ['Games','Songs','Settings','CoverFlow']
    }
  }
  componentDidMount(){
    let zt = new ZingTouch.Region(document.getElementsByClassName('btn-container')[0]);
    zt.bind(document.getElementsByClassName('btn-container')[0],'rotate',(event)=>{
        let dist = event.detail.distanceFromLast;
        console.log(dist);
    });
  }

  render(){
    return (
      <div className="App">
        <div className='frame'>
          <Screen 
            MenuOptions = {this.state.options}
          />

          <Buttons />
        </div>
      </div>
    );
  }
  
}

export default App;
