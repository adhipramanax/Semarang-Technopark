import React from 'react'

const Event = () => {
    const event = [
        {
            judul: "Webinar Ekosistem Inovasi",
            tanggal: "27 Juni 2022"
        },
        {
            judul: "Webinar Ekosistem Inovasi",
            tanggal: "27 Juni 2022"
        },
        {
            judul: "Webinar Ekosistem Inovasi",
            tanggal: "27 Juni 2022"
        },
        {
            judul: "Webinar Ekosistem Inovasi",
            tanggal: "27 Juni 2022"
        },
        {
            judul: "Webinar Ekosistem Inovasi",
            tanggal: "27 Juni 2022"
        },
    ]
    return (
        <>
            <h1 className="font-bold">Upcoming Event</h1>
            <div className="flex flex-col mt-5 gap-2">
                {event.map(e => {
                    return (
                        <div className="flex gap-10 flex-wrap">
                            <h1>{e.judul}</h1>
                            <p>{e.tanggal}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Event