import React from 'react';
import axios from "axios";
import DataTable from "react-data-table-component";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { urlDelEvent, urlEvent } from '../../../url';
import { Column } from 'primereact/column';
import Swal from 'sweetalert2';


export default function Index() {
    const [getEvent, setGetEvent] = React.useState([])
    const [rowSelect, setRowSelect] = React.useState([])


    const GetEvent = async () => {
        await axios.get(urlEvent).then(function (response) {
            setGetEvent(response.data)
        });
    }

    const DelEvent = async (e, rowSelect) => {
        await axios.post(urlDelEvent, {
            id: rowSelect.id
        }).then(function () {
            Swal.fire({
                icon: 'success',
                title: 'Sukses Delete Event',
                showConfirmButton: false,
                timer: 1500
            })
                .then(
                    getEvent()
                )
        })
            .catch((message) => {
                Swal.fire({
                    icon: 'error',
                    title: message.response.data.message,
                    showConfirmButton: false,
                    timer: 160000
                })
            })
    }

    const columns = [
        {
            name: 'Judul Event',
            selector: row => row['judul_event'],
            sortable: true
        },
        {
            name: 'Waktu',
            selector: row => row['time_event'],
            sortable: true
        },
        {
            name: 'Tanggal',
            selector: row => row['date_event'],
            sortable: true
        },
        {
            name: 'Place',
            selector: row => row['place_event'],
            sortable: true
        },
        {
            name: 'Status',
            selector: row => row.status === 0 ? 'Rejected' : 'Accepted',
            sortable: true

        },
        {
            name: 'Action',
            selector: row => (
                <div>
                    <button>
                        <PencilIcon className="w-4 h-4 mr-3" />
                    </button>
                    <button onClick={(e) => DelEvent(e, row)}>
                        <TrashIcon className="w-4 h-4" />
                    </button>
                </div>),
            sortable: true

        }
    ]
    React.useEffect(() => {
        GetEvent()
        console.log('ssas')
    }, [rowSelect])
    return (
        <React.Fragment>
            <div className="px-10">
                <div className="head">
                    <div className="title flex justify-between items-baseline py-10">
                        <p>Hello, Admin</p>
                        <button className="px-2 py-{3px} border-2 border-bg3">
                            <p>Create New Event</p>
                        </button>
                    </div>
                </div>
                <div className="table w-full">
                    <div className="card border-2 border-black rounded-lg">
                        <div className="card-header1 px-2 py-3">
                            <p className="text-xl font-semibold">
                                List Event 20
                            </p>
                        </div>
                        <div className="flex justify-end border-t-2 border-black px-2 py-3">
                            <div className=""></div>
                            <div className="search border-2 border-gray-300 rounded-full">
                                <input type="text" placeholder="Search" className="px-2 py-{2px} border-2 border-gray-300 rounded-full" />
                            </div>
                        </div>
                        <div className="card-body px-2 py-2 border-t-2 border-black">
                            <div>
                                <DataTable
                                    title={
                                        <div className="flex justify-between">List Kategori <span><button>
                                            <div className="flex justify-center items-center">
                                                <p className="text-sm text-black">Add New</p>
                                            </div>
                                        </button></span>
                                        </div>}
                                    columns={columns}
                                    data={getEvent}
                                    keyField=''
                                    pagination
                                    subHeader
                                    selectableRows
                                    persistTableHead
                                    dense
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}