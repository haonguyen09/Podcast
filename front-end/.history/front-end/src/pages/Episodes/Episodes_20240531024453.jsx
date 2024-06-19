import React from 'react'
import CloudIcon from '../../asset/icons/CloudIcon'
import TableComponent from '../../components/TableComponent'
import img from '../../asset/images/podcast1.webp'
import EditIcon from '../../asset/icons/EditIcon'

const Episodes = () => {

    const columns = [
        { header: <input type="checkbox" className="style-primary" />, accessor: 'id' },
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
            Thumbnail: <img src={img} className="episodes-img" alt="Thumbnail" />,
            Name: (
            <>
                <h3 className="episodes-title">Change Your Brain: Neuroscientist Dr. Andrew Huberman</h3>
                <span className="episodes-sub">Rich Roll Podcast</span>
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
                <button className='button button--secondary'>
                    <CloudIcon />
                    <span>Upload New Episodes</span>
                </button>
            </div>
            <TableComponent columns={columns} data={ data } />
        </div>
    )
}

export default Episodes
