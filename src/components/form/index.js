import React, { Component } from 'react';
import './style.css'; 
import ColorPicker from '../color-picker';

class Form extends Component {
  state = {
    title: '',
    content: '',
    bgColor: 'yellow'
  }
  onChangeFieldValue = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onFormSubmit = () => {
    this.props.addNewTodo(this.state)
    this.setState({
      title: '',
      content: '',
      bgColor: 'yellow'
    })
  }
  render() {
    return (
      <div className="form-wrap">
        <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.onChangeFieldValue} />
        <textarea name="content" placeholder="description" rows="3" value={this.state.content} onChange={this.onChangeFieldValue} />
        <div className="d-flex justify-sb">
          <ColorPicker changeBGColor={this.onChangeFieldValue} checkedColor={this.state.bgColor}/>
          <button className="btn" onClick={this.onFormSubmit}>Add</button>
        </div>
        {this.props.alert && <div className="alert">All field shoudl be fill</div>}
      </div>
    );
  }
}

export default Form;