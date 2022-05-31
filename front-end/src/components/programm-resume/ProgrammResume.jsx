//Dependencies
import React from 'react'
import {useParams, useLocation} from "react-router-dom";
//Style
import './programm_resume_style.scss'
const admmitedLanguages = [
    'html', 
    'reactjs',
    'nodejs',
    'webpack',
    'javascript',
    'css',
    'python', 
    'java', 
    'postgresql'
]
const ProgrammResume = () => {
    const { name } = useParams()

    return (
        <div>{name}</div>
    )
}

export default ProgrammResume