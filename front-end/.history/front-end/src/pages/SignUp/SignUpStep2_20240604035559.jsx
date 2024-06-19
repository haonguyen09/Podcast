import React from 'react'
import Toggle from '../../components/Toggle'

const SignUpStep2 = (props) => {

    const { currentStep } = props
  
  const handleNext = () => {
    currentStep+=1
    }
    
    return (
        <div className='signUp-s2'>
            <div className='signUp-s2-list'>
                <div className='signUp-s2-item đ-flex justify-content-around align-items-center'>
                    <div>
                        <h4>Arts</h4>
                        <span>563.9k Podcasts</span>
                    </div>
                    <Toggle/>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <button className='button button--secondary'>Back</button>
                    <button className='button button--primary'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default SignUpStep2
