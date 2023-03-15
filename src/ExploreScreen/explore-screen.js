/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './explore-screen.css';

const ExploreScreen = () => {
    const exploreData = [
        {
            title: 'Room with one king-size bed',
            url: './images/explore_room.jpg',
            amt: '35$',
            size: '28м²'
        },
        {
            title: 'Penthouse for 8 person',
            url: './images/explore_penthouse.jpg',
            amt: '2039$',
            size: '438м²'
        }
    ]
  return (
    <div className="ExploreContainer">
        <div className="main-container">
            <h1 className="ExploreScreenHeading">Explore</h1>
            <h6 className="ExploreScreenTagLine">From one-guest rooms to penthouses with pools and gardens</h6>
        </div>
        <div className="main-container">
            <div className="ExploreImageWrap">
                {exploreData.map((item)=>(
                        (
                            <div className="ExploreImage">
                                <img src={item.url} />
                                <div className="ExploreImageBottomWrap">
                                    <div className="ExplorBlurImage">
                                        <span>
                                            <div>{item.title}</div>
                                            <span className="BtnBg ExpolreSmallBtn">{item.amt}</span>
                                            <span className="BtnBg ExpolreSmallBtn">{item.size}</span>
                                        </span>
                                        <span>
                                            <button className="BtnBg ExploreBtn">Book!</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                {/* <div className="ExploreImage">
                    <img src="./images/explore_room.jpg" />
                    <div className="ExploreImageBottomWrap">
                        <div className="ExplorBlurImage">
                            <span>
                                <div>Room with one king-size bed</div>
                                <span className="BtnBg ExpolreSmallBtn">35$</span>
                                <span className="BtnBg ExpolreSmallBtn">28м²</span>
                            </span>
                            <span>
                                <button className="BtnBg ExploreBtn">Book!</button>
                            </span>
                        </div>
                    </div>
                </div> */}
                {/* <div className="ExploreImage">
                    <img src="./images/explore_penthouse.jpg" />
                    <div className="ExploreImageBottomWrap">
                        <div className="ExplorBlurImage">
                            <span>
                                <div>Penthouse for 8 person</div>
                                <span className="BtnBg ExpolreSmallBtn">2039$</span>
                                <span className="BtnBg ExpolreSmallBtn">438м²</span>
                            </span>
                            <span>
                                <button className="BtnBg ExploreBtn">Book!</button>
                            </span>
                        </div>
                    </div>
                </div>                 */}
            </div>
        </div>
    </div>
  )
}

export default ExploreScreen
