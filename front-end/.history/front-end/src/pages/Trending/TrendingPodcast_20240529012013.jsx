import React from 'react'
import Mic from '../../asset/images/ImageMic.png'
import PlayIcon from '../../asset/icons/PlayIcon'
import Slider from "react-slick";

const TrendingPodcast = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '19%',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '50%',
                    dots: false,
                    autoplay: true,
                }
            }
        ]
    };
    return (
        <div className='trendingP'>
            <div className='trendingP-header'>
                <h2 className='heading trendingP-heading text-start'>Trending Podcast</h2>
            </div>
            <div className='trendingP-main'>
                    <Slider {...settings}>
                        <div className='trendingP-item d-flex justify-content-center align-items-center'>
                            <div className='trendingP-info text-start'>
                                <h3>Don't Always Win | LifeSpring</h3>
                                <span className='trendingP-info-quantity'>Podcast Episode - 1</span>
                                <span className='trendingP-info-author'>Yahia Md Amin ( Chairman - LifeSpring Limited )</span>
                                <button className='button button--white'>
                                    <PlayIcon />
                                    <span>Play Now</span>
                                </button>
                            </div>
                            <div class="trendingP-img">
                                <img src={Mic} alt='mic' />
                            </div>
                        </div>
                        <div className='trendingP-item d-flex justify-content-center align-items-center'>
                            <div className='trendingP-info text-start'>
                                <h3>Don't Always Win | LifeSpring</h3>
                                <span className='trendingP-info-quantity'>Podcast Episode - 1</span>
                                <span className='trendingP-info-author'>Yahia Md Amin ( Chairman - LifeSpring Limited )</span>
                                <button className='button button--white'>
                                    <PlayIcon />
                                    <span>Play Now</span>
                                </button>
                            </div>
                            <div class="trendingP-img">
                                <img src={Mic} alt='mic' />
                            </div>
                        </div>
                        <div className='trendingP-item d-flex justify-content-center align-items-center'>
                            <div className='trendingP-info text-start'>
                                <h3>Don't Always Win | LifeSpring</h3>
                                <span className='trendingP-info-quantity'>Podcast Episode - 1</span>
                                <span className='trendingP-info-author'>Yahia Md Amin ( Chairman - LifeSpring Limited )</span>
                                <button className='button button--white'>
                                    <PlayIcon />
                                    <span>Play Now</span>
                                </button>
                            </div>
                            <div class="trendingP-img">
                                <img src={Mic} alt='mic' />
                            </div>
                        </div>

                    </Slider>
            </div>
        </div>
    )
}

export default TrendingPodcast