import classes from './Counter.module.css';
import {  useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../Store';
const Counter = () => {
  const counter=useSelector(state=>state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch=useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  const inHandler=()=>{
    dispatch(counterActions.incrementby2(2))
  };
  const outHandler=()=>{
    dispatch(counterActions.decrementby2(2))
  };
  const outByFiveHandler=()=>{
   
    dispatch(counterActions.decrementby5(5))
  };
  const inByFiveHandler=()=>{
    dispatch(counterActions.incrementby5(5))
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={inHandler}>increment</button>
        <button onClick={outHandler}>decrement</button>
        <button onClick={inByFiveHandler}>incrementby5</button>
        <button onClick={outByFiveHandler}>decrementby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
