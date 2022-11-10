import React, { Component } from "react";

class Footer extends Component{

  // createAlert(){
  //   alert('hello. You clicked me');
  // }
  // 바뀌지 않음

  state = {
    name: '',
    age: 35,
  }

  componentDidMount(){
    this.setState({name: 'MyName'})
    // subscribe
  }

  componentWillUnmount(){
    //unsubscribe
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
      {/* 35면 yes */}
      { this.state.age === 35 ? "yes": "no"}
    </React.Fragment>
    )
  }
}

export default Footer;
