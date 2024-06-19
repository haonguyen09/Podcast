import React, { useEffect } from 'react'
import Toggle from '../../components/Toggle'
import { getObjectFromLocalStorage } from '../../utils/handleLocalStorage'

const SignUpStep2 = (props) => {

    const { currentStep, handleStepChange } = props
    
    useEffect(() => {
        const data = getObjectFromLocalStorage('signUpData');
        // setEmail(data.email)
        // setFirstName(data.firstName)
        // setLastName(data.lastName)
      }, [])
      
    
    const handleNext = () => {
        handleStepChange(currentStep + 1);
    };

    const handleBack = () => {
        handleStepChange(currentStep - 1);
    }
    
    return (
        <div className='signUp-s2'>
            <input className='signUp-s2-search' placeholder='Search Topic' />
            <div className='signUp-s2-list d-grid'>
                <div className='signUp-s2-item d-flex justify-content-between align-items-center'>
                    <div className='signUp-s2-info'>
                        <h4>Arts</h4>
                        <span>563.9k Podcasts</span>
                    </div>
                    <Toggle/>
                </div>
                <div className='signUp-s2-item d-flex justify-content-between align-items-center'>
                    <div className='signUp-s2-info'>
                        <h4>👫 Society & Culture</h4>
                        <span>563.9k Podcasts</span>
                    </div>
                    <Toggle/>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center width-full'>
                <button className='button button--secondary signUp-s2-btn' onClick={handleBack}>Back</button>
                <button className='button button--primary signUp-s2-btn' onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default SignUpStep2
