// import { Carousel } from "@material-tailwind/react";
import React, { useState } from 'react';
import {BsChevronLeft,BsChevronRight} from "react-icons/bs"
function Card(prop){
  const url=prop.url
  return(
     <img
        src={"https://lh3.googleusercontent.com/d/"+url}
        alt="image 1"
        className="h-full w-full object-cover"
      />
  )
}
export default function CarouselDefault(prop) {
  const [index,setindex]=useState(0)
  const imgarr=prop.imgarr
  //console.log(imgarr)
  const prev=()=>{
   index>0?setindex(index-1):setindex(imgarr.length-1)
  }
  const next=()=>{
     index<imgarr.length-1?setindex(index+1):setindex(0)
      console.log(index)
  }
  return (
  <div>
    <h1 className="text-left text-gray-400 font-semibold">Event Images</h1>
    <div className="relative rounded-xl flex justify-center">
     
      <Card url={imgarr[index]}/>
      {/* left arrow */}
      <div className="absolute rounded-full p-3 left-5 bg-black/50 top-[50%] translate-y-[50%] text-white cursor-pointer"><BsChevronLeft onClick={()=>{prev()}} size={38}/></div>
      {/* rigth arrow */}
      <div className="absolute rounded-full p-3 right-5 bg-black/50 top-[50%] translate-y-[50%] text-white cursor-pointer"><BsChevronRight onClick={()=>{next()}} size={38}/></div>
    </div>
  </div>
  );
      
}