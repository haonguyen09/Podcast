import React, { useEffect, useState } from 'react'
import img from '../../asset/images/podcast1.webp'
import { useNavigate } from 'react-router-dom'
import { getAllUser, updateUser } from '../../services/UserService'
import { debounce } from 'lodash'

const SignUpStep4 = (props) => {
    
    const { currentStep, handleStepChange } = props
    const navigate = useNavigate()
    const [listUser, setListUser] = useState([]); 
    const [search, setSearch] = useState(''); 
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true)
    const [followedUsers, setFollowedUsers] = useState(new Set());

    const data = getObjectFromLocalStorage('signUpData')
    useEffect(() => {
        const fetchListUser = async () => {
            setLoading(true)
            try {
                const response = await getAllUser(4, currentPage - 1, search)
                console.log("response", response)
                setListUser(response.data)
            } catch (error) {
                console.error('Error fetching data: ', error);
            } finally {
                setLoading(false)
            }
        }

        fetchListUser()
    }, [search])

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

    const handleFinish = async() => {
        navigate('/sign-in');
        const formData = {
            topics: data.topics,
            featuresPodcast: data.featuredPodcast,
        }
        await updateUser(data.id, formData)
    }

    const handleFollow = (userId) => {
        setFollowedUsers((prevFollowedUsers) => {
            const newFollowedUsers = new Set(prevFollowedUsers);
            if (newFollowedUsers.has(userId)) {
                newFollowedUsers.delete(userId);
            } else {
                newFollowedUsers.add(userId);
            }
            console.log("newFollowedUsers", newFollowedUsers)
            return newFollowedUsers;
        });
    };

    return (
        <div className='signUp-s4'>
            <input className='signUp-s4-search' placeholder='Search people' onChange={handleSearch} />
            <div className='signUp-s4-list d-grid'>
                {
                    loading ? (
                        <p>Loading...</p>
                    ) : listUser.map((user, index) => (
                        <div className='signUp-s4-item d-flex align-items-center justify-content-between' key={index}>
                            <div className="signUp-s4-author d-flex align-items-center">
                                <img src={`${process.env.REACT_APP_BACKEND}/uploads/${user.avatar}`} alt='img' />
                                <div class="signUp-s4-info">
                                    <h5>{`${user.firstName} ${user.lastName}`}</h5>
                                    <span style={{textTransform: "lowercase"}}>{`@${user.firstName}${user.lastName}`}</span>
                                </div>
                            </div>
                            <button 
                                className={`button ${followedUsers.has(user._id) ? "" : "button--primary"}`} 
                                onClick={() => handleFollow(user._id)}
                            >
                                {followedUsers.has(user._id) ? "Followed" : "Follow"}
                            </button>
                        </div>
                    )) 
                }
                
            </div>
            <div className='d-flex justify-content-between align-items-center width-full'>
                <button className='button button--secondary signUp-s4-btn' onClick={handleBack}>Back</button>
                <button className='button button--primary signUp-s4-btn' onClick={handleFinish}>Finish</button>
            </div>
        </div>
    )
}

export default SignUpStep4
