import React from 'react'
import CloudIcon from '../../asset/icons/CloudIcon'
import TableComponent from '../../components/TableComponent'
import img from '../../asset/images/podcast1.webp'

const Episodes = () => {

    const columns = [
        { header: `<input type='checkbox' className='style-primary'/>`, accessor: 'id' },
        { header: 'Thumbnail', accessor: 'Thumbnail' },
        { header: 'Name', accessor: 'Name' },
        { header: 'Duration', accessor: 'Duration' },
        { header: 'Audio Status', accessor: 'username' },
        { header: 'Publish Date', accessor: 'username' },
        { header: 'Status', accessor: 'username' },
        { header: 'Action', accessor: 'username' },
    ];
    
    const data = [
        {
            id: `<input type='checkbox'/>`,
            Thumbnail: `<img src=${img} className='episodes-img'/>`,
            Name: `
                    <h3 className='episodes-title'>Change Your Brain: Neuroscientist Dr. Andrew Huberman</h3>
                    <span className='episodes-sub'>Rich Roll Podcast</span>
                    `,
            Duration: '02:10:25',

        },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
    { id: 3, firstName: 'Larry', lastName: 'Bird', username: '@twitter' },
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
