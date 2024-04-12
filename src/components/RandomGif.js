import React from 'react'

import Spinner from "./Spinner"
import useGif from '../hook/useGif';

const RandomGif = () => {

  const {gif , loading , fetchGifData} = useGif()
  return (
    <div className=' w-[55%] bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px] shadow-lg'>

        <h2 className='mt-[15px] text-2xl underline uppercase font-bold'>A RANDOM GIF</h2>

        {
          loading ? (<Spinner/>) :(<img src={gif} width="450"></img>)
        }


        <button onClick={()=> {
          fetchGifData()
        }}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
        >Generate</button>

    </div>
  )
}

export default RandomGif