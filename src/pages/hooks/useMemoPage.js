import React, {useMemo, useState} from 'react';
const UseMemoPage = () => {
  const [count, setCount] = useState(20)
  const [value, setValue] = useState("")
  const expensiveVal = useMemo(() => {
    console.log('看你渲染几次')
    let sum = 0;
    for (let i = 0; i < count; i++) {
    sum += i;
    }
    return sum;
  }, [count])
  return ( 
    <div>
      <p>expensive:{expensiveVal}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>按钮add</button>
      <input value={value} onChange={event => {
        console.log('这里值一变，就会渲染！')
        setValue(event.target.value)
      }} />
    </div>
   );
}
 
export default UseMemoPage;