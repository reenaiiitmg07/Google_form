import { combineReducers } from 'redux';

import {SetData} from './reducer';


let rootReducer = combineReducers({
    data:SetData
});

export default rootReducer
