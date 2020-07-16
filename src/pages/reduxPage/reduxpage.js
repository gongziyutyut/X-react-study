import React, { Component } from 'react';
import store from '../../store'
import { connect } from 'react-redux';

class ReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount () {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }


 /*  add = () => {
    store.dispatch({
      type: "ADD"
    })
  } */
  thunkAdd = () => {
    store.dispatch(setTimeout(() => {
      store.dispatch({
        type: "ADD"
      })
      /* 应用下自己的thunk */
    }, 1000))
  }
  asyncAdd = () => {
    store.dispatch(() => {
      console.log('执行')
      setTimeout(() => {
        store.dispatch({
          type: "ADD"
        })
      }, 1000)
    })
  }
  minus = () => {
    store.dispatch({
      type: "MINUS"
    })
  }



  render() { 
    console.log(this.props)
    const {count, add} = this.props
    return ( 
      <div>
        reduxPage ———— {count}
        <button onClick={add}>ADD按钮</button>
        <button onClick={this.asyncAdd}>thunk - ADD按钮</button>
        <button onClick={this.minus}>MINUS按钮</button>
      </div>
     );
  }
}
 
export default connect(
  state => state,
  {
    add: () => ({
      type: "ADD"
    })
  }
)(ReduxPage);