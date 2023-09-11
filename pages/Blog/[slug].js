import { doc, getDoc } from "firebase/firestore"
import {db } from "../../firebase";
import {useRouter} from 'next/router';
import {useEffect,useState} from "react";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const imglinks = {
  event1: "https://media.istockphoto.com/id/1208738316/photo/abstract-geometric-network-polygon-globe-graphic-background.jpg?b=1&s=170667a&w=0&k=20&c=Ewa2JDeA8E9k9ch3IYWkSYdEkTEhyaMNfNLkClag-j4=",
  event2: "https://1000logos.net/wp-content/uploads/2019/03/IEEE-symbol-768x432.jpg"
}

const Blog=()=>{
  const [Data,setData] = useState([]);

 
  
  const dbfetch=async ()=>{
   const ID= (window.location.pathname).slice(6);
  //console.log(window.location.pathname);
  // console.lg(typeof(ID));
  console.log(ID);
  //const docRef = doc();
  const ref=doc(db,'Blog',ID);
  try {
    const docSnap = await getDoc(ref);
    if(docSnap.exists()) {
        setData(docSnap.data());
        console.log(Data);
    } else {
        console.log("Document does not exist")
    }

      } catch(error) {
    console.log(error)
                      }

}//end of dbfetch
  useEffect(()=>{
    dbfetch();
}, [])
  const style={
    contentcontainer:"flex flex-col items-center bg-slate-800 text-white pt-10",
    title:"text-center text-5xl font-bold tracking-wide w-3/4",
    authorcontainer:" flex gap-4 mt-4 mb-2 items-center cursor-pointer",
    authorimage:"rounded-full h-10",
    pill:"bg-gray-400 p-2 mt-2 mb-4 border-2 rounded-full",
    bannerimage:"w-cover m-5 ",
    content:" mt-2 mb-10 w-3/4 tracking-normal leading-loose text-xl",
    reference:"mt-2 mb-1 text-2xl font-semibold",
    referencecontent:"",
  }
  return(
    <div className="">
    <Navbar/>
    <div className={style.contentcontainer}>
    <h1 className={style.title}>{Data.title}</h1>
    <a className={style.authorcontainer}> 
      <img className={style.authorimage} src={Data.author_imglink} alt="document not found"/>
      <p className={style.authorname} >{Data.author_name}</p>
    </a>
    <div><button className={style.pill}>{Data.type}</button></div>
    <img className={style.bannerimage} src={Data.front_link}/>
    <p className={style.content}>{Data.date}</p>
    <hr/>
    <p className={style.reference}>Reference</p>
    <p className={style.referencecontent}>References and materials</p>
    </div>
    <Footer/>
    </div>
  )
}

export default Blog