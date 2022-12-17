import React from 'react'

import Card from '../Pelatihan/Card'
import pelatihan from "../../assets/images/pelatihan-gambar.png";

const Index = () => {
  return (
    <>
      <h1 className="font-medium text-xl mt-8">Rekomendasi Pelatihan Lainnya</h1>
      <div className="grid grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 gap-3 xl:gap-5 lg:gap-5 mt-8">
        <Card
          judul="Pelatihan Design Grafis"
          price="Rp. 1.250.000 / Bulan"
          lokasi="Semarang Technopark"
          kategori="Elektronik"
          img={pelatihan}
        />
        <Card
          judul="Pelatihan Design Grafis"
          price="Rp. 1.250.000 / Bulan"
          lokasi="Semarang Technopark"
          kategori="Elektronik"
          img={pelatihan}
        />
        <Card
          judul="Pelatihan Design Grafis"
          price="Rp. 1.250.000 / Bulan"
          lokasi="Semarang Technopark"
          kategori="Elektronik"
          img={pelatihan}
        />
        <Card
          judul="Pelatihan Design Grafis"
          price="Rp. 1.250.000 / Bulan"
          lokasi="Semarang Technopark"
          kategori="Elektronik"
          img={pelatihan}
        />
      </div>
    </>
  )
}

export default Index