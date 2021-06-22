import * as actionTypes from '../Actions/ActionType'
import {updateObject} from '../Utility'

const initialState={
    Screendata:'',
    name:'sid'
}

const updateData=(state,action)=>{
 return updateObject(state,{
     ScreenData:action.data,
 })
}

const updateName=(state,action)=>{
   return updateObject(state,{
       name:action.newName
   })
}


const  dataReducer=(state=initialState,action)=>{
    switch(action.type){
          case actionTypes.ADD_DATA:return  updateData(state,action);
          case actionTypes.UPDATE_NAME:return updateName(state,action);
          default:return state
    }
}

export default dataReducer;

