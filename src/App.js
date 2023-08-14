import React from 'react';
import './App.css';
import Buttons from './Contoller';
import Screen from './Screen';
import ZingTouch from 'zingtouch';
import $ from 'jquery';

class App extends React.Component {
  constructor(){
    super();
    this.change_in_angle = 0;
    this.temp_selected = 0;
    this.state = {
      options : ['Games','Songs','Settings','CoverFlow'],
      selectedOption: 0
    }
  }
  componentDidMount(){
    let zt = new ZingTouch.Region(document.getElementsByClassName('btn-container')[0]);
    zt.bind(document.getElementsByClassName('btn-container')[0],'rotate',(event)=>{
      if(document.getElementsByClassName('menu-container')[0].classList.contains('show')){
        let dist = event.detail.distanceFromLast;
        this.change_in_angle += dist;
        if(this.change_in_angle > 60){
          this.temp_selected++;
          this.temp_selected = this.temp_selected%this.state.options.length;
          this.setState({
            selectedOption: this.temp_selected
          });
          this.change_in_angle = 0;
        }
        else if(this.change_in_angle < -60){
          this.temp_selected--;
          if(this.temp_selected === -1){
            this.temp_selected = this.state.options.length -1;
          }
          this.temp_selected = this.temp_selected%this.state.options.length;
          this.setState({
            selectedOption: this.temp_selected
          });
          this.change_in_angle = 0;
        }
      }
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
            selectedOption = {this.state.selectedOption}
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
