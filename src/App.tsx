import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { decrement, increment } from "./features/userSlice";

function App() {
  const user = useSelector((state: RootState) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  return (
    <div>
      <p>first name: {user.firstName}</p>
      <p>last name: {user.lastName}</p>
      <h1>Count: {user.age}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
