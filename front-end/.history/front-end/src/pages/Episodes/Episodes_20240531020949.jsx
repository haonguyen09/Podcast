import React from 'react'
import CloudIcon from '../../asset/icons/CloudIcon'
import TableComponent from '../../components/TableComponent'

const Episodes = () => {

    const columns = [
        { header: '#', accessor: 'id' },
        { header: 'First Name', accessor: 'firstName' },
        { header: 'Last Name', accessor: 'lastName' },
        { header: 'Username', accessor: 'username' },
    ];
    
    const data = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
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
