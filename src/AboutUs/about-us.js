/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './about-us.css';

const AboutUs = props => {
    //const aboutusImage = (url: './images/chatpter_1.jpg');
    const leftcontain = [{title:'Chapter I', url:'./images/chapter_1.jpg'
                         },{title:'Chapter III' , url:'./images/chapter_3.jpg'}];
    const rightcontain = [
        {
            title: 'Chapter II',
            url: './images/chapter_2.jpg',
        },
        {
            title: 'Chapter IV',
            url: './images/chapter_4.jpg'
        }
    ]

  return (
    <div className="AboutusContainer">
        <div className="main-container">
            <h1 className="ExploreScreenHeading">About Us</h1>
            <h6 className="ExploreScreenTagLine">Allow us to tell you a short story...</h6>
        </div>
        <div className="main-container">
            <div className="ExploreImageWrap">
                <div className="AboutusImageLeft">
                {leftcontain.map((item)=>(
                    (
                        <div className="AboutusChapterImageBottom">
                            <img src={item.url} />
                            <div className="AboutImageBottomWrap">
                                <div className="ExplorBlurImage">
                                    <span>
                                        <h1>{item.title}</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                ))}
                </div>
                <div className="AboutusImageRight">
                    {rightcontain.map((item)=>(
                        (
                            <div className="AboutusChapterImageBottom">
                                <img src={item.url} />
                                <div className="AboutImageBottomWrap">
                                    <div className="ExplorBlurImage">
                                        <span>
                                            <h1>{item.title}</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>                
            </div>
        </div>
    </div>
  )
}

export default AboutUs;
