import React from 'react'
import Sidebar from '../../layout/Sidebar/Sidebar'

const HomePage = () => {
    return (
        <div>
            <div class="container-fluid text-center">
                <div class="row">
                    <div class="col-3">
                        <Sidebar/>
                    </div>
                    <div class="col">
                    2 of 3 (wider)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage