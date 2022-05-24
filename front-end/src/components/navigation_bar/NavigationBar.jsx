import React, {useState} from 'react'
import './style_navigation_bar.scss'
import { FaQuestion, FaArrowDown} from 'react-icons/fa'
const langContent = require('./NavigationBarContent')
const NavigationBar = (props) => {
    const [language, setLanguage] = useState(props.language?props.language:"spanish");
    const  [content, setContent] = useState(langContent.get(language)?langContent.get(language):"english");
    /* 
    content.get(language).get("programm-languages-and-tec-item")
    */
    return (
        <div className='navigation-bar-main-wrapper'>
            <FaQuestion className='question-mark-on-nav-bar'/>
            <div className='name-on-nav-bar'>
                Luis Pedro Gonzalez Aldana
                <div className='container-arrow-down-on-nav-bar'>
                    <FaArrowDown className='arrow-down-on-nav-bar'/>
                </div>
            </div>
            <div className='language-on-nav-bar'>
                <div className='logo-container-on-nav-bar'>
                    <div className={ `logo-language-${language}-on-nav-bar`}></div>

                </div>
                {content.get("languaje-tag")}
            </div>

        </div>
    )
}

export default NavigationBar