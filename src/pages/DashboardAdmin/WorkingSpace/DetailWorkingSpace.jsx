import { useState, useRef, useEffect } from 'react'

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import { Link } from 'react-router-dom';
import IBC from '../../../assets/images/ibc.png'
import Pelatihan from '../../../assets/images/pelatihan.png'
import Fasilitas from './Fasilitas';
import Operasional from './Operasional';
import HargaSewa from './HargaSewa';

const DetailWorkingSpace = () => {
    const [Gambar, setGambar] = useState()
    const ref = useRef([])

    // console.log(ref.current.src);

    // let image = document.querySelectorAll('.img')
    // image.forEach((img) => {
    //     img.addEventListener("click",
    //     function () {
    //         // console.log(img.src);
    //         setGambar(img.src)
    //     });
    // })

    useEffect(() => {
        // console.log(ref.current.children[0]);
        setGambar(ref.current.children[0].src)
        ref.current.children[0].className = "img rounded w-11 h-11 object-cover cursor-pointer ring"
    }, [ref])

    const handleClick = (index) => {
        // console.log(index.target.classList);
        let image = document.querySelectorAll('.img')
        image.forEach((img) => {
            img.classList.remove("ring")
        })
        // index.target.classList.remove("ring")
        index.target.classList.add("ring")
        setGambar(index.target.src)
    }

    const images = [Pelatihan, IBC, Pelatihan, IBC, Pelatihan, IBC]

    const fasilitas = [
        {
            judul: "Kamar Mandi",
            icon: (
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.6665 7.89193V6.22526C1.6665 3.72526 3.33317 2.05859 5.83317 2.05859H14.1665C16.6665 2.05859 18.3332 3.72526 18.3332 6.22526V7.89193" stroke="#CD0606" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.6665 12.8916V14.5583C1.6665 17.0583 3.33317 18.7249 5.83317 18.7249H14.1665C16.6665 18.7249 18.3332 17.0583 18.3332 14.5583V12.8916" stroke="#CD0606" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.5835 8.1084L10.0002 10.6667L14.3835 8.12508" stroke="#CD0606" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 15.1999V10.6582" stroke="#CD0606" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.96685 5.6334L6.30019 7.11676C5.70019 7.45009 5.2002 8.29175 5.2002 8.98341V11.8084C5.2002 12.5001 5.69186 13.3418 6.30019 13.6751L8.96685 15.1584C9.53352 15.4751 10.4669 15.4751 11.0419 15.1584L13.7085 13.6751C14.3085 13.3418 14.8085 12.5001 14.8085 11.8084V8.98341C14.8085 8.29175 14.3169 7.45009 13.7085 7.11676L11.0419 5.6334C10.4669 5.3084 9.53352 5.3084 8.96685 5.6334Z" stroke="#CD0606" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )
        },
        {
            judul: "Kamar Mandi",
            icon: (
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.6665 7.89193V6.22526C1.6665 3.72526 3.33317 2.05859 5.83317 2.05859H14.1665C16.6665 2.05859 18.3332 3.72526 18.3332 6.22526V7.89193" stroke="#CD0606" stroke-miterlimit="10" stroke- linecap="round" stroke-linejoin="round" />
                    <path d="M1.6665 12.8916V14.5583C1.6665 17.0583 3.33317 18.7249 5.83317 18.7249H14.1665C16.6665 18.7249 18.3332 17.0583 18.3332 14.5583V12.8916" stroke="#CD0606" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.5835 8.1084L10.0002 10.6667L14.3835 8.12508" stroke="#CD0606" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 15.1999V10.6582" stroke="#CD0606" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.96685 5.6334L6.30019 7.11676C5.70019 7.45009 5.2002 8.29175 5.2002 8.98341V11.8084C5.2002 12.5001 5.69186 13.3418 6.30019 13.6751L8.96685 15.1584C9.53352 15.4751 10.4669 15.4751 11.0419 15.1584L13.7085 13.6751C14.3085 13.3418 14.8085 12.5001 14.8085 11.8084V8.98341C14.8085 8.29175 14.3169 7.45009 13.7085 7.11676L11.0419 5.6334C10.4669 5.3084 9.53352 5.3084 8.96685 5.6334Z" stroke="#CD0606" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )
        },
        {
            judul: "Kamar Mandi",
            icon: (
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.6665 7.89193V6.22526C1.6665 3.72526 3.33317 2.05859 5.83317 2.05859H14.1665C16.6665 2.05859 18.3332 3.72526 18.3332 6.22526V7.89193" stroke="#CD0606" stroke-miterlimit="10" stroke- linecap="round" stroke-linejoin="round" />
                    <path d="M1.6665 12.8916V14.5583C1.6665 17.0583 3.33317 18.7249 5.83317 18.7249H14.1665C16.6665 18.7249 18.3332 17.0583 18.3332 14.5583V12.8916" stroke="#CD0606" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.5835 8.1084L10.0002 10.6667L14.3835 8.12508" stroke="#CD0606" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 15.1999V10.6582" stroke="#CD0606" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.96685 5.6334L6.30019 7.11676C5.70019 7.45009 5.2002 8.29175 5.2002 8.98341V11.8084C5.2002 12.5001 5.69186 13.3418 6.30019 13.6751L8.96685 15.1584C9.53352 15.4751 10.4669 15.4751 11.0419 15.1584L13.7085 13.6751C14.3085 13.3418 14.8085 12.5001 14.8085 11.8084V8.98341C14.8085 8.29175 14.3169 7.45009 13.7085 7.11676L11.0419 5.6334C10.4669 5.3084 9.53352 5.3084 8.96685 5.6334Z" stroke="#CD0606" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )
        },
        {
            judul: "Wifi",
            icon: (
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.6665 7.89193V6.22526C1.6665 3.72526 3.33317 2.05859 5.83317 2.05859H14.1665C16.6665 2.05859 18.3332 3.72526 18.3332 6.22526V7.89193" stroke="#CD0606" stroke-miterlimit="10" stroke- linecap="round" stroke-linejoin="round" />
                    <path d="M1.6665 12.8916V14.5583C1.6665 17.0583 3.33317 18.7249 5.83317 18.7249H14.1665C16.6665 18.7249 18.3332 17.0583 18.3332 14.5583V12.8916" stroke="#CD0606" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.5835 8.1084L10.0002 10.6667L14.3835 8.12508" stroke="#CD0606" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 15.1999V10.6582" stroke="#CD0606" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.96685 5.6334L6.30019 7.11676C5.70019 7.45009 5.2002 8.29175 5.2002 8.98341V11.8084C5.2002 12.5001 5.69186 13.3418 6.30019 13.6751L8.96685 15.1584C9.53352 15.4751 10.4669 15.4751 11.0419 15.1584L13.7085 13.6751C14.3085 13.3418 14.8085 12.5001 14.8085 11.8084V8.98341C14.8085 8.29175 14.3169 7.45009 13.7085 7.11676L11.0419 5.6334C10.4669 5.3084 9.53352 5.3084 8.96685 5.6334Z" stroke="#CD0606" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )
        },
    ]
    return (
        <>
            <div className="flex bg-[#D9D9D9]">
                <Sidebar />
                <div className="w-full ml-64">
                    <NavbarDashboard judul="Management Working Space" />
                    <div className="flex flex-col gap-5 pb-10 mx-6 mt-10">
                        <div className="w-full bg-white py-5 px-3 font-medium text-base rounded">
                            <h1 className="flex gap-2">
                                <Link to="/admin/daftar-working-space" className="flex gap-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="#1C1B1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Co Working Space Detail
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
                                <div className="grid grid-cols-3 gap-y-7 my-auto">
                                    <h1 className="font-semibold text-base">Nama Working Space</h1>
                                    <p className="col-span-2">Inkubator Business Center</p>
                                    <h1 className="font-semibold text-base">Alamat</h1>
                                    <p className="col-span-2">Bendan Ngisor, Kec. Gajahmungkur, Kota Semarang, Jawa Tengah 50233</p>
                                    <h1 className="font-semibold text-base">Kapasitas</h1>
                                    <p className="col-span-2">50 Orang</p>
                                    <h1 className="font-semibold text-base">Penanggung Jawab</h1>
                                    <p className="col-span-2">0857-8834-6145</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Operasional />
                        </div>
                        <div className="flex gap-3">
                            <Fasilitas fasilitas={fasilitas} />
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

export default DetailWorkingSpace