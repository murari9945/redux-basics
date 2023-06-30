import {createStore} from 'redux';
import {createSlice,configureStore} from '@reduxjs/toolkit';


const initialState = { counter: 0, showCounter: true };
const countSlice=createSlice({
    name: 'counter',
    initialState,
    reducers:{
        incrementby2(state,action) {
            state.counter = state.counter + action.payload;
        },
        decrementby2(state,action) {
            state.counter = state.counter - action.payload;
        },
        incrementby5(state,action) {
            state.counter = state.counter + action.payload;
        },
        decrementby5(state,action) {
            state.counter = state.counter - action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
          }
    }
    

})
const initialAuthState = {
    isAuthenticated: false,
  };
  
  const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
      login(state) {
        state.isAuthenticated = true;
      },
      logout(state) {
        state.isAuthenticated = false;
      },
    },
  });
/*const countReducer=(state={counter:0},action)=>{
    if(action.type==='incrementby2'){
        return {
        counter:state.counter+2
        }
    }
    if(action.type==='decrementby2'){
        return{
            counter:state.counter-2
        }
    }
    if(action.type==='decrementby5'){
        return{
            counter:state.counter-5
        }
    }
    if(action.type==='incrementby5'){
        return {
        counter:state.counter+5
        }
    }
    return state;

}*/
const store = configureStore({
    reducer: {counter: countSlice.reducer, auth: authSlice.reducer}
  });
  
  export const counterActions = countSlice.actions;
  export const authActions = authSlice.actions;
export default store;