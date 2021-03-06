import React , {useState, useEffect}from 'react'
import { Routes, Route, HashRouter} from 'react-router-dom'
import ContactMe from '../components/contact-me-section/ContactMe.jsx';
import Footer from '../components/footer/Footer.jsx';
import MyWebProjectsSection from '../components/my-web-projects-section/MyWebProjectsSection.jsx';
import NavigationBar from '../components/navigation_bar/NavigationBar.jsx'
import OtherAppsSection from '../components/other_apps_section/OtherAppsSection.jsx';
import ProgrammResume from '../components/programm-resume/ProgrammResume.jsx';
import ResumeSectionCmd from '../components/resume_section_cmd/ResumeSectionCmd.jsx';
import './single_page_style.scss'

const SinglePage = () => {
  const [language, setLanguage] = useState("spanish");
  const [route, setRoute] = useState("/");
  const goToTop = () =>{
    document.getElementsByClassName('content-in-page').scrollTo(0,0)
  }
  useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  return (

    <HashRouter>  
      {/* Common elements  on top*/} 
      <NavigationBar language = {language} isDiplayed="false"/>
      {/* Ends common elements on top*/}
      <Routes>
          <Route  path="/" element = {
            <div className='content-in-page'>
              <ResumeSectionCmd />
              <MyWebProjectsSection limit={4}/>
              <OtherAppsSection />
              <ContactMe />
            </div>
          }/>
          <Route  path="/about" element = {
            <div className='content-in-page'>
              <ResumeSectionCmd on="all-page"/>
            </div>
          }/>
          <Route  path="/contact" element = {
            <div className='content-in-page'>
              <ContactMe />
          </div>
          }/>
          <Route  path="/web-projects" element = {
              <div className='content-in-page'>
                <MyWebProjectsSection />
            </div>
          }/>
          <Route exact path="/other-projects" element = {
            <div className='content-in-page'>
              <OtherAppsSection />
          </div>
          }/>
          <Route  path="/programm-languages-and-tec" element = {
            <div className='content-in-page'>
          </div>
          }/>
          <Route  path="/programm-languages/:name" element = {
              <div className='content-in-page'>
                <ProgrammResume />
              </div>
          }/>
      </Routes>
      {/* Common elements  on bottom*/} 
      <Footer />     
           
      {/* Ends common elements on bottom*/}    
    </HashRouter>
  )
}

export default SinglePage