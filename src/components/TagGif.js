import React, { useState } from 'react'
import Spinner from "./Spinner"
import useGif from '../hook/useGif';

const RandomGif = () => {
  const [tagVal , setTagVal] = useState('Car');
  const {gif , loading , fetchGifData} = useGif(tagVal);

  return (
    <div className=' w-[55%] bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-4 mt-[15px] mb-[18px]'>

        <h2 className='mt-[15px] text-2xl underline uppercase font-bold'> RANDOM {tagVal} GIF</h2>

        {
          loading ? (<Spinner/>) :(<img src={gif} width="450"></img>)
        }

        <input
        type='text'
        className='w-10/12 text-center text-lg py-2 rounded-lg '
        onChange={(event) => (event.target.value).length < 15 ? setTagVal(event.target.value) : `{Please limit the text}`}
        value={tagVal}
        ></input>

        <button onClick={()=> {
          fetchGifData(tagVal)
        }}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
        >Generate</button>

    </div>
  )
}

export default RandomGif