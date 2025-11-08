import {userState} from "react";
import App from "../../JumpApp/src/App";
function Counter(){
  const [count, setCount]=userState(0);
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      
    </div>
  )
}
export default App