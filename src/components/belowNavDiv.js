import React from 'react'

function BelowNavDiv() {
    return(
        <div className='flex flex-col justify-center items-center w-[588px] h-[201px]'>
            <p className='font-CBYG text-4xl text-[#2DA950]  transition-transform hover:scale-105'>success stories</p>
            <div className='flex flex-col items-center transition-transform hover:scale-105'>
            <p className='font-Manrope text-[46px]'>Every success journey</p>
            <p className='font-Manrope text-[46px]'>We've encountered</p>
            </div>
        </div>
    )
}

export default BelowNavDiv;