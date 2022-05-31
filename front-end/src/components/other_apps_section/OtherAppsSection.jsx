import React from 'react'
import './other-apps-section.scss'

//Files
import PythonLogo from '../../../storage/PythonLogo.png'
import JavalLogo from '../../../storage/JavaLogo.png'

import { Link } from 'react-router-dom'
import OtherProjectItem from '../other-project-item/OtherProjectItem.jsx'

const cards_info = [
    {   
        name: 'Simulaor de rayos catódicos',
        image: PythonLogo,
        color: '#DAB462',
        details:{
            overview: 'Un proyecto con aplicación en física que simula la posición de un rayo catódico de acuerdo al cambio en las cargas de las placas horizontales y verticales. El voltaje se puede establecer para valores especificos o cambiantes segun el modo sinusoidal, estableciendo una velocidad angular para cada una de las placas. ',
            technologies: ['python'],
            watchProject: {
                github: 'https://github.com/LPELCRACK896/Simulacion_TRC.git',
            }
        }
    },
    {   
        name: 'Juego TBS en Java utilizando POO',
        image: JavalLogo,
        color: '#35571A',
        details:{
            overview: 'Este proyecto se un juego tbs parodia, con jugabilidad únicamente en consola. El juego permite la seleccion de una serie de heroes con habilidades unicas, de los cuales debemos elegir 1 para enfrentar a una serie de enemigos y monstruso que se interponen en el camino. ',
            technologies: ['java'],
            watchProject: {
                github: 'https://github.com/LPELCRACK896/tbs-game-java-poo.git',
            }
        }
    },

]
const OtherAppsSection = ({limit}) => {
    const cards = cards_info.filter((element, index)=> (limit?(index<parseInt(limit)):true))
    return (
        <div className='other-projects-section-wrapper'>
            <div className='title-section-on-other-projects-section'>
                Otras aplicaciones        
            </div>
            <div className='content-in-my-other-projects-section'>
                    {cards.map((element, index) =>{
                        let type=1;
                        if((index+1)%2 == 1) {type = 0}
                        return( <OtherProjectItem card_info={element} type={type}/>)

                    })}
                    <Link to='/other-projects' style={{width: '100%'}}>
                        <div className='boton-ver-todos-en-web-projects-section '>
                                Ver todos
                        </div>
                    </Link>

                </div>
        </div>
    )
}

export default OtherAppsSection