import React from 'react'
import PlayIcon from '../../asset/icons/PlayIcon'
import man from '../../asset/images/banner.png'

const Trending = () => {
    return (
        <div className='trending'>
            <h2 className='heading trending-heading text-start'>Trending</h2>
            <div className='trending-banner d-flex align-items-start'>
                <div className='trending-content text-start'>
                    <h3 className='trending-title'><span>UX Design</span> Process: Mental Modeling Framework.</h3>
                    <p className='trending-podcast'>Podcast Episode - 1</p>
                    <p className='trending-author'>Thomas L. Fletcher<span className='trending-author-position'>(Product Design at UIHUT)</span></p>
                    <button className='button button-primary'>
                        <PlayIcon />
                        <span>Play now</span>
                    </button>
                </div>
                <div className='trending-image'>
                    <img src={ man } alt='man'/>
                </div>
            </div>
        </div>
    )
}

export default Trending