import React from 'react'
import { Routes, Route, HashRouter} from 'react-router-dom'

const SinglePage = () => {
  return (
    <HashRouter>    
      <Routes>
          <Route exact path="/" element = {<div> main</div>}/>
          <Route exact path="/game" element = {<div> game</div>}/>
      </Routes>    
    </HashRouter>
  )
}

export default SinglePage