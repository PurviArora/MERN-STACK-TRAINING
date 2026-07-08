import Parent from "./props/Parent";
import Usernamechange from "./states/Usernamechange";
import Counter from "./states/Counter";

const App = () =>{
    return(
        <>
          <Parent />  
          <Usernamechange />
          <Counter />
        </>
    )
}

export default App;