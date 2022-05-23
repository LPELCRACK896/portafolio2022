import React from "react"
import {createRoot} from "react-dom/client"
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)
const App = () =>{
    return <div>
        adios
    </div>;
}
root.render(<App/>)