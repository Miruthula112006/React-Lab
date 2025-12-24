import React,{useActionState, useState} from "react"
export default function Counter(){
    const [count,setCount]=useActionState(0)
    function increment(){
        setCount(count+1)

    }
    function decrement(){
        setCount(count-1)
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
         <button onClick={increment}>+</button>
        </>
    )
}