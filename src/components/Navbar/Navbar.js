import { BottomNavigationAction, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
// import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
// import logo from '../../images/flaticon_cake.svg'
// import burger from '../../images/burger.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom';
import './assets/Navbar.css'
// import FavoriteIcon from '@material-ui/icons/Favorite';


const Navbar = () => {
    const [burgerMenu, setBurgerMenu] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    // localStorage.getItem('isAuth')
    // localsograge get 'isauth'


    // auth ? <logout avatar> : registr

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    // const isMenuOpen = Boolean(anchorEl);
    // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // const handleProfileMenuOpen = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleMobileMenuClose = () => {
    //     setMobileMoreAnchorEl(null);
    // };

    // const handleMenuClose = () => {
    //     setAnchorEl(null);
    //     handleMobileMenuClose();
    // };

    // const handleMobileMenuOpen = (event) => {
    //     setMobileMoreAnchorEl(event.currentTarget);
    // };
    // const menuId = 'primary-search-account-menu';
    // const renderMenu = (
    //     <Menu
    //         anchorEl={anchorEl}
    //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //         id={menuId}
    //         keepMounted
    //         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //         open={isMenuOpen}
    //         onClose={handleMenuClose}
    //     >
    //         <Link to="/sign-in">
    //             <MenuItem>Войти</MenuItem>
    //         </Link>
    //         <Link to="/sign-up">
    //             <MenuItem>Регистрация</MenuItem>
    //         </Link>
    //     </Menu>
    // );

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
                                {/* <li className="nav-item">Order</li> */}
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
                                            {/* <img src={} alt="burger menu" /> */}
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