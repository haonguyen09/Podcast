import React, { useEffect, useState } from 'react'
import img from '../../asset/images/podcast1.webp'
import { useNavigate } from 'react-router-dom'
import { getAllUser } from '../../services/UserService'
import { debounce } from 'lodash'

const SignUpStep4 = (props) => {
    
    const { currentStep, handleStepChange } = props
    const navigate = useNavigate()
    const [listUser, setListUser] = useState([]); 
    const [search, setSearch] = useState(''); 
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchListUser = async () => {
            setLoading(true)
            try {
                const response = await getAllUser(4, currentPage-1, search)
                setListTopics(response.data)
            } catch (error) {
                console.error('Error fetching data: ', error);
            } finally {
                setLoading(false)
            }
        }

        

        fetchListUser()
    }, [])

    const debouncedFilterChange = debounce((newFilter) => {
        setSearch(newFilter);
        setCurrentPage(1)
    }, 10);

    const handleSearch = (e) => {
        debouncedFilterChange(e.target.value);
    }
    
    const handleBack = () => {
        handleStepChange(currentStep - 1);
    };

    const handleFinish = () => {
        navigate('/sign-up');
    }

    return (
        <div className='signUp-s4'>
            <input className='signUp-s4-search' placeholder='Search people' onChange={handleSearch} />
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
