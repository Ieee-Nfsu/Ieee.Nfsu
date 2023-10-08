import Event_back from "../components/Event_back"
import Image from "next/image"
import Link from "next/link"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Contactus from "../components/Contactus"
import Event_single from "../components/Event_single"
//import past_Event_single from "../components/Past_Event"
import {useState,useEffect} from "react";
import {db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
const style = {
 title: "text-5xl md:text-8xl absolute top-1/3 inset-x-1/3 md:inset-x-1/6 font-semibold text-white text-center",
  eventscontainer: "flex flex-col justify-center items-center",
  centerbutton:"flex justify-center mt-4",
  bigbutton:"p-3 text-white bg-[#00B5E2] font-semibold border-2 text-center rounded-xl hover:shadow-xl hover:tracking-wide",

  suggtitle:" pt-3 text-center text-3xl font-semibold ",
}

export default function Events() {

  const [Events,setEvents] = useState([]);
  const [pastEvent,setPastEvent]=useState([])

  const fetchEvent = async () => {
       
    await getDocs(collection(db, "EVENTS"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setEvents(newData);                
            //console.log(Events);
            //console.log(typeof(newData));
        })
  }
  useEffect(()=>{
    fetchEvent();
}, [])


const event = Events.map((event) =>
  <Event_single key={(event.Eid).toString()} Event={JSON.stringify(event)} />
);


  
  return (<div>
     <Navbar/>
    <div className="bg-black h-auto relative">
       <h1 className={style.title}>Our Events</h1>
      <Event_back />
    </div>
    {/* <div className={style.centerbutton}>
      <Link href="/">
      <button className={style.bigbutton}>view in Calender</button>
      </Link>
    </div> */}
    <div className={style.eventscontainer} >
      {event}
    </div>
    <hr/>
    <div>
    <h1 className={style.suggtitle}>Event Suggestions</h1>
    <Contactus/>
    </div>
    <Footer/>
  </div>
  )
}