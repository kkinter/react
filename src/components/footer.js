import React, { Component } from "react";

class Footer extends Component{

  // createAlert(){
  //   alert('hello. You clicked me');
  // }

  changed() {
    console.log('chaged')
  }

  render() {
    return (
    <React.Fragment>
      <h2 onClick={this.props.myalert}>
        {this.props.trademark}
      </h2>
      <input onChange={this.changed} type="text"/>
    </React.Fragment>
    )
  }
}

export default Footer;
