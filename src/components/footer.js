import React, { Component } from "react";
import { CtxConsumer } from '../index';

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
    // const animals = ['cat', 'dog', 'horse']

    return (
     <CtxConsumer>
      {(context) => (
        <div>
        { context.animals.map( animal => {
          return (
          <div key={animal}>
            <h1>{animal}</h1>
          </div>
          );
      }) }
      </div>
      )}
     </CtxConsumer>
    )
  }
}

export default Footer;
