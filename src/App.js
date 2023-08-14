import React from 'react';
import './App.css';
import Buttons from './Contoller';
import Screen from './Screen';
import ZingTouch from 'zingtouch';
import $ from 'jquery';

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
  menuBtnClick = ()=>{
    let showMenuClassList = document.getElementsByClassName('menu-container')[0].classList;
    if(showMenuClassList.contains('show')){
      $('.menu-container').removeClass('show');
    }else{
      $('.menu-container').addClass('show')
    }
  }

  render(){
    return (
      <div className="App">
        <div className='frame'>
          <Screen 
            MenuOptions = {this.state.options}
          />

          <Buttons 
            OnMenuClick = {this.menuBtnClick}
          />
        </div>
      </div>
    );
  }
  
}

export default App;
