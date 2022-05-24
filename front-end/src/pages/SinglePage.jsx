import React , {useState}from 'react'
import { Routes, Route, HashRouter} from 'react-router-dom'
import NavigationBar from '../components/navigation_bar/NavigationBar.jsx'
const SinglePage = () => {
  const [language, setLanguage] = useState("spanish");

  return (

    <HashRouter>  
      {/* Common elements  on top*/} 
      <NavigationBar language = {language} isDiplayed="false"/>
      {/* Ends common elements on top*/}
      <Routes>
          <Route exact path="/" element = { <>
            
            </>
          }/>
          <Route exact path="/about" element = {
            <>
            <div>rata</div>
            </>
          }/>
          <Route exact path="/contact" element = {
            <>
            </>
          }/>
          <Route exact path="/web-projects" element = {
            <>
            </>
          }/>
          <Route exact path="/other-projects" element = {
            <>
            </>
          }/>
          <Route exact path="/programm-languages-and-tec" element = {
            <>
            </>
          }/>
      </Routes>
      {/* Common elements  on bottom*/} 
           
           
      {/* Ends common elements on bottom*/}    
    </HashRouter>
  )
}

export default SinglePage