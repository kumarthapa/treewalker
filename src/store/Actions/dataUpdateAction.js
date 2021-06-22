import * as actionTypes from './ActionType';

export const updatesData=(newVal)=>{
    return {
        type:actionTypes.ADD_DATA,
        data:newVal
           }
}

export const updateName=(first)=>{
  return{
        type:actionTypes.UPDATE_NAME,
        newName:first
  }
}

export const dataUpdate=(newData)=>{
    return dispatch=>{
        dispatch(updatesData(newData))
    }
}