import React from 'react';
import { useNavigate } from 'react-router-dom'


const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
    const navigate = useNavigate();

    return (

        <nav className={`menu-container ${navbarOpen ? "expanded" : ""}`}>
            <ul className='menu-list'>
                <li className='nav-li'>
                    <a href="/" className='nav-link' onClick={() => setNavbarOpen(false)}>HOME</a>
                    {/* Navegação para a página "Portifolio*/}
                    <b href="/portfolio-page" className='nav-link' onClick={() => navigate('/portfolio-page')}>PORTFOLIO</b>

                    {/* Navegação para a página "Journal"*/}
                    <a className='nav-link' onClick={() => navigate('/about')}>ABOUT</a>

                    {/* Navegação para a página "ContactPage"*/}
                    <a className='nav-link' onClick={() => navigate('/contact-page')}>CONTACT</a>
                </li>
            </ul>
        </nav>
    );
}

export default MenuOverlay;
