import { VscAccount } from "react-icons/vsc";
import { VscCalendar } from "react-icons/vsc";
import Link from "next/link";
const Featured_Blog=[
  {author_imglink: "https://media.licdn.com/dms/image/C4E03AQH4XuERiRcggA/profile-displayphoto-shrink_100_100/0/1567765138271?e=1700092800&v=beta&t=c1YG6s8HUwQB-Qyhfg_40Rtp8JDr4SBWk6sHtj7wlJU", 
  id: "YAFZ0FqaMa5EQUBoqS2o", 
  short_description: "In the ever-evolving landscape of technology, the IEEE Student Branch at the National Forensic Sciences University (NFSU) stands as a beacon of innovation and knowledge dissemination. Nestled within a prestigious institution renowned for its expertise in forensic sciences, this student branch is a hub where cybersecurity, digital forensics, and cutting-edge developments converge to shape the future of both technology and forensic investigations..",
  author_name: "Ahlad Kumar", 
    title: "Why Ieee-Nfsu", 
    date:"10/9/23",
    type: "Motivation" ,
    },
  {
  author_imglink: "https://avatars.githubusercontent.com/u/97748684?v=4", 
id: "PkCFa4725Jb4mIQpeqNJ", 
short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
author_name: "JkJ-ryuk", 
  title: "Test Blog", 
  date:"2/6/23",
  type: "Algorithms" ,
  }
]


const style = {
  title: "text-3xl font-semibold tracking-widest text-center mt-24",
  blogscontainer: "flex flex-wrap justify-center  gap-10 my-16",
  blogcontainer: " w-5/12  border-2 hover:shadow-2xl shadow-black",
  hover:"shadow-xl rounded-xl",
  branch: "text-gray-500 p-2",
  Heading: "text-lg font-semibold text-[#00B5E2] py-2 px-1",
  authorcontainer: "flex gap-2 items-center p-2",
  author: "font-light text-gray-600",
  author_img:"h-10 rounded-full",
  sampletext: "text-[#00B5E2] p-2 line-clamp-3 ",
  morebutton: "py-2 px-4 bg-[#00B5E2] hover:font-bold rounded-full hover:tracking-widest hover:bg-[#00629B] hover:text-white"
}

function One_sample(prop){
  const blog=(prop.Blog);
  return(
    <>
      <a href={"/Blog/"+blog.id} className={style.blogcontainer}>
          <p className={style.branch}>{blog.type}</p>
          <p className={style.Heading}>{blog.title}</p>
          <div className={style.authorcontainer}>
            <VscCalendar />
            <p className={style.author}>{blog.date}</p>
          </div>
          <p className={style.sampletext}>{blog.short_description}</p>
          <div className={style.authorcontainer}>
            <img className={style.author_img} src={blog. author_imglink}/>
            <p className={style.author}>By {blog.author_name}</p>               </div>
        </a>
    </>
  )
}
const blog=Featured_Blog.map((blog)=>{
  return (<One_sample Blog={blog}/>)
})

export default function SampleBlog() {
  
  return (
    <div>
      <h1 className={style.title}> Featured Blogs</h1>
      <div className={style.blogscontainer}>
        {blog}
      </div>
      <div className="flex justify-center m-4">

        <button className={style.morebutton}>
          <Link href="/Blog">
            See More
          </Link>
        </button>

      </div>
      <hr />
    </div>

  )
}