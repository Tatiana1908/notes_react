import React, { Component } from 'react';
import './style.css';

let colors = ["yellow", "pink", "green"];

class ColorPicker extends Component {
  onChangeColor = (e) => {
    e.target.checked && this.props.changeBGColor(e)
  }
  render() {
    return (
      <div className="d-flex">
      {colors.map(color => {
        let className = (color === this.props.checkedColor) ? `checked ${color}` : color; 
        return <input type="radio" key={color} name="bgColor" value={color} onChange={this.onChangeColor} className={className}/>
      })}        
      </div>
    );
  }
}

export default ColorPicker;
