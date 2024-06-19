import React from 'react'
import CheckBoxCustom from '../../components/CheckBoxCustom';
import img from '../../asset/images/podcast1.webp'

const SubcribersPage = () => {
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
        <div className='subscribers'>
            <div className='subscribers-header d-flex justify-content-between align-items-center'>
                <h2 className='heading subscribers-heading text-start'>subscribers</h2>
                <button className='button button--secondary button-subscribers'>
                    <CloudIcon />
                    <span>Upload New subscribers</span>
                </button>
            </div>
            <TableComponent columns={columns} data={ data } />
        </div>
    )
}

export default SubcribersPage
