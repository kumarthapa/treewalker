import React,{useEffect} from 'react'
import * as UpdateActions from './store/Actions/dataUpdateAction'
import {useSelector,useDispatch} from 'react-redux'
const App = () => {
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.screenDataReducer)
  useEffect(()=>{
  //  props.onUpdateData("")
  dispatch(UpdateActions.dataUpdate("This is the app to update the name"))
  },[])
// {console.log(props.data)}
const submitHandler=()=>{
dispatch(UpdateActions.updateName('kumar'))
}
  return (
    <div>
      <h1>This is screen data</h1>
      {data.Screendata}
      <br/>
      <h1>This is updated Name</h1> &nbsp;&nbsp;&nbsp;
      {data.name}<br/>
      <button onClick={submitHandler}>Update</button>
    </div>
  )
}
// const mapStateToProps = (state)=>{
//   return{
//     data:state.screenDataReducer.ScreenData,
//     newName:state.screenDataReducer.name
//   }
  
// }
// const mapDispatchToProps = (dispatch)=>{
//   return {
//     onUpdateData:(newVal)=>dispatch(UpdateActions.dataUpdate(newVal)),
//     onUpdateName:(first)=>dispatch(UpdateActions.updateName(first))
//   }
// }
//export default connect(mapStateToProps,mapDispatchToProps)(App)

export default App