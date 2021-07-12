import * as actionTypes from './ActionType';

export const Addstudent=(newVal)=>{
    //console.log('Action==', newVal)
    return {
        type:actionTypes.ADD_DATA,
        data:newVal
           }
}
export const RemoveID=(removeId)=>{
    //console.log('Action==', newVal)
    return {
        type:actionTypes.REMOVE_ID,
        id:removeId
           }
}
export const EditData=(editId)=>{
    //console.log('Action==', editId)
    return {
        type:actionTypes.EDIT_DATA,
        id:editId
           }
}
export const updateData=(Data)=>{
    //console.log('Action==', Data.id)
    return {
        type:actionTypes.UPDATE_DATA,
        data:Data
           }
}