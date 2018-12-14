import {SET_DATA} from '../actions/index';

export  function SetData (state=[],action){
    console.log(action.payload);

    switch(action.type){

        case SET_DATA:
            return action.payload
        default:
                return state
    }
}
