
import React, { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom_hooks/FetchData';


  
const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: true},
    { field: 'title', headerName: "TITLE", flex: 1},
    { field: 'genre', headerName: "GENRE", flex: 1},
    { field: 'author', headerName: "AUTHOR", flex: 1},
    { field: 'publisher', headerName: "PUBLISHER", flex: 1},
    { field: 'print_length', headerName: "PAGES", flex: 1}
]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { bookData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
            <div className="flex flex-row controls w-full max-w-screen-lg mx-auto p-4 justify-center space-x-2">
                <Button onClick={handleOpen} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white">ADD a BOOK</Button>
                <Button onClick={handleOpen} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >UPDATE</Button>
                <Button onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >DELETE</Button>
            </div>
            <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col justify-center"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-slate-300 my-2 rounded text-center font-semibold">AVAILABLE BOOKS</h2>
            <DataGrid rows={bookData} columns={columns} 
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>

        
    </>
  )
}

export default DataTable

