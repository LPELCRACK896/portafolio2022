import React , {useState}from 'react'
import { Routes, Route, HashRouter} from 'react-router-dom'
import NavigationBar from '../components/navigation_bar/NavigationBar.jsx'
const SinglePage = () => {
  const [language, setLanguage] = useState("spanish");

  return (
    <HashRouter>    
      <Routes>
          <Route exact path="/" element = {
            <NavigationBar language = {language}/>
          }/>
      </Routes>    
    </HashRouter>
  )
}

export default SinglePage