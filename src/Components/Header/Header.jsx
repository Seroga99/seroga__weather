import React from 'react';
import FormSearch from './FormSearch/FormSearch';
import MainInform from '../MainInform/MainInform';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__container'>
                <div className='logo__container'>
                    <a className='logo__link' href="">The Weather Factory</a>
                </div>
                <FormSearch/>
                    <p className='my_dream'>I want to get a job</p>
                <MainInform/>
            </div>
        </div>
    )
}


export default Header;