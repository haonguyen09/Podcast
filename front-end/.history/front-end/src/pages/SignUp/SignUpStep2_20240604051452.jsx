import React from 'react'
import Toggle from '../../components/Toggle'

const SignUpStep2 = (props) => {

    const { currentStep } = props
  
    const handleNext = () => {
        currentStep+=1
    }

    const handleBack = () => {
        currentStep-=1
    }
    
    return (
        <div className='signUp-s2'>
            <input className='signUp-s2-search' placeholder='Search Topic' />
            <div className='signUp-s2-list'>
                <div className='signUp-s2-item d-flex justify-content-around align-items-center'>
                    <div className='signUp-s2-info'>
                        <h4>Arts</h4>
                        <span>563.9k Podcasts</span>
                    </div>
                    <Toggle/>
                </div>
                <div className='d-flex justify-content-between align-items-center width-full'>
                    <button className='button button--secondary' onClick={handleBack}>Back</button>
                    <button className='button button--primary' onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default SignUpStep2
