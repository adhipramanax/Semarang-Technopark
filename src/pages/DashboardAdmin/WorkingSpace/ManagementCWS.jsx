import React from "react";

import Table from "../../../components/Table/TableCoworking";

const ManagementCWS = () => {
  const tHead = [
    {
      judul: "No",
      width: "w-auto",
    },
    {
      judul: "Nama CWS",
      width: "w-auto",
    },
    {
      judul: "Alamat",
      width: "w-auto",
    },
    {
      judul: "Kapasitas",
      width: "w-auto",
    },
    {
      judul: "Status Booking",
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
      judul: "IBC Semarang",
      alamat: "Jl. Semarang no 70",
      kapasitas: "120",
      aksi: {
        edit: "/admin/edit-working-space",
        detail: "/admin/detail-working-space",
        hapus: "/admin/hapus-working-space",
      },
    },
    {
      no: 1,
      judul: "IBC Semarang",
      alamat: "Jl. Semarang no 70",
      kapasitas: "120",
      aksi: {
        edit: "/admin/edit-working-space",
        detail: "/admin/detail-working-space",
        hapus: "/admin/hapus-working-space",
      },
    },
    {
      no: 1,
      judul: "IBC Semarang",
      alamat: "Jl. Semarang no 70",
      kapasitas: "120",
      aksi: {
        edit: "/admin/edit-working-space",
        detail: "/admin/detail-working-space",
        hapus: "/admin/hapus-working-space",
      },
    },
    {
      no: 1,
      judul: "IBC Semarang",
      alamat: "Jl. Semarang no 70",
      kapasitas: "120",
      aksi: {
        edit: "/admin/edit-working-space",
        detail: "/admin/detail-working-space",
        hapus: "/admin/hapus-working-space",
      },
    },
    {
      no: 1,
      judul: "IBC Semarang",
      alamat: "Jl. Semarang no 70",
      kapasitas: "120",
      aksi: {
        edit: "/admin/edit-working-space",
        detail: "/admin/detail-working-space",
        hapus: "/admin/hapus-working-space",
      },
    },
    {
      no: 1,
      judul: "IBC Semarang",
      alamat: "Jl. Semarang no 70",
      kapasitas: "120",
      aksi: {
        edit: "/admin/edit-working-space",
        detail: "/admin/detail-working-space",
        hapus: "/admin/hapus-working-space",
      },
    },
    {
      no: 1,
      judul: "IBC Semarang",
      alamat: "Jl. Semarang no 70",
      kapasitas: "120",
      aksi: {
        edit: "/admin/edit-working-space",
        detail: "/admin/detail-working-space",
        hapus: "/admin/hapus-working-space",
      },
    },
    {
      no: 1,
      judul: "IBC Semarang",
      alamat: "Jl. Semarang no 70",
      kapasitas: "120",
      aksi: {
        edit: "/admin/edit-working-space",
        detail: "/admin/detail-working-space",
        hapus: "/admin/hapus-working-space",
      },
    },
    {
      no: 1,
      judul: "IBC Semarang",
      alamat: "Jl. Semarang no 70",
      kapasitas: "120",
      aksi: {
        edit: "/admin/edit-working-space",
        detail: "/admin/detail-working-space",
        hapus: "/admin/hapus-working-space",
      },
    },
    {
      no: 1,
      judul: "IBC Semarang",
      alamat: "Jl. Semarang no 70",
      kapasitas: "120",
      aksi: {
        edit: "/admin/edit-working-space",
        detail: "/admin/detail-working-space",
        hapus: "/admin/hapus-working-space",
      },
    },
  ];
  return (
    <>
      <Table
        judul="Tambah Working Space"
        link="/admin/add-coworking"
        tHead={tHead}
        tBody={tBody}
      />
    </>
  );
};

export default ManagementCWS;
