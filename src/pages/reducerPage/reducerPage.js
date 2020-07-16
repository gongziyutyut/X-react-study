import React, {useReducer} from 'react';
import {reducer} from '../../store'
const ReducerPage = (props) => {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  const {count} = state
  return ( 
    <div>
      ReducerPage————{count}
      <button onClick = {() => dispatch({type: "ADD"})}>按钮</button>
    </div>
  );
}
 
export default ReducerPage;
