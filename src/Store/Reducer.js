import * as actionTypes from "../Store/ActionType";
import { updateObject } from "../Store/Utility"

const initialState = {
  StudentList: [],
  EditDATA: null
};
const Addstudent = (state, action) => {
  return updateObject(state, {
    StudentList: [...state.StudentList, action.data]
  });
};
const RemoveID = (state, action) => {
  const id = action.id
  const removeData = state.StudentList.filter((result) => result.id !== id)
  return updateObject(state, {
    StudentList: removeData,
  });
};
const EditData = (state, action) => {
  const id = action.id
  const elementIndex = state.StudentList.find((currId) => currId.id === id)
  return updateObject(state, {
    EditDATA: elementIndex
  })
};
const updateData = (state, action) => {
  const actionData = {
    stuData: action.data.editData,
    id: action.data.id
  }
  const oldStatedata = state.StudentList
  return updateObject(state, {
    ...oldStatedata,
    StudentList: oldStatedata.map((oldData) => oldData.id === action.data.id ? actionData : oldData)
  })
};
const Reducer = (state = initialState, action) => {
  //console.log('reducer',action)
  switch (action.type) {
    case actionTypes.ADD_DATA:
      return Addstudent(state, action);

    case actionTypes.REMOVE_ID:
      return RemoveID(state, action);

    case actionTypes.EDIT_DATA:
      return EditData(state, action)

    case actionTypes.UPDATE_DATA:
      return updateData(state, action)

    default: return state;
  }
};

export default Reducer;