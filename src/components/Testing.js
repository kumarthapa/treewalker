import React, {useState} from 'react'

const Testing = () => {

const [indata, setIndata] = useState()
const inputData = ''
const onChangehalde=(e,inputData)=>{
    const value = e.target.value
    inputData = value
    
}
const onClickhandle = (inputData) =>{
    setIndata(inputData)
}
    return (
        <div>
            <h1>hello</h1>

            <input onChange={onChangehalde} type="text"/>
            <button onClick={onClickhandle}>click</button>
            <p>{indata}</p>
        </div>
    )
}

export default Testing
