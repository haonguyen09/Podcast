import React from 'react'
import Sidebar from '../../layout/Sidebar/Sidebar'
import Header from '../../layout/Header/Header'
import Popular from './Popular'
import Trending from './Trending'
import Feed from './Feed'

const HomePage = () => {
    return (
        <div>
            <div class="container-fluid text-center">
                <div class="row">
                    <div class="col-3">
                        <Sidebar/>
                    </div>
                    <div class="col">
                        <Header />
                        <div className='main-container'>
                            <div className="home-wrapper d-grid">
                                <div className='home-left'>
                                    <Popular />
                                    <Trending />
                                    <Feed/>
                                </div>
                                <div className='home-right'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage