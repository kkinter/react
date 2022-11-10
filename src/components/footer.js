import React, { Component } from "react";

class Footer extends Component{

  // createAlert(){
  //   alert('hello. You clicked me');
  // }
  // 바뀌지 않음

  state = {
    name: '',
    age: 35,
    isLogin: true,
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
      <div>
      { this.state.isLogin ? (
      <React.Fragment>
        <h2 onClick={this.props.myalert}>
        {this.props.trademark}
        </h2>
        <input value={this.state.name}
        onChange={this.changed} type="text"/>
    </React.Fragment>
    ) : (
      <React.Fragment>
        <h2>You can't see this content</h2>
        <h2>You must be login</h2>
    </React.Fragment>
    )}
    </div>
    )
  }
}

export default Footer;
