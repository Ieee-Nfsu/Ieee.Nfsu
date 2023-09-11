import Event_back from "../components/Event_back"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Blog_single from "../components/Blog_single"
// import {useRouter} from 'next/router';
import {useState,useEffect} from "react";
import {db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";


const style = {
  title: "text-5xl md:text-8xl absolute top-1/3 inset-x-1/3 md:inset-x-1/6 font-semibold text-white text-center",
  eventscontainer: "flex flex-col justify-center items-center",

}
export default function Blogs() {
     const [Blogs,setBlogs] = useState([]);


  const fetchBlogs = async () => {
       
    await getDocs(collection(db, "Blog"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setBlogs(newData);                
            console.log(Blogs);
            console.log(newData);
        })
   
  }
  useEffect(()=>{
    fetchBlogs();
}, [])


const blog = Blogs.map((blog) =>
  <Blog_single key={(blog.id).toString()} Blog={JSON.stringify(blog)} />
);
  
  return <div>
    <Navbar />
    <div className="bg-black h-auto relative">
      <h1 className={style.title}>Blog</h1>
      <Event_back />
    </div>
    <div className={style.eventscontainer} >
      {blog}
    </div>

    <Footer />
  </div>
}

