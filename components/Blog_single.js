import Link from "next/link"
import { useRouter } from 'next/router';
const style = {
  eventcontainer: "flex flex-col sm:flex-row border-2 hover:shadow-xl w-full sm:w-3/4 my-4 sm:my-8 md:my-12 lg:my-16 p-4",
  contentcontainer: "p-4 flex-grow",
  coverimg: "w-full h-auto sm:w-full sm:h-auto p-4 rounded-lg overflow-hidden",
  eventtitle: "font-bold text-xl p-2",
  eventtype: "text-gray-500 py-1",
  eventdescription: "font-light text-lg",
  eventlink: "text-blue-500 py-2",
  eventbutton: "p-4 mt-2 text-white hover:font-bold text-lg bg-[#00B5E2] rounded-xl flex items-center justify-center",
  authorname: "text-gray-500",
  authorimg: "h-10 rounded-full"
}
// const imglinks = {
//   event1: "https://media.istockphoto.com/id/1208738316/photo/abstract-geometric-network-polygon-globe-graphic-background.jpg?b=1&s=170667a&w=0&k=20&c=Ewa2JDeA8E9k9ch3IYWkSYdEkTEhyaMNfNLkClag-j4=",
//   event2: ""
// }

export default function Blog_single(prop) {
  const Blog = JSON.parse(prop.Blog);
  const router = useRouter()
  console.log(Blog);
  // function sendData(Blog){
  //   console.log("hi");
  //   router.push({
  //   pathname:"/Blog/[slug]",
  //   query:{
  //     slug:Blog.title,
  //     Data:Blog.id
  //   }
  //   })
  //   } 
  //{/* href={"/Blog/" + Blog.id} */}

  return (
    <>
      <a
        type="button"
        href={"Blog/"+Blog.id}
        className={style.eventcontainer} >
        <img src={Blog.banner_imglink} className={style.coverimg} />
        <div className={style.contentcontainer}>
          <div className="flex items-center gap-4">
            <img src={Blog.author_imglink} className={style.authorimg} />
            <p className={style.authorname}>By {Blog.author_name}</p>
          </div>
          <h1 className={style.eventtitle} >{Blog.title}</h1>
          <p className={style.eventtype} >{Blog.type}</p>
          <p className={style.eventdescription} >{Blog.short_description}</p>
          <a className={style.eventlink}>Click for more {">>"}</a>
          <br />
        </div>
      </a>
    </>
  )
}