import React, {useState} from 'react';
/* import logo from './logo.svg';
import './App.css'; */
//import Home from './pages/home/home'
import HOCPage from './pages/hoc/hoc'
import HocClass from './pages/hoc/hocClass'
import AntdPage from './pages/antdForm/antdFormPage';
import Antd3Form from './pages/antd3Form';
import Dialog from './pages/Dialog/dialog';
import ReduxPage from './pages/reduxPage/reduxpage';
import ReducerPage from './pages/reducerPage/reducerPage';
import ReactReduxPage from './pages/reactReduxPage/reactReduxPage';
import UseMemoPage from './pages/hooks/useMemoPage';
import UseCallbackPAge from './pages/hooks/useCallbackPage';

function App() {
  const [counter, setCounter] = useState(0)
  const [dialogFlag, setDialogFlag] = useState(false)
  return (
    <div className="App">
      <div>点击 {counter} 次</div>
      <button onClick={() => setCounter(counter + 2)}>按钮</button>
     {/*  <button onClick={() => setCounter(counter + 2)}>按钮</button>
      <button onClick={() => setDialogFlag(!dialogFlag)}>弹窗</button> */}
      <br></br>
      <UseCallbackPAge></UseCallbackPAge>
      {/* <UseMemoPage></UseMemoPage> */}
      {/* <ReduxPage></ReduxPage>
      <ReducerPage></ReducerPage> */}
     {/*  <ReactReduxPage></ReactReduxPage> */}
      {/* <HOCPage></HOCPage>
      <HocClass></HocClass>
      <AntdPage></AntdPage> */}
      {/* <Antd3Form></Antd3Form>
      {dialogFlag && <Dialog></Dialog>} */}
      {/* <Home>
        {
          {
            content: 'xxxxxxxxxx',
            addtion: '补充'
          }
        }
      </Home> */}
      
    </div>
  );
}

export default App;
