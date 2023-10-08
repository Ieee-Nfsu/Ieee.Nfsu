import Popup from 'reactjs-popup';
import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import CarouselDefault from "./EventCarousel"
/*const style={
  eventcontainer: "flex border-2 hover:shadow-xl w-3/4 my-16",
  contentcontainer:"p-4",
  coverimg: "w-60 p-4 rounded-lg",
  eventtitle: "font-bold text-xl p-2",
  eventtype: "text-gray-500 py-1",
  eventdescription: "font-light text-lg",
  eventlink: "text-blue-500 py-2",
  eventbutton: "p-4 mt-2 text-white hover:font-bold text-lg bg-[#00B5E2] rounded-xl"
}*/
const style = {
  eventcontainer: "flex flex-col sm:flex-row border-2 hover:shadow-xl w-full sm:w-3/4 my-4 sm:my-8 md:my-12 lg:my-16 p-4",
  contentcontainer: "p-4 flex-grow",
  coverimg: "w-full h-auto sm:w-full sm:h-auto p-4 rounded-lg overflow-hidden",
  eventtitle: "font-bold text-xl p-2",
  eventtype: "text-gray-500 py-1",
  eventdescription: "font-light text-lg",
  eventlink: "text-blue-500 py-2",
  eventbutton: "p-4 mt-2 text-white hover:font-bold text-lg bg-[#00B5E2] rounded-xl flex items-center justify-center",
  eventbutton_closed: "p-4 mt-2 text-white hover:font-bold text-lg bg-red-500 rounded-xl flex items-center justify-center"
};




const imglinks = {
  event1: "https://media.istockphoto.com/id/1208738316/photo/abstract-geometric-network-polygon-globe-graphic-background.jpg?b=1&s=170667a&w=0&k=20&c=Ewa2JDeA8E9k9ch3IYWkSYdEkTEhyaMNfNLkClag-j4=",
  event2: ""
}

export default function Event_single(prop) {
   const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const Event = JSON.parse(prop.Event);
  //console.log(Event.imgarr)
  return (
    <>  <div className={style.eventcontainer} >
      <img src={Event.Eimglink} className={style.coverimg} />
      <div className={style.contentcontainer}>
        <h1 className={style.eventtitle} >{Event.Ename}</h1>
        <p className={style.eventtype} >{Event.Etype}</p>
        <p className={style.eventdescription} >{Event.Edescription}</p>
        <br />
        <a href={Event.Eformlink} ><button className={
          Event.Estatus==="Done"?style.eventbutton_closed:style.eventbutton 
        }
        onClick={() => setOpen(o => !o)}>{Event.Estatus}</button></a>
      </div>
    </div>

      {/* popup for events */}
      <Popup open={open}  closeOnDocumentClick onClose={closeModal}>
        <div className="modal h-auto w-auto">
          <a className="" onClick={closeModal}>
            &times;
          </a>
          <h1 className="text-2xl font-semibold text-center text-[#00B5E2] p-2 ">{Event.Ename}</h1>
          <p className="text-lg p-4 overflow-auto">
          {Event.Estatus==="Done"?
          <div><p className="text-2xl text-gray-400 pb-2">Event Report</p><p>{Event.Ereport}</p><CarouselDefault imgarr={Event.imgarr}/></div>:
          <p><p  className="text-xl text-gray-400 pb-2">About Event</p>{Event.Edescription}</p>}
          </p>
        </div>
      </Popup>
    </>
  )
}