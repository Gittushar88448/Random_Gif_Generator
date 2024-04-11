import React, { useEffect, useState } from 'react'
import axios from "axios";
import Spinner from "./Spinner"

const RandomGif = () => {
  const [gif , setGif] = useState("");
  const [loading , setLoading] = useState(false);
  const API_KEY = "Qug7CvMdDsBCDptIaeE3G8t69HGA0Ljd";

  async function fetchGifData(){
    setLoading(true);
    try{
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const {data} = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);

    }catch(err){
      console.log("yha error hai "+ err);
    }

    setLoading(false);
  }

  useEffect(()=>{
    fetchGifData()
  },[]);

  return (
    <div className=' w-[550px] bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

        <h2 className='mt-[15px] text-2xl underline uppercase font-bold'>A RANDOM GIF</h2>

        {
          loading ? (<Spinner/>) :(<img src={gif} width="450"></img>)
        }


        <button onClick={()=> {
          fetchGifData();
        }}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
        >Generate</button>

    </div>
  )
}

export default RandomGif