import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Error from '../../components/Error'
import notFound from '../../assets/images/404.svg'
import maintenance from '../../assets/images/maintenance.svg'

const index = () => {
    return (
        <>
            <Navbar auth="/register" title="Daftar" />
            {/* <Error img={notFound} title="Oops!" desc="Halaman yang kamu cari tidak dapat ditemukan" /> */}
            <Error img={maintenance} title="Sorry banget:(" desc="Halaman yang kamu tuju sedang dalam proses pengembangan" />
        </>
    )
}

export default index