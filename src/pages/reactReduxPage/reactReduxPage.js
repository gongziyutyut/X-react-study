
import React, { Component } from 'react';
import { connect } from '../../components/Xreact-redux/index.js';


class ReactReduxPage extends Component {
  constructor (props) {
    super()
  }

  render () {
    const {count, add} = this.props
    console.log(this.props)
    return (
      <div>
        ReactReduxPage ++++ {count}
        <button onClick={add}>增加</button>
      </div>
    )
  }
}

export default connect(
  state => state,
  {
    add: () => ({
      type: "ADD"
    })
  }
) (ReactReduxPage)