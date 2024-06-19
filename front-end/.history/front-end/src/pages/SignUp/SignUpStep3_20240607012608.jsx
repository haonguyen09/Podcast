import React, { useEffect } from 'react'
import PlusIcon from '../../asset/icons/PlusIcon'
import img from '../../asset/images/podcast1.webp'

const SignUpStep3 = (props) => {

    const { currentStep, handleStepChange  } = props

    useEffect(() => {
        
    }, [])
    
    const handleNext = () => {
        handleStepChange(currentStep + 1);
    };

    const handleBack = () => {
        handleStepChange(currentStep - 1);
    }


    return (
        <div className='signUp-s3'>
            <input className='signUp-s3-search' placeholder='Search Podcast' />
            <div className='signUp-s3-list d-grid'>
                <div className='signUp-s3-item'>
                    <img src={img} alt='img' />
                    <PlusIcon className='signUp-s3-item-plus'/>
                </div>
                <div className='signUp-s3-item'>
                    <img src={img} alt='img' />
                    <PlusIcon className='signUp-s3-item-plus'/>
                </div>
                <div className='signUp-s3-item'>
                    <img src={img} alt='img' />
                    <PlusIcon className='signUp-s3-item-plus'/>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center width-full'>
                <button className='button button--secondary signUp-s3-btn' onClick={handleBack}>Back</button>
                <button className='button button--primary signUp-s3-btn' onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default SignUpStep3
