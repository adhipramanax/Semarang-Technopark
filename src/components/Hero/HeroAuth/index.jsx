import React from 'react'


import inkubasi from '../../../assets/images/svg/inkubasi.svg';
import coworking from '../../../assets/images/svg/coworking.svg';
import sewaalat from '../../../assets/images/svg/sewaalat.svg';
import event from '../../../assets/images/svg/event.svg';

const index = () => {
    return (
        <>
            <div className="w-[65%] hidden xl:block lg:block my-auto">
                <h1 className="text-white text-5xl font-bold w-1/2 leading-snug">Semarang Technopark</h1>
                <p className="text-white w-4/5 mt-6">Semarang Technopark memiliki berbagai program dan pengelolaan Inkubasi untuk menghasilkan berbagai terobosan inovasi</p>
                <div className="w-5/6 flex flex-wrap flex-col lg:flex-col xl:flex-row gap-3 mt-6">
                    <div className="w-full xl:w-1/2 bg-white rounded-2xl p-1 flex items-center gap-4">
                        <div className="w-16 h-w-16 aspect-square flex bg-red-500 rounded-2xl">
                            <img className="m-auto" src={inkubasi} alt="inkubasi" />
                        </div>
                        <h1 className="font-semibold text-lg">Inkubasi</h1>
                    </div>
                    <div className="flex-auto bg-white rounded-2xl p-1 flex items-center gap-4">
                        <div className="w-16 h-w-16 aspect-square flex bg-red-500 rounded-2xl">
                            <img className="m-auto" src={event} alt="event" />
                        </div>
                        <h1 className="font-semibold text-lg">Event & Pelatihan</h1>
                    </div>
                    <div className="w-full xl:w-1/2 bg-white rounded-2xl p-1 flex items-center gap-4">
                        <div className="w-16 h-w-16 aspect-square flex bg-red-500 rounded-2xl">
                            <img className="m-auto" src={coworking} alt="coworking" />
                        </div>
                        <h1 className="font-semibold text-lg">Co-Working Space</h1>
                    </div>
                    <div className="flex-auto bg-white rounded-2xl p-1 flex items-center gap-4">
                        <div className="w-16 h-w-16 aspect-square flex bg-red-500 rounded-2xl">
                            <img className="m-auto" src={sewaalat} alt="sewaalat" />
                        </div>
                        <h1 className="font-semibold text-lg">Sewa Alat</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index