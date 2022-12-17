import React from 'react'

const index = (props) => {
  return (
    <div>
      <div className="grid grid-cols-3 xl:flex xl:flex-col lg:flex lg:flex-col">
        <div className="mt-5 xl:mt-11 lg:mt-11">
          <h1 className="font-medium text-xs xl:text-xl lg:text-xl">Tipe Pelatihan</h1>
          <div className="hidden xl:block h-[3px] w-[98%] mx-auto bg-[#D9D9D9] mt-3"></div>
          {props.tipePelatihan.map((tipe) => {
            return (
              <div className="flex items-center gap-2 mt-3">
                <input type="checkbox" class="checked:bg-[#D9D9D9] rounded bg-white" name={tipe} id={tipe} />
                <label className="label cursor-pointer text-xs xl:text-base lg:text-base font-normal" htmlFor={tipe}>{tipe}</label>
              </div>
            )
          })}
        </div>
        <div className="mt-5 xl:mt-11 lg:mt-11">
          <h1 className="font-medium text-xs xl:text-xl lg:text-xl">Harga</h1>
          <div className="hidden xl:block h-[3px] w-[98%] mx-auto bg-[#D9D9D9] mt-3"></div>
          {props.harga.map((harga) => {
            return (
              <div className="flex items-center gap-2 mt-3">
                <input type="checkbox" class="checked:bg-[#D9D9D9] rounded bg-white" name={harga} id={harga} />
                <label className="label cursor-pointer text-xs xl:text-base lg:text-base font-normal" htmlFor={harga}>{harga}</label>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default index