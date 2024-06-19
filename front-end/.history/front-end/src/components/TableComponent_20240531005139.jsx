import React from 'react'
import Table from 'react-bootstrap/Table';

const TableComponent = ({columns, data}) => {
    return (
        <Table striped bordered hover variant="white">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index}>{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((col, colIndex) => (
                            <td key={colIndex}>{row[col.accessor]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
    )
}

export default TableComponent
