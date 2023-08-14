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
      selectedOption: 0,//index of current active option
      showPage: -1 //index of which page to show
    }
  }
  componentDidMount(){
    let zt = new ZingTouch.Region(document.getElementsByClassName('btn-container')[0]);
    zt.bind(document.getElementsByClassName('btn-container')[0],'rotate',(event)=>{
      if(document.getElementsByClassName('menu-container')[0].classList.contains('show')){ //allow rotate gesture only when menu is visible
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
    if(this.state.showPage !== -1){ //back to home when different page is showing on screen
      this.setState({
        showPage: -1
      });
    }else{
      let showMenuClassList = document.getElementsByClassName('menu-container')[0].classList;
      if(showMenuClassList.contains('show')){
        $('.menu-container').removeClass('show');
      }else{
        $('.menu-container').addClass('show')
      }
    }
    
  }
  selectBtnClicked = ()=>{ //select button click handler
    this.setState({
      showPage: this.state.selectedOption,
      selectedOption: 0
    });
    this.temp_selected = 0;
    this.menuBtnClick();
  }

  render(){
    return (
      <div className="App">
        <div className='frame'>
          <Screen 
            MenuOptions = {this.state.options} 
            selectedOption = {this.state.selectedOption}
            showPage = {this.state.showPage}
          />

          <Buttons 
            OnMenuClick = {this.menuBtnClick}
            OnSelectClick = {this.selectBtnClicked}
          />
        </div>
      </div>
    );
  }
  
}

export default App;
