import React from 'react'

import tag from '../../assets/images/tag.svg';
import lokasi from '../../assets/images/lokasi.svg';

const index = (props) => {
    return (
        <>
            <div className="card w-full">
                <figure className="w-full">
                    <img
                        className="rounded-[12px] object-cover w-full"
                        src={`${props.img}`}
                        alt="Shoes"
                    />
                </figure>
                <div className="pt-5">
                    {/* <div> */}
                    <span className="bg-hijau text-base text-white rounded-[4px] px-5 py-1">
                        {props.kategori}
                        </span>
                    {/* </div> */}
                    <h1 className="text-sm xl:text-xl lg:text-xl font-medium mt-5 mb-5 w-[80%]">{props.judul}</h1>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <img src={tag} alt="tag" />
                            <p className="text-xs xl:text-sm font-normal">{props.price}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={lokasi} alt="lokasi" />
                            <p className="text-xs xl:text-sm font-normal">{props.lokasi}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index