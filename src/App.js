import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByN } from './redux/action/counterAction';
import { disableSwitch, enaleSwitch } from './redux/action/switchAction';

function App() {
  return (
    <>
      <Counter />
      <Switch />
    </>
  );
}

function Counter() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div className='count'>
      <h3>Counter: {counter} </h3>
      {/* <button onClick={() => { dispatch(incrementByN(5)) }}>Increment by 5</button> */}
      <button onClick={() => { dispatch(increment()) }}>Increment</button>
      <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
    </div>
  )
}

function Switch() {
  const switchX = useSelector((state) => state.switch)
  const dispatch = useDispatch();
  return (
    <div className="count">
      <h3>Switch State : {switchX.enabled ? "Enabled" : "Disabled"} </h3>
      <button onClick={() => { dispatch(enaleSwitch()) }}>Enable</button>
      <button onClick={() => { dispatch(disableSwitch()) }}>Disable</button>
    </div>
  )
}

export default App;
