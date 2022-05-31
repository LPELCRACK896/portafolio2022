import React, {useState} from 'react'
import './style_navigation_bar.scss'
import { FaQuestion, FaArrowDown} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const langContent = require('./NavigationBarContent')
const NavigationBar = (props) => {
    const [language, setLanguage] = useState(props.language?props.language:"spanish");
    const [content, setContent] = useState(langContent.get(language)?langContent.get(language):langContent.get("english"));
    const [isDisplayingExtraOptions, setIsDisplayingExtraOptions] = useState(false);
    const [selected, setSelected] = useState("main")
    const navBarItems = []
    const directions = []
    content.forEach((value, key)=>{ 
        if(key!=='languaje-tag') {
            navBarItems.push(value)
            directions.push(key)
        } })
    return (
        <div className={isDisplayingExtraOptions?'navigation-bar-main-wrapper-show-all-options':'navigation-bar-main-wrapper-no-show-all-options'}>
            <FaQuestion className={isDisplayingExtraOptions?'question-mark-on-nav-bar-all-options':'question-mark-on-nav-bar-no-all-options'}/>
            <header className='name-on-nav-bar'>
                <Link to="/" className='item-on-navigation'  
                    onClick={()=> { 
                        setSelected("main")
                        setIsDisplayingExtraOptions(false)
                    }}>Luis Pedro Gonzalez Aldana
                </Link>
                <nav className={isDisplayingExtraOptions?'navigation-options-show':'navigation-options-no-show'}> 
                    <ul className='ul-options-on-nav'>
                        {navBarItems.map((item, index) => 
                        <li key={index}className='item-on-navigation' 
                            onClick={()=> { 
                                setSelected(item)
                                setIsDisplayingExtraOptions(false)
                            }}>
                            <Link to={`/${directions[index]}`} className={item===selected?"item-selected-nav-bar":"none-selected-item-on-nav-bar"}>{item}</Link>
                        </li>)}
                    </ul>
                </nav>
                <div className='container-arrow-down-on-nav-bar' onClick={() =>setIsDisplayingExtraOptions(!isDisplayingExtraOptions)}>
                    <FaArrowDown className={isDisplayingExtraOptions?'arrow-up-on-nav-bar':'arrow-down-on-nav-bar'}/>
                </div>
            </header>
            <div className='language-on-nav-bar'>
                <div className='logo-container-on-nav-bar'>
                    <div className={ `logo-language-${language}-on-nav-bar`}/>
                </div>
                {content.get("languaje-tag")}
            </div>

        </div>
    )
}

export default NavigationBar