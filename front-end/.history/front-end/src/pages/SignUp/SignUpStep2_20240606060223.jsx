import { useEffect, useState } from 'react'
import Toggle from '../../components/Toggle'
import { getAllTopic } from '../../services/TopicService'
import { debounce } from "lodash";

const SignUpStep2 = (props) => {

    const { currentStep, handleStepChange } = props
    const [listTopics, setListTopics] = useState()
    const [search, setSearch] = useState()
    const [loading, setLoading] = useState(true)
    
    const fetchListTopic = async () => {
        setLoading(true)
        try {
            const response = await getAllTopic(4, 0)
            console.log('response', response)
            setListTopics(response.data)
        } catch (error) {
            console.error('Error fetching data: ', error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchListTopic()
    }, [props ,search])
    
    
    const handleNext = () => {
        handleStepChange(currentStep + 1);
    };

    const handleBack = () => {
        handleStepChange(currentStep - 1);
    }

    const debouncedFilterChange = debounce((newFilter) => {
        setSearch(newFilter);
    }, 10);

    const handleSearch = (e) => {
        debouncedFilterChange(e.target.value);
    }
    
    return (
        <div className='signUp-s2'>
            <input className='signUp-s2-search' placeholder='Search Topic' value={search} onChange={handleSearch} />
            <div className='signUp-s2-list d-grid'>
                {
                    loading ? (
                        <p>Loading...</p>
                    ) : listTopics.length > 0 ? (
                        listTopics.map((topic, index) => (
                            <div className='signUp-s2-item d-flex justify-content-between align-items-center' key={index}>
                                <div className='signUp-s2-info'>
                                    <div className="d-flex">
                                        <img src={`${process.env.REACT_APP_BACKEND}/uploads/${topic.icon}`} />
                                        <h4>{ topic.name }</h4>
                                    </div>
                                    <span>{`${topic.totalPodcast} Podcasts`}</span>
                                </div>
                                <Toggle/>
                            </div>
                        ))
                    ) : (
                        <p>No topics found</p>
                    )
                }
            </div>
            <div className='d-flex justify-content-between align-items-center width-full'>
                <button className='button button--secondary signUp-s2-btn' onClick={handleBack}>Back</button>
                <button className='button button--primary signUp-s2-btn' onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default SignUpStep2
