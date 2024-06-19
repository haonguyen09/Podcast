import React from 'react'
import Sidebar from '../../layout/Sidebar/Sidebar'
import Header from '../../layout/Header/Header'
import Popular from './Popular'

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
                            <div className='home-left grid g-col-6'>
                                <Popular/>

                            </div>
                            <div className='home-right grid g-col-4'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage