import {createStore} from 'redux';
const countReducer=(state={counter:0},action)=>{
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
    return state;

}
const store=createStore(countReducer);
export default store;