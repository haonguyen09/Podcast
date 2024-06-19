import React from 'react'
import Sidebar from '../../layout/Sidebar/Sidebar'
import Header from '../../layout/Header/Header'

const HomePage = () => {
    return (
        <div>
            <div class="container-fluid text-center">
                <div class="row">
                    <div class="col-3">
                        <Sidebar/>
                    </div>
                    <div class="col">
                        <Header/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage