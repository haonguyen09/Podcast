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

TableComponent.propTypes = {
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        header: PropTypes.string.isRequired,
        accessor: PropTypes.string.isRequired,
      })
    ).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    striped: PropTypes.bool,
    bordered: PropTypes.bool,
    hover: PropTypes.bool,
  };

export default TableComponent
