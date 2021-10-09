import { BottomNavigationAction, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom';
import './assets/Navbar.css'



const Navbar = () => {
    const [burgerMenu, setBurgerMenu] = useState(false)


    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="nav">
                        <div className="nav-left">
                            <span>Good</span><span className="fontBeauty">Food</span>
                            <span className="fontBeauty">Good</span><span >Mood</span>
                        </div>
                        <div className="nav-right">
                            <ul className="nav-list">
                                <Link to="/">
                                    <li className="nav-item">Главная</li>
                                </Link>
                                <Link to="/news">
                                    <li className="nav-item">Новости</li>
                                </Link>
                                <Link to="/places">
                                    <li className="nav-item">Заведения</li>
                                </Link>
                                <Link to="/sign-up">
                                    <li className="nav-item">Регистрация</li>
                                </Link>
                                <Link to="/sign-in">
                                    <li className="nav-item">Войти</li>
                                </Link>
                            </ul>
                            <div className="nav-btn">

                                {

                                    burgerMenu ? (
                                        true
                                    ) : (
                                        <button onClick={() => setBurgerMenu(!burgerMenu)}>
                                            <GiHamburgerMenu className="burger-icon" />
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                burgerMenu ? (
                    <div className="navbar-mobile">
                        <div className="container">
                            <div className="cancel-block">
                                <span onClick={() => setBurgerMenu(!burgerMenu)}>X</span>
                            </div>
                            <ul>
                                <Link to="/">
                                    <li className="nav-item">Главная</li>
                                </Link>
                                <Link to="/news">
                                    <li className="nav-item">Нововсти</li>
                                </Link>
                                {/* <li className="nav-item">Order</li> */}
                                <Link to="/places">
                                    <li className="nav-item">Заведения</li>
                                </Link>

                                <Link to='/contact'>
                                    <li className="nav-item">О нас</li>
                                </Link>
                                <Link to="/sign-up">
                                    <li className="nav-item">Регистрация</li>
                                </Link>
                                <Link to="/sign-in">
                                    <li className="nav-item"> Войти</li>

                                </Link>
                            </ul>

                        </div>
                    </div>

                ) : (
                    null
                )
            }
        </>
    );
};

export default Navbar;