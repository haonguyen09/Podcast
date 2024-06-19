import React from 'react'

const SignUpStep4 = (props) => {

    const { currentStep } = props
  
    const handleNext = () => {
        currentStep+=1
    }

    const handleBack = () => {
        currentStep-=1
    }

    return (
        <div className='signUp-s4'>
            <input className='signUp-s4-search' placeholder='Search Podcast' />
            <div className='signUp-s4-list d-grid'>
                <div className='signUp-s4-item'>
                    <img src={img} alt='img' />
                    <PlusIcon className='signUp-s4-item-plus'/>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center width-full'>
                <button className='button button--secondary signUp-s4-btn' onClick={handleBack}>Back</button>
                <button className='button button--primary signUp-s4-btn' onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default SignUpStep4
