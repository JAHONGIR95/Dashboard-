import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productData } from '../../chartData.js'
import { Link } from 'react-router-dom'
import './productList.scss'

function ProductList() {
    const [data, setData] = useState(productData)

    const handleDelete = (id) => {
        setData( data.filter( item => item.id !== id ))
    }

    const columns = [
        { 
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
          field: 'product',
          headerName: 'Product',
          renderCell: (params) => (
            <div className="cell-info">
                <img src={params.row.img} alt="" className="cell-info-img" />
                {params.row.name}
            </div>
          ),
          width: 200,
          editable: true,
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 200,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
          editable: true,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => (
                <>
                    <Link to={'/product/' + params.row.id}>
                        <button className="action-edit">Edit</button>
                    </Link>
                    <DeleteOutline className="action-delete" onClick={() => handleDelete(params.row.id)} />
                </>
            )
        },
    ];

    return (
        <div className="product-list">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default ProductList
