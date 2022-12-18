import React from 'react'

import Table from './Table'

const Index = () => {
  const tHead = [
    {
      judul: "No",
      width: "w-1/12",
    },
    {
      judul: "Nama",
      width: "w-auto",
    },
    {
      judul: "Role",
      width: "w-1/12",
    },
    {
      judul: "Status",
      width: "w-1/12",
    },
    {
      judul: "Aksi",
      width: "w-auto",
    },
  ]

  const tBody = [
    {
      no: 1,
      nama: "Brahmasta Bagus",
      role: {
        isi: "Mentor",
        warna: "stp-info"
      },
      status: {
        isi: "Aktif",
        warna: "stp-success"
      },
      aksi: {
        detail: "/admin/detail-alat",
        edit: "/admin/edit-alat",
        hapus: "/admin/hapus-alat",
      },
    },
    {
      no: 1,
      nama: "Brahmasta Bagus",
      role: {
        isi: "Mentor",
        warna: "stp-info"
      },
      status: {
        isi: "Aktif",
        warna: "stp-success"
      },
      aksi: {
        detail: "/admin/detail-alat",
        edit: "/admin/edit-alat",
        hapus: "/admin/hapus-alat",
      },
    },
    {
      no: 1,
      nama: "Brahmasta Bagus",
      role: {
        isi: "Mentor",
        warna: "stp-info"
      },
      status: {
        isi: "Aktif",
        warna: "stp-success"
      },
      aksi: {
        detail: "/admin/detail-alat",
        edit: "/admin/edit-alat",
        hapus: "/admin/hapus-alat",
      },
    },
    {
      no: 1,
      nama: "Brahmasta Bagus",
      role: {
        isi: "Mentor",
        warna: "stp-info"
      },
      status: {
        isi: "Aktif",
        warna: "stp-success"
      },
      aksi: {
        detail: "/admin/detail-alat",
        edit: "/admin/edit-alat",
        hapus: "/admin/hapus-alat",
      },
    },
  ]
  return (
    <>
      <Table judul="Tambah Alat" link="/admin/tambah-alat" tHead={tHead} tBody={tBody} />
    </>
  )
}

export default Index