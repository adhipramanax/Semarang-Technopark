import { useState, useRef, useEffect } from 'react'

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import { Link } from 'react-router-dom';
import IBC from '../../../assets/images/ibc.png'
import Pelatihan from '../../../assets/images/pelatihan.png'
import HargaSewa from './HargaSewa';

const DetailAlat = () => {
    const [Gambar, setGambar] = useState()
    const ref = useRef([])

    useEffect(() => {
        setGambar(ref.current.children[0].src)
        ref.current.children[0].className = "img rounded w-11 h-11 object-cover cursor-pointer ring"
    }, [ref])

    const handleClick = (index) => {
        let image = document.querySelectorAll('.img')

        image.forEach((img) => {
            img.classList.remove("ring")
        })

        index.target.classList.add("ring")
        setGambar(index.target.src)
    }

    const images = [Pelatihan, IBC, Pelatihan, IBC, Pelatihan, IBC]
    return (
        <>
            <div className="flex bg-[#D9D9D9]">
                <Sidebar />
                <div className="w-full ml-64">
                    <NavbarDashboard judul="Management Alat" />
                    <div className="flex flex-col gap-5 pb-10 mx-6 mt-10">
                        <div className="w-full bg-white py-5 px-3 font-medium text-base rounded">
                            <h1 className="flex gap-2">
                                <Link to="/admin/daftar-alat" className="flex gap-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="#1C1B1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Alat Detail
                                </Link>
                            </h1>
                        </div>
                        <div className="w-full flex bg-white p-5 rounded">
                            <div className="w-[24.5%]">
                                <img className="rounded w-[250px] h-[218px] object-cover" src={Gambar} alt="ibc" />
                                <div id="style-2" className="imgs flex flex-nowrap snap-x overflow-x-scroll snap-mandatory py-2 pl-1 gap-2 mt-5" ref={ref}>
                                    {images.map((img, index) => {
                                        return (
                                            <img key={index} className={`img snap-center snap-always rounded w-11 h-11 object-cover cursor-pointer order-${index}`} src={img} alt="ibc" onMouseOver={handleClick} />
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="w-[65%] flex ml-10">
                                <div className="grid grid-cols-3 gap-y-6 my-auto">
                                    <h1 className="font-semibold text-base">Nama Alat</h1>
                                    <p className="col-span-2">Inkubator Business Center</p>
                                    <h1 className="font-semibold text-base">No Seri</h1>
                                    <p className="col-span-2">2019ABC78657645CDF</p>
                                    <h1 className="font-semibold text-base">Alamat Pengambilan</h1>
                                    <p className="col-span-2">Bendan Ngisor, Kec. Gajahmungkur, Kota Semarang, Jawa Tengah 50233</p>
                                    <h1 className="font-semibold text-base">Pemilik</h1>
                                    <p className="col-span-2">Inkubator Bisnis Center</p>
                                    <h1 className="font-semibold text-base">Merk</h1>
                                    <p className="col-span-2">Samsung</p>
                                    <h1 className="font-semibold text-base">Tahun Pembelian</h1>
                                    <p className="col-span-2">2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <HargaSewa />
                        </div>
                        <div className="w-full flex justify-end">
                            <button className="btn flex text-white bg-merah border-red-500 rounded-md gap-2 items-center">Edit Data</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailAlat