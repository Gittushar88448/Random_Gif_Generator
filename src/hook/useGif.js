import React, { useEffect, useState } from 'react'
import axios from "axios";


const API_KEY = "tL3wsvmfYcjz9Q4fs05RvXpEdtGBUqt3";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (tag) => {

  const [gif , setGif] = useState("");
  const [loading , setLoading] = useState(false);

  async function fetchGifData(tag){
    setLoading(true);
    try{
      const {data} = await axios.get(  tag ? `${url}&tag=${tag}` :  url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);

    }catch(err){
      console.log("yha error hai "+ err);
    }

    setLoading(false);
  }

  useEffect(()=>{
    fetchGifData("Car")
  },[]);
 
  return {gif , loading , fetchGifData}

}

export default useGif