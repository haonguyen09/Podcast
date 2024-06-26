import React from 'react'
import img from '../../asset/images/podcast1.webp'

const SignUpStep4 = (props) => {

    const { currentStep } = props
  
    const { currentStep, handleStepChange  } = props
    
    const handleNext = () => {
        handleStepChange(currentStep + 1);
    };

    const handleBack = () => {
        handleStepChange(currentStep - 1);
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
                <button className='button button--primary signUp-s4-btn' onClick={handleNext}>Finish</button>
            </div>
        </div>
    )
}

export default SignUpStep4
