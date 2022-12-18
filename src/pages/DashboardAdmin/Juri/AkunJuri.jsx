import React from "react";

import Table from "../../../components/Table";

const AkunJuri = () => {
  const tHead = [
    {
      judul: "No",
      width: "w-auto",
    },
    {
      judul: "Nama Juri",
      width: "w-auto",
    },
    {
      judul: "UserID Juri",
      width: "w-auto",
    },
    {
      judul: "Password Juri",
      width: "w-auto",
    },
    {
      judul: "Status",
      width: "w-1/12",
    },
    {
      judul: "Aksi",
      width: "w-auto",
    },
  ];

  let tBody = [
    {
      no: 1,
      judul: "Cecep Bagus",
      userid: "Bagus123",
      password: "juri123",
      status: {
        isi: "Active",
        warna: "stp-success",
      },
      aksi: {
        edit: "/admin/edit-juri",
        detail: "/admin/detail-juri",
        hapus: "/admin/hapus-juri",
      },
    },
    {
      no: 1,
      judul: "Cecep Bagus",
      userid: "Bagus123",
      password: "juri123",
      status: {
        isi: "Active",
        warna: "stp-success",
      },
      aksi: {
        edit: "/admin/edit-juri",
        detail: "/admin/detail-juri",
        hapus: "/admin/hapus-juri",
      },
    },
    {
      no: 1,
      judul: "Cecep Bagus",
      userid: "Bagus123",
      password: "juri123",
      status: {
        isi: "Active",
        warna: "stp-success",
      },
      aksi: {
        edit: "/admin/edit-juri",
        detail: "/admin/detail-juri",
        hapus: "/admin/hapus-juri",
      },
    },
    {
      no: 1,
      judul: "Cecep Bagus",
      userid: "Bagus123",
      password: "juri123",
      status: {
        isi: "Active",
        warna: "stp-success",
      },
      aksi: {
        edit: "/admin/edit-juri",
        detail: "/admin/detail-juri",
        hapus: "/admin/hapus-juri",
      },
    },
    {
      no: 1,
      judul: "Cecep Bagus",
      userid: "Bagus123",
      password: "juri123",
      status: {
        isi: "Active",
        warna: "stp-success",
      },
      aksi: {
        edit: "/admin/edit-juri",
        detail: "/admin/detail-juri",
        hapus: "/admin/hapus-juri",
      },
    },
    {
      no: 1,
      judul: "Cecep Bagus",
      userid: "Bagus123",
      password: "juri123",
      status: {
        isi: "Active",
        warna: "stp-success",
      },
      aksi: {
        edit: "/admin/edit-juri",
        detail: "/admin/detail-juri",
        hapus: "/admin/hapus-juri",
      },
    },
    {
      no: 1,
      judul: "Cecep Bagus",
      userid: "Bagus123",
      password: "juri123",
      status: {
        isi: "Active",
        warna: "stp-success",
      },
      aksi: {
        edit: "/admin/edit-juri",
        detail: "/admin/detail-juri",
        hapus: "/admin/hapus-juri",
      },
    },
    {
      no: 1,
      judul: "Cecep Bagus",
      userid: "Bagus123",
      password: "juri123",
      status: {
        isi: "Active",
        warna: "stp-success",
      },
      aksi: {
        edit: "/admin/edit-juri",
        detail: "/admin/detail-juri",
        hapus: "/admin/hapus-juri",
      },
    },
    {
      no: 1,
      judul: "Cecep Bagus",
      userid: "Bagus123",
      password: "juri123",
      status: {
        isi: "Active",
        warna: "stp-success",
      },
      aksi: {
        edit: "/admin/edit-juri",
        detail: "/admin/detail-juri",
        hapus: "/admin/hapus-juri",
      },
    },
    {
      no: 1,
      judul: "Cecep Bagus",
      userid: "Bagus123",
      password: "juri123",
      status: {
        isi: "Active",
        warna: "stp-success",
      },
      aksi: {
        edit: "/admin/edit-juri",
        detail: "/admin/detail-juri",
        hapus: "/admin/hapus-juri",
      },
    },
  ];
  return (
    <>
      <Table judul="Buat Akun Juri" link="/" tHead={tHead} tBody={tBody} />
    </>
  );
};

export default AkunJuri;
