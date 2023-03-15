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
          <img src="./images/main_screen_bg.jpg" />
          <div className="MainContainerWrap">
            <div className="main-container">
                <NavBar />
                <BannerHeader /> 
                <HeaderQuickSearch />          
            </div>
            <BannerFooter />
          </div>
        </div>        
    </>    
  )
}

export default MainScreen

