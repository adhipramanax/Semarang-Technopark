import React from 'react'

import Table from '../../../components/Table'

const AkunMentor = () => {
    const tHead = [
        {
            judul: "No",
            width: "w-auto"
        },
        {
            judul: "Nama Mentor",
            width: "w-1/2"
        },
        {
            judul: "Status",
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
            judul: "Cecep Bagus",
            status: {
                isi: "Active",
                warna: "success"
            }
        },
        {
            no: 1,
            judul: "Cecep Bagus",
            status: {
                isi: "Active",
                warna: "success"
            }
        },
        {
            no: 1,
            judul: "Cecep Bagus",
            status: {
                isi: "Active",
                warna: "success"
            }
        },
        {
            no: 1,
            judul: "Cecep Bagus",
            status: {
                isi: "Active",
                warna: "success"
            }
        },
    ]
    return (
        <>
            <Table judul="Buat Akun Mentor" link="/" tHead={tHead} tBody={tBody} />
        </>
    )
}

export default AkunMentor