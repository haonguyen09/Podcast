import React, { useEffect, useState } from 'react'
import img from '../../asset/images/podcast1.webp'
import { useNavigate } from 'react-router-dom'
import { getAllUser } from '../../services/UserService'

const SignUpStep4 = (props) => {
    
    const { currentStep, handleStepChange } = props
    const navigate = useNavigate()
    const [listUser, setListUser] = useState([]); 
    const [search, setsearch] = useState([]); 

    useEffect(() => {
        const fetchListUser = async () => {
            const response = await getAllUser(4, 0, search);
            console.log("response", response)
        }

        fetchListUser()
    }, [])
    
    const handleBack = () => {
        handleStepChange(currentStep - 1);
    };

    const handleFinish = () => {
        navigate('/sign-up');
    }

    return (
        <div className='signUp-s4'>
            <input className='signUp-s4-search' placeholder='Search people' />
            <div className='signUp-s4-list d-grid'>
                <div className='signUp-s4-item d-flex align-items-center justify-content-between'>
                    <div className="signUp-s4-author d-flex align-items-center">
                        <img src={img} alt='img' />
                        <div class="signUp-s4-info">
                            <h5>Cody Fisher</h5>
                            <span>@codyfisher</span>
                        </div>
                    </div>
                    <button className='button button--primary'>Follow</button>
                </div>
                <div className='signUp-s4-item d-flex align-items-center justify-content-between'>
                    <div className="signUp-s4-author d-flex align-items-center">
                        <img src={img} alt='img' />
                        <div class="signUp-s4-info">
                            <h5>Cody Fisher</h5>
                            <span>@codyfisher</span>
                        </div>
                    </div>
                    <button className='button button--primary'>Follow</button>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center width-full'>
                <button className='button button--secondary signUp-s4-btn' onClick={handleBack}>Back</button>
                <button className='button button--primary signUp-s4-btn' onClick={handleFinish}>Finish</button>
            </div>
        </div>
    )
}

export default SignUpStep4
