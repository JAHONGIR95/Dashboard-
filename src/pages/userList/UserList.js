import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import './userList.scss'
import { tableData } from '../../chartData.js'
import { Link } from 'react-router-dom'


function UserList() {
    const [data, setData] = useState(tableData)

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
          field: 'user',
          headerName: 'User',
          renderCell: (params) => (
            <div className="cell-info">
                <img src={params.row.avatar} alt="" className="cell-info-img" />
                {params.row.username}
            </div>
          ),
          width: 200,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
          editable: true,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => (
                <>
                    <Link to={'/user/' + params.row.id}>
                        <button className="action-edit">Edit</button>
                    </Link>
                    <DeleteOutline className="action-delete" onClick={() => handleDelete(params.row.id)} />
                </>
            )
        },
    ];
      
    return (
        <div className="user-list">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={11}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default UserList
