import classes from './Counter.module.css';
import {  useSelector,useDispatch } from 'react-redux';

const Counter = () => {
  const counter=useSelector(state=>state.counter);
  const dispatch=useDispatch();
  const toggleCounterHandler = () => {};
  const inHandler=()=>{
    dispatch({type:'incrementby2'})
  };
  const outHandler=()=>{
    dispatch({type:'decrementby2'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={inHandler}>increment</button>
        <button onClick={outHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
