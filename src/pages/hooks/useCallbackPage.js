import React, { PureComponent, useCallback, useState } from 'react';
const UseCallbackPAge = () => {
  const [count, setCount] = useState(20)
  const [value, setValue] = useState('')
  const addClick = useCallback(() => {
    console.log('渲染一次');
    let sum = 0;
    for (let i = 0; i < count; i++) {
    sum += i;
    }
    return sum;
  }, [count])
  return ( 
    <div>
      <h3>UseCallbackPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>按钮add</button>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <Child addClick={addClick}></Child>
    </div>
  );
}
class Child extends PureComponent {
  render () {
    console.log('纯组件，没有状态变化，我就不变')
    const {addClick} = this.props
    return (
      <div>
        <h3>Child</h3>
        <button onClick={() => console.log(addClick())}>Child按钮add</button>
      </div>
    )
  }
}




 
export default UseCallbackPAge;