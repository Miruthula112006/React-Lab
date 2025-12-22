import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Dashboard from './components/Dashboard'

function App(){
    const [name,setName]= useState ("miruthula")
    const [occ,setOcc]= useState ("student")
    function nameChange(){
        setName("mira")
        setOcc("developer")
        console.log(name)
    }
    return(
        <Dashboard name={name} occ={occ} nameChange={nameChange}></Dashboard>
    )
}

export default App


