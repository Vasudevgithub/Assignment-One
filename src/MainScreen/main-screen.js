/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import NavBar from './TopNavBar/nav-bar';
import BannerHeader from './BannerHeader/banner-header';
import BannerFooter from './BannerFooter/banner-footer';
import HeaderQuickSearch from './HeaderQuickSearch/header-quick-search';
import './main-screen.css'

const MainScreen = props => {
    console.log(props.name);
  return (
    <>
        <div className="container-bg">
          <img src="./images/main_screen_bg.jpg" className="HideMobile" />
          <img src='./images/main_screen_bg_mob.jpg' className="HideDesktop" />
          <div className="MainScreenTransparent"></div>
          <div className="MainContainerWrap">
            <div className="main-container">
                <NavBar />
                <BannerHeader /> 
                <HeaderQuickSearch />          
            </div>            
          </div>
          <BannerFooter />
        </div>        
    </>    
  )
}

export default MainScreen

