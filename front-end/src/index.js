import React from "react"
import {createRoot} from "react-dom/client"
import './index.css'
import SinglePage from "./pages/SinglePage.jsx"

const container = document.getElementById('root')
const root = createRoot(container)
const App = () =>  <SinglePage/>;

root.render(<App/>)