import React, { useEffect, useState } from 'react'
import CloudIcon from '../../asset/icons/CloudIcon'
import TableComponent from '../../components/TableComponent'
import img from '../../asset/images/podcast1.webp'
import EditIcon from '../../asset/icons/EditIcon'
import CheckBoxCustom from '../../components/CheckBoxCustom'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { getAllPodcast } from '../../services/PodcastService'

const Episodes = () => {

    const user = useSelector(state => state.user)
    const token = user?.access_token

    const [listPodcast, setListPodcast] = useState([])
    const [limit, setLimit] = useState(7)
    const [currentPage, setCurrentPage] = useState(1)



    useEffect(() => {
        const fetchListPodcast = async () => {
            if (token) {
                try {
                    const decoded = jwtDecode(token)
                    const response = await getAllPodcast(limit, currentPage-1, "userId", decoded?.id)
                    // console.log("response", response)

                    setListPodcast(response.data)
                    
                } catch (error) {
                    console.error(error)
                }
            }
        }

        fetchListPodcast()
    }, [token, limit])

    const columns = [
        { header: <CheckBoxCustom/>, accessor: 'id' },
        { header: 'Thumbnail', accessor: 'Thumbnail' },
        { header: 'Name', accessor: 'Name' },
        { header: 'Duration', accessor: 'Duration' },
        { header: 'Audio Status', accessor: 'AudioStatus' },
        { header: 'Publish Date', accessor: 'PublishDate' },
        { header: 'Status', accessor: 'Status' },
        { header: 'Action', accessor: 'Action' },
        ];

        const data = [
            {
                id: <input type="checkbox" />,
                Thumbnail: <img src={img} className="episodes-img d-flex" alt="Thumbnail" />,
                Name: (
                <>
                    <h3 className="episodes-title text-start">Change Your Brain: Neuroscientist Dr. Andrew Huberman</h3>
                    <span className="episodes-sub text-start d-block">Rich Roll Podcast</span>
                </>
                ),
                Duration: '02:10:25',
                AudioStatus: 'Done',
                PublishDate: 'July 3, 2022 2:24',
                Status: <button className="button button--secondary">Published</button>,
                Action: <EditIcon />,
            },
        ];

    return (
        <div className='episodes'>
            <div className='episodes-header d-flex justify-content-between align-items-center'>
                <h2 className='heading episodes-heading text-start'>Episodes</h2>
                <button className='button button--secondary button-episodes'>
                    <CloudIcon />
                    <span>Upload New Episodes</span>
                </button>
            </div>
            <TableComponent columns={columns} data={ data } />
        </div>
    )
}

export default Episodes
