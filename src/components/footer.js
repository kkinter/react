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
    const animals = ['cat', 'dog', 'horse']

    return (
     <div>
      { animals.map( animal => {
          return <h1>{animal}</h1>;
      }) }
     </div>
    )
  }
}

export default Footer;
