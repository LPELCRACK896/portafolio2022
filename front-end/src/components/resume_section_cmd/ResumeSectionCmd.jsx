import React , {useEffect} from 'react'
import './resume_section_cmd_style.scss'
import { Link } from 'react-router-dom'

const ResumeSectionCmd = ({on}) => {

  return (
    <div className='resume-section-wrapper' style={on?on==='all-page'?{height: '100%'}:{}:{}}>
        <div className='cmd-buttons-section'>
            <div className='button-on-cmd' style={{backgroundColor: '#DF5959'}}></div>
            <div className='button-on-cmd' style={{backgroundColor: '#FDBC2E'}}></div>
            <div className='button-on-cmd' style={{backgroundColor: '#27C940'}}></div>
        </div>
        <div className='content-in-resume-section'>
            <a href="https://github.com/LPELCRACK896"className='name-on-resume-section'>{'>'} Lp-dev</a>
            <p className='texto-en-resume'>
            C:\Users\admin{'>'} about-me <br/><br/>
            Soy desarollador web y programador, estudiante de tercer año en ingeniería en computación. 
            Para el desarollo web utilizó 
            <Link to={`/programm-languages/reactjs`}><b className='programm-lang'> ReactJS </b></Link> (from scratch, utilizando
            <Link to={`/programm-languages/webpack`}><b className='programm-lang'> Webpack 5</b></Link>), 
            <Link to={`/programm-languages/javascript`}><b className='programm-lang'> Javascript</b></Link>,
            <Link to={`/programm-languages/html`}><b className='programm-lang'> HTML5</b></Link>,
            <Link to={`/programm-languages/css`}><b className='programm-lang'> CSS3</b></Link> como front-end, y 
            <Link to={`/programm-languages/nodejs`}><b className='programm-lang'> NodeJS </b></Link> con la librería express para el backend. Para aplicaciones varias utilizo 
            <Link to={`/programm-languages/python`}><b className='programm-lang'>Python </b></Link>y 
            <Link to={`/programm-languages/java`}><b className='programm-lang'> Java </b></Link> para desarrollar soluciones. Finalmente, tengo conocimiento en bases de datos relacionales, particularment con el DBMS 
            <Link to={`/programm-languages/postgresql`}><b className='programm-lang'> PostgreSQL</b></Link> .
            </p>
        </div>
    </div>  
  )
}

export default ResumeSectionCmd