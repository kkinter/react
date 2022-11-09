import React, { Component } from "react";

class Footer extends Component{

  // createAlert(){
  //   alert('hello. You clicked me');
  // }
  // 바뀌지 않음

  state = {
    name: 'Wook'
  }

  changed = evt => {

    this.setState({name: evt.target.value})
    console.log(this.state.name)
  }

  render() {
    return (
    <React.Fragment>
      <h2 onClick={this.props.myalert}>
        {this.props.trademark}
      </h2>
      <input value={this.state.name}
          onChange={this.changed} type="text"/>
    </React.Fragment>
    )
  }
}

export default Footer;
