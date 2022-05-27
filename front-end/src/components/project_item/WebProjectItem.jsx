import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './web-project-item-style.scss'
import ReactCardFlip from 'react-card-flip';
import HtmlLogo from '../../../storage/html-logo.png'
import ExpressLogo from '../../../storage/ExpressLogo.png'
import AWSLogo from '../../../storage/AWSLogo.png'
import BabelLogo from '../../../storage/BabelLogo.png'
import FireBaseLogo from  '../../../storage/FireBaseLogo.png'
import NpmLogo from  '../../../storage/NpmLogo.png'
import ReactLogo from '../../../storage/ReactLogo.png'
import SassLogo from '../../../storage/SassLogo.png'
import WebpackLogo from '../../../storage/WebpackLogo.png'
import WWWLogo from '../../../storage/WWWLogo.png'
import GithubLogo from '../../../storage/GithubLogo.png'
import CssLogo from '../../../storage/CssLogo.png'
import JavascriptLogo from '../../../storage/JavascriptLogo.png'
import NginxLogo from '../../../storage/NginxLogo.png'
import {FaChevronLeft} from 'react-icons/fa'

const platforms = new Map([
  ['github', GithubLogo],
  ['url', WWWLogo]
])
const technologies = new Map([
  ['html', HtmlLogo],
  ['express', ExpressLogo],
  ['aws', AWSLogo],
  ['babel', BabelLogo],
  ['firebase', FireBaseLogo],
  ['npm', NpmLogo],
  ['react', ReactLogo],
  ['sass', SassLogo],
  ['webpack', WebpackLogo],
  ['css',CssLogo ],
  ['js', JavascriptLogo],
  ['nginx', NginxLogo]
])
const WebProjectItem = (props) => {
  const [isFliped, setIsFliped]=useState(false);
  const { card_info } = props
  const { type } = props
  return (
    <ReactCardFlip isFlipped = {isFliped} className='web-project-item-card'  >
      {/* Parte de adelante  */}
      <div className='web-project-item-card front-card-web-project-item' style={{ backgroundColor: `${card_info.color}`  }}  onClick={()=> setIsFliped(!isFliped)}>
          <img src={card_info.image} alt="tec" style={{height: '40%', order: type===0?0:1}} className="selectable-logo-on-back-card"></img>
          <div className='title-into-card-item-web-project' style={{color: `${card_info.color}`,  order:type===0?1:0}}>{card_info.name}</div>
      </div>
      {/* PARTE DE ATRAS */}
      <div className='web-project-item-card' style={{border: `2px solid ${card_info.color}`,}}>
        <FaChevronLeft onClick={()=> setIsFliped(!isFliped)} style={{fontSize: "30px", color:"#0E0C1D", cursor: 'pointer', position:"absolute", top: "0px", left: "0px"}}/>
        <div className='card-back-header-web-project'>
          <h4 className='overview-into-back-part-card-web'>Resumen</h4>
        </div>
        <div className='back-part-overview-space'>
          {card_info.details.overview}
        </div>
        <h4 className='other-titles-into-back-part-card-web'>Tecnologías utiliizadas</h4>
        <div className='tech-logos'>
          {card_info.details.technologies.map(tech => <Link to={`/programm-languages/${tech}`}><img src={technologies.get(tech)} alt="tec" style={{height: '100%'}} className="selectable-logo-on-back-card"></img></Link>)}
        </div>
        <h4 className='other-titles-into-back-part-card-web'>Ver proyecto</h4>
        <div className='tech-logos'>
          {Object.keys(card_info.details.watchProject).map(platform => <a target="_blank" href={card_info.details.watchProject[platform]}> <img src={platforms.get(platform)} alt="tec" style={{height: '100%'}} className="selectable-logo-on-back-card"></img></a>

            )}
        </div>
      </div>
    </ReactCardFlip>
  )
}

export default WebProjectItem