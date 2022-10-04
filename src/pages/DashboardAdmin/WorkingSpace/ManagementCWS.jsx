import React from 'react'

import Table from '../../../components/Table'

const ManagementCWS = () => {
    const tHead = [
        {
            judul: "No",
            width: "w-auto"
        },
        {
            judul: "Nama CWS",
            width: "w-auto"
        },
        {
            judul: "Alamat",
            width: "w-auto"
        },
        {
            judul: "Kapasitas",
            width: "w-auto"
        },
        {
            judul: "Status Booking",
            width: "w-1/12"
        },
        {
            judul: "Aksi",
            width: "w-auto"
        }
    ]

    let tBody = [
        {
            no: 1,
            judul: "IBC Semarang",
            alamat: "Jl. Semarang no 70",
            kapasitas: "120",
        },
    ]
    return (
        <>
            <Table judul="Tambah Working Space" link="/" tHead={tHead} tBody={tBody} />
        </>
    )
}

export default ManagementCWS