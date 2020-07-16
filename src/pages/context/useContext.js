import React , {useContext} from 'react';
import { UserContext } from '../../components/themeContext';

export default function HookContext (params){
  const nameObj = useContext(UserContext)
  console.log(nameObj)
  return <div>{nameObj.name}hook </div>
};
/* export default function HookContext(props) {
  const themeContext = useContext(ThemeContext);
  const {themeColor} = themeContext;
  const userContext = useContext(UserContext);
  return (
  <div className="border">
  <h3 className={themeColor}>UseContextPage</h3>
  <p>{userContext.name}</p>
  </div>
  );
 } */