import React from "react";

import Table from "../../../components/Table/TableTenant";

const AkunTenant = () => {
  const tHead = [
    {
      judul: "No",
      width: "w-auto",
    },
    {
      judul: "Nama Tenant",
      width: "w-[30%]",
    },
    {
      judul: "Bidang",
      width: "w-auto",
    },
    {
      judul: "Ketua",
      width: "w-[30%]",
    },
    {
      judul: "Penilaian",
      width: "w-auto",
    },
    {
      judul: "Status",
      width: "w-auto",
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
      bidang: {
        isi: "Food",
        warna: "stp-success",
      },
      ketua: "Brahmasta Bagus Aryandra",
      status: {
        isi: "Tenant",
        warna: "stp-success",
      },
      aksi: {
        detail: "admin/detail-tenant",
      }
    },
    {
      no: 1,
      judul: "IBC Semarang",
      bidang: {
        isi: "Food",
        warna: "stp-success",
      },
      ketua: "Brahmasta Bagus Aryandra",
      status: {
        isi: "Tenant",
        warna: "stp-success",
      },
      aksi: {
        detail: "admin/detail-tenant",
      }
    },
    {
      no: 1,
      judul: "IBC Semarang",
      bidang: {
        isi: "Food",
        warna: "stp-success",
      },
      ketua: "Brahmasta Bagus Aryandra",
      status: {
        isi: "Tenant",
        warna: "stp-success",
      },
      aksi: {
        detail: "admin/detail-tenant",
      }
    },
    {
      no: 1,
      judul: "IBC Semarang",
      bidang: {
        isi: "Food",
        warna: "stp-success",
      },
      ketua: "Brahmasta Bagus Aryandra",
      status: {
        isi: "Tenant",
        warna: "stp-success",
      },
      aksi: {
        detail: "admin/detail-tenant",
      }
    },
    {
      no: 1,
      judul: "IBC Semarang",
      bidang: {
        isi: "Food",
        warna: "stp-success",
      },
      ketua: "Brahmasta Bagus Aryandra",
      status: {
        isi: "Tenant",
        warna: "stp-success",
      },
      aksi: {
        detail: "admin/detail-tenant",
      }
    },
    {
      no: 1,
      judul: "IBC Semarang",
      bidang: {
        isi: "Food",
        warna: "stp-success",
      },
      ketua: "Brahmasta Bagus Aryandra",
      status: {
        isi: "Tenant",
        warna: "stp-success",
      },
      aksi: {
        detail: "admin/detail-tenant",
      }
    },
    {
      no: 1,
      judul: "IBC Semarang",
      bidang: {
        isi: "Food",
        warna: "stp-success",
      },
      ketua: "Brahmasta Bagus Aryandra",
      status: {
        isi: "Tenant",
        warna: "stp-success",
      },
      aksi: {
        detail: "admin/detail-tenant",
      }
    },
    {
      no: 1,
      judul: "IBC Semarang",
      bidang: {
        isi: "Food",
        warna: "stp-success",
      },
      ketua: "Brahmasta Bagus",
      status: {
        isi: "Calon Tenant",
        warna: "stp-secondary",
      },
      aksi: {
        detail: "admin/detail-tenant",
      }
    },
    {
      no: 1,
      judul: "IBC Semarang",
      bidang: {
        isi: "Food",
        warna: "stp-success",
      },
      ketua: "Brahmasta Bagus",
      status: {
        isi: "Tenant",
        warna: "stp-success",
      },
      aksi: {
        detail: "admin/detail-tenant",
      }
    },
    {
      no: 1,
      judul: "IBC Semarang",
      bidang: {
        isi: "Food",
        warna: "stp-success",
      },
      ketua: "Brahmasta Bagus",
      status: {
        isi: "Calon Tenant",
        warna: "stp-secondary",
      },
      aksi: {
        detail: "admin/detail-tenant",
      }
    },
  ];
  return (
    <>
      <Table judul="Buat Akun Tenant" link="/" tHead={tHead} tBody={tBody} />
    </>
  );
};

export default AkunTenant;
