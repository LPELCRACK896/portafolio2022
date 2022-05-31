//Dependencies
import React, { useState } from 'react'
import WebProjectItem from '../project_item/WebProjectItem.jsx'
//Style
import './my_web_projects_section_stlye.scss'
//Files
import HtmlLogo from '../../../storage/html-logo.png'
import ExpressLogo from '../../../storage/ExpressLogo.png'
import AWSLogo from '../../../storage/AWSLogo.png'
import BabelLogo from '../../../storage/BabelLogo.png'
import FireBaseLogo from  '../../../storage/FireBaseLogo.png'
import NpmLogo from  '../../../storage/NpmLogo.png'
import ReactLogo from '../../../storage/ReactLogo.png'
import SassLogo from '../../../storage/SassLogo.png'
import WebpackLogo from '../../../storage/WebpackLogo.png'
import CssLogo from '../../../storage/CssLogo.png'
import RiotLogo from '../../../storage/RiotLogo.jpg'
import JSCSSHTMLLogo from '../../../storage/JSCSSHTMLLogo.png'
import LibraryLogo from '../../../storage/LibraryLogo.png'
import { Link } from 'react-router-dom'

const cards_info = [
    {   
        name: 'Esqueleto biblioteca',
        image: HtmlLogo,
        color: '#F16529',
        details:{
            overview: 'En un sencillo sitio web, utilizo las etiquetas html para crear el esqueleto de una biblioteca vistual. Mismo proyecto cuenta con una historia (sin terminar, lamentablemtente) a la cual se puede acceder por diferente hipervinculos.',
            technologies: ['aws','html', 'nginx'],
            watchProject: {
                github: 'https://github.com/LPELCRACK896/html-only.git',
                url: 'http://ec2-52-20-181-247.compute-1.amazonaws.com:3008'
            }
        }
    },
    {   
        name: 'CSS art',
        image: CssLogo,
        color: '#006BC0',
        details:{
            overview: 'En este proyecto me dedique a replicar un logo utilizando únicamente etiquetas html y una hoja de cascada (css) (sin utiliar ninguna imagen ni nada por el estilo), para deformar todos los contendores a conveniencia, de acuerdo a la iamgen que se deseaba formar.  ',
            technologies: ['aws','css', 'html', 'nginx'],
            watchProject: {
                github: 'https://github.com/LPELCRACK896/css_only.git',
                url: 'http://ec2-52-20-181-247.compute-1.amazonaws.com:3009'
            }
        }
    },
    {   
        name: 'Biblioteca mejorada',
        image: LibraryLogo,
        color: '#191818',
        details:{
            overview: 'Basado en el proyecto del esqueleto de biblioteca. Se retomo el proyecto y se implemento css y JS para estilos y funcionalidad respectivamente. Para finalmente, transformar el proyecto a una estructura modular, que nos permitio obtener el mayor provecho posible de Webpack como el empaquetador del proyecto. ',
            technologies: ['js','css', 'html', 'webpack', 'babel', 'aws', 'nginx'],
            watchProject: {
                github: 'https://github.com/LPELCRACK896/lab07_babel.git',

                url: 'http://ec2-52-20-181-247.compute-1.amazonaws.com:3015/'
            }
        }
    },
    {   
        name: 'Riot Clone',
        image: RiotLogo,
        color: '#D80029',
        details:{
            overview: 'Desde 0, cree un clon del sitio web de riot games (https://www.riotgames.com/en"), utilizando ReactJS como framework y SASS para estilizar. Finalmente el sitio fue publicado en un publicado en una instancia EC2 de AWS.',

            technologies: [,'react', 'webpack', 'sass', 'npm', 'babel', 'html', 'aws', 'nginx'],
            watchProject: {
                github: 'https://github.com/LPELCRACK896/SIS_WEB_proyecto01.git',
                url: 'http://ec2-52-20-181-247.compute-1.amazonaws.com:3013/#/'
            }
        }
    },

]
const MyWebProjectsSection = ({limit}) => {
    const cards = cards_info.filter((element, index)=> (limit?(index<parseInt(limit)):true))
    return (
        <div className='my-web-projects-section-wrapper'>
            <div className='title-section-on-web-projects-section'>
                My web projects
            </div>
            <div className='content-in-my-web-projects-section'>
                {cards.map((element, index) =>{
                    let type=1;
                    if((index+1)%2 == 1) {type = 0}
                    return( <WebProjectItem card_info={element} type={type} key={index}/>)

                })}
                <Link to='/web-projects' style={{width: '100%'}}>
                    <div className='boton-ver-todos-en-web-projects-section '>
                            Ver todos
                    </div>
                </Link>

            </div>
    </div> 
    )
}

export default MyWebProjectsSection