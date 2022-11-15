import React from 'react'

import Table from '../../../components/Table'

const ManagementAlat = () => {
    const tHead = [
        {
            judul: "No",
            width: "w-auto"
        },
        {
            judul: "Nama Alat",
            width: "w-auto"
        },
        {
            judul: "No-Seri",
            width: "w-auto"
        },
        {
            judul: "Pemilik",
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
            noseri: {
                isi: "Food",
                warna: "success"
            },
            pemilik: "Brahmasta Bagus",
            aksi: {
                edit: "/admin/edit-alat",
                detail: "/admin/detail-alat",
                hapus: "/admin/hapus-alat",
            }
        },
    ]
    return (
        <>
            <Table judul="Tambah Alat" link="/admin/tambah-alat" tHead={tHead} tBody={tBody} />
        </>
    )
}

export default ManagementAlat