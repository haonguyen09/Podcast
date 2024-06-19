import React from 'react'
import CheckBoxCustom from '../../components/CheckBoxCustom';
import img from '../../asset/images/podcast1.webp'
import TableComponent from '../../components/TableComponent';

const SubcribersPage = () => {
    const columns = [
        { header: <CheckBoxCustom/>, accessor: 'id' },
        { header: 'Name', accessor: 'Name' },
        { header: 'Email', accessor: 'Email' },
        { header: 'Badge', accessor: 'Badge' },
        { header: 'Karma', accessor: 'Karma' },
        { header: 'Action', accessor: 'Action' },
        ];

        const data = [
        {
            id: <input type="checkbox" />,
            Name: (
            <>
                <img className="subscribers-img" src={img} alt='img' />
                <h3 className="subscribers-title text-start">Rich Roll Podcast</h3>
            </>
            ),
            Email: 'haonguyen09450@gmail.com',
            Badge: <button className='button button--pink'>Producer</button>,
            Karma: '23',
            Action: <button className="button button--orangebg">Follow</button>,
        },
        ];

    return (
        <div className='subscribers'>
            <div className='subscribers-header d-flex justify-content-between align-items-center'>
                <h2 className='heading subscribers-heading text-start'>subscribers</h2>
            </div>
            <TableComponent columns={columns} data={ data } />
        </div>
    )
}

export default SubcribersPage
