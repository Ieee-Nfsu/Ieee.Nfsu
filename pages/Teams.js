import Event_back from "../components/Event_back"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

 var Patron_list=[
     {
  "Name":"DR. J. M. VYAS",
  "Position":"Chief Patron",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://www.nfsu.ac.in/assets/img/team/vc.jpg"
},
      {
  "Name":"Prof. (Dr.) S. O. Junare",
  "Position":"Patron",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://beta.nfsu.ac.in//Uploads/Profile/153.jpg"
      },
     {
  "Name":"Prof. Naveen Chaudhary ",
  "Position":"Co-Patron",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://beta.nfsu.ac.in//Uploads/Profile/4.jpg"
},
   {
  "Name":"Dr. Digvijaysinh Rathod",
  "Position":"Convenor",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://beta.nfsu.ac.in//Uploads/Profile/5.jpg"
},
];
 var Branch_coun=[
     {
  "Name":"Dr. Ahlad Kumar",
  "Position":"Branch Counselor",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://lh3.googleusercontent.com/d/13VuagUVgfRvp_De6VAcgaZ6faAioSrCF"
},
      {
  "Name":"Dr. Vijeta Khare",
  "Position":"Branch Counselor",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://lh3.googleusercontent.com/d/1wTEzF6OK0ZKWYW1--LZnYyHhTn2baElr"
      },
     {
  "Name":"Dr. Nikunj",
  "Position":"Faculty Coordinator",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://lh3.googleusercontent.com/d/1WiC7Q2C0gxivOYMIdtD3FseJ-F_OflQ3"
},
];
var Executive_team=[
  {
  "Name":"Aditi Kulkarni",
  "Position":"Chair",
  "Linkdin":"https://www.linkedin.com/in/aditi-kulkarni-46715b215",
  "github":"https://github.com/Adicodin",
  "mail":"mailto:aditik@ieee.org",
"profile_url":"https://lh3.googleusercontent.com/d/1KucJAy8hNKFEVttA5DAsIoN_rA6eDgfG"
},
    {
  "Name":"Kushagra Trivedi",
  "Position":"Vice Chair",
  "Linkdin":"",
  "github":"https://github.com/ryuk-jayant",
  "mail":"",
  "profile_url":"https://lh3.googleusercontent.com/d/1ssthOZDuhiUa3rurGVSA5kZ0Y5NQqRFk"
},  
    {
  "Name":"Jayant Dubey",
  "Position":"Secretary",
  "Linkdin":"https://www.linkedin.com/in/Jayant-dubey/",
  "github":"https://github.com/ryuk-jayant",
  "mail":"mailto:jayant.dubey@ieee.org",
  "profile_url":"https://avatars.githubusercontent.com/u/97748684?v=4"
},
  {
  "Name":"Khushi Bansal",
  "Position":"Treasurer",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://lh3.googleusercontent.com/d/1-OYUH_8BDuvSBfWW0Ud1_oBYkxEyV6Ky"
},
];

var Program_team=[ 
  {
  "Name":"Kunal choudhary",
  "Position":"",
  "Linkdin":"www.linkedin.com/in/kunal-choudhary-23aa81224",
  "github":"https://github.com/kunal0x00",
  "mail":"mailto:kunalchoudhary@ieee.org",
  "profile_url":"https://lh3.googleusercontent.com/d/1Xdx9w4Zp6pNhbNRxgJCb-WCkxezIYD4j"
},
  {
  "Name":"Supriy Rathi",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://lh3.googleusercontent.com/d/1U7gDwDKQVmy-w8C1SiJAk0T-BrVbghya"
},
  {
  "Name":"Krishita Choksi",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://lh3.googleusercontent.com/d/1Raj_AJ9kKXXyVy4RNrvGOIgVUQvk06Ye"
},

  {
  "Name":"Varshila Tamboli",
  "Linkdin":"",
  "github":"",
  "mail":"",
"profile_url":"https://lh3.googleusercontent.com/d/17DX4pPixhmmlv17j_Pv4eHYdQ6WuQuqP"
},
  {
  "Name":"Taneesha Shah",
  "Linkdin":"http://linkedin.com/in/taneesha-shah-b7356b236",
  "github":"http://github.com/tan0001",
  "mail":"mailto:taneesha.shah@ieee.org",
  "profile_url":"https://lh3.googleusercontent.com/d/14v_u6VouXTxUiT1nzrMiiVM3fa-kn6rD"
},
  {
  "Name":"Soumitri Barury",
  "Linkdin":"",
  "github":"https://github.com/SoumitriB",
  "mail":"mailto:soumitri@ieee.org",
  "profile_url":"https://lh3.googleusercontent.com/d/1f9vlFfgqrQLvjLeb9he0bGJ8yVLWAGrZ"
},
  
  {
  "Name":"Abhishek Kanzariya",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://lh3.googleusercontent.com/d/1Pp0xsfzd1kym2nhV9y4qytnjpj0qbzxU"
},
  {
  "Name":"Johana Sallangi",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://lh3.googleusercontent.com/d/1__gqShCnQfnVuV2LWcFdtYEDYQDVWtBH"
},
  {
  "Name":"Belinda Grace",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://lh3.googleusercontent.com/d/1_YsqChD4bOf1mBl_VxLN9B9ZsYGLKjiz"
},];
    
  var finance_team=[
      {
  "Name":"Khushi Bansal",
  "Position":"Treasurer",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://lh3.googleusercontent.com/d/1-OYUH_8BDuvSBfWW0Ud1_oBYkxEyV6Ky"
},
  {
  "Name":"Aarushi Taneja",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://lh3.googleusercontent.com/d/1RC8yBWxSxljmc_tAnJtDXorr3S3C6Xdo"
},
];
  var media_team=[
    {
  "Name":"Nitish Deshpande",
  "Linkdin":"https://www.linkedin.com/in/nitish-deshpande-a095341ba/",
  "github":"https://github.com/nitishdeshpande07",
  "mail":"mailto:nitishdeshpande07@ieee.org",
  "profile_url":"https://lh3.googleusercontent.com/d/1RNOJ7_U7XwRAh5DPr5-nEm3bgYzuOfwF"
},
    {
  "Name":"Achal Patil",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://lh3.googleusercontent.com/d/12dTwfRfekw0BjbfgmUJV51QB6u71yCEr"
},];

var membership_team=[

     {
  "Name":"Nitish Deshpande",
  "Linkdin":"https://www.linkedin.com/in/nitish-deshpande-a095341ba/",
  "github":"https://github.com/nitishdeshpande07",
  "mail":"mailto:nitishdeshpande07@ieee.org",
  "profile_url":"https://lh3.googleusercontent.com/d/1RNOJ7_U7XwRAh5DPr5-nEm3bgYzuOfwF"
},
    {
  "Name":"Sneh singh",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://lh3.googleusercontent.com/d/1XmKie6NQlGWxnOS1kQj6Ta3DsggHH31b"
},

   {
  "Name":"Johana Sallangi",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://lh3.googleusercontent.com/d/1__gqShCnQfnVuV2LWcFdtYEDYQDVWtBH"
}
];

  
const style = {
  title: "text-8xl font-semibold text-white text-center absolute top-1/3 md:inset-x-1/3 text-center",
  short_title:"text-4xl text-[#006ba1] font-bold text-center mt-4",
  cardscontainer:"mx-4 mt-16 gap-16 flex flex-wrap items-center md:justify-around justify-center",
  single_cardcontainer:" text-white w-[300px] flex flex-col items-center shadow-black hover:shadow-xl bg-[#002855] rounded-2xl overflow-hidden ",
  imgcontainer:" flex flex-col justify-center items-center rounded-b-full p-6 bg-[#009CA6] ",
  img:"h-36 w-36 rounded-full ",
  pos:"text-center pt-2 text-xl",
  name:"text-3xl",
  description:"",
  linkcontainer:"gap-3 flex",
  links:""
}
const style_for_paterons={
  short_title:"text-4xl text-[#006ba1] font-bold text-center mt-4",
  cardscontainer:"mx-4 mt-16 gap-16 flex flex-wrap items-center md:justify-around justify-center",
  single_cardcontainer:"h-96 min-h-fit text-white w-[300px] flex flex-col items-center shadow-black hover:shadow-xl bg-[#002855] rounded-2xl overflow-hidden ",
  imgcontainer:" flex flex-col justify-center items-center rounded-b-full p-6 bg-[#FFA300] ",
  img:"h-36 w-36 rounded-full ",
  pos:"text-center mt-2 text-xl max-w-lg",
  name:"text-3xl max-w-xl m-4 text-center",
  description:"",
  linkcontainer:"p-2 gap-3 flex",
  links:""
}

const style_for_counslor={
    imgcontainer:" flex flex-col justify-center items-center rounded-b-full p-7 bg-[#009CA6] ",
   img:"h-36 w-36 rounded-full ",
  pos:"text-center pt-2 text-lg",
  name:"text-3xl p-2",
}

// export default function Teams() {#9ca3af
//   return <div>
//     <Navbar/>
//     <div className="bg-black  h-auto relative">
//       <h1 className={style.title}>Our Team</h1>
//       <Event_back />
//     </div>
//        {/*card container and cards are rendered using map of te */}
//     <div className={`${style.cardscontainer} ${style.centerLastTwo}`}>
//     {TeamMembers.map((member)=>{
//       return(<>
//     <div className={style.single_cardcontainer}>
//       <div className={style.imgcontainer}>
//         <img className={style.img} src={member.profile_url}/>
//         <p className={style.pos}>{member.Position}</p>
//       </div>
//       {/* <hr style={{color:"#f00",height:"5px"}}/> */}
//       <div className={style.name}>{member.Name}</div>
//       <div className={style.linkcontainer}>
//         <a href={member.Linkdin}>Linekdin</a>
//         <a href={member.github}>Github</a>
//         <a href={member.mail}>Mail</a>
//       </div>
//      </div>
   
//       </>);
//   })}
//        </div>
//     <Footer/>
//   </div>
// }

export default function Teams() 
{
  return <div>
    <Navbar/>
    <div className="bg-black  h-auto relative">
      <h1 className={style.title}>Our Team</h1>
      <Event_back />
    </div>

      {/* Branch Patrons */}
      <div>
        <h1 className={style_for_paterons.short_title}>Patrons</h1>
        <hr className="h-3 text-gray-700"/>
         <div className={`${style_for_paterons.cardscontainer}`}>
     {Patron_list.map((member)=>{
      return(<>
    <div className={style_for_paterons.single_cardcontainer}>
      <div className={style_for_paterons.imgcontainer}>
        <img className={style_for_paterons.img} src={member.profile_url}/>
        <p className={style_for_paterons.pos}>{member.Position}</p>
      </div>
      {/* <hr style={{color:"#f00",height:"5px"}}/> */}
      <div className={style_for_paterons.name}>{member.Name}</div>
      <div className={style_for_paterons.linkcontainer}>
        
      </div>
     </div>
   
      </>);
  })}
       </div>
      </div>

    
     {/* Branch Heads */}
      <div>
        <h1 className={style.short_title}>Faculty Advisors</h1>
        <hr className="h-3 text-gray-700"/>
         <div className={`${style.cardscontainer}`}>
     {Branch_coun.map((member)=>{
      return(<>
    <div className={style.single_cardcontainer}>
      <div className={style_for_counslor.imgcontainer}>
        <img className={style_for_counslor.img} src={member.profile_url}/>
        <p className={style_for_counslor.pos}>{member.Position}</p>
      </div>
      {/* <hr style={{color:"#f00",height:"5px"}}/> */}
      <div className={style_for_counslor.name}>{member.Name}</div>
      <div className={style.linkcontainer}>
        
      </div>
     </div>
   
      </>);
  })}
       </div>
      </div>
      {/* Executive commitee  */}
      <div>
        <h1 className={style.short_title}>Executive Committee</h1>
        <hr className="h-3 text-gray-700"/>
         <div className={`${style.cardscontainer} ${style.centerLastTwo}`}>
     {Executive_team.map((member)=>{
      return(<>
    <div className={style.single_cardcontainer}>
      <div className={style.imgcontainer}>
        <img className={style.img} src={member.profile_url}/>
        <p className={style.pos}>{member.Position}</p>
      </div>
      {/* <hr style={{color:"#f00",height:"5px"}}/> */}
      <div className={style.name}>{member.Name}</div>
      <div className={style.linkcontainer}>
        <a href={member.Linkdin}>Linkedin</a>
        <a href={member.github}>Github</a>
        <a href={member.mail}>Mail</a>
      </div>
     </div>
   
      </>);
  })}
       </div>
      </div>
    {/*program Team*/}
     <div>
        <h1 className={style.short_title}>Program Committee</h1>
        <hr className="h-3 text-gray-700"/>
         <div className={`${style.cardscontainer} ${style.centerLastTwo}`}>
     {Program_team.map((member)=>{
      return(<>
    <div className={style.single_cardcontainer}>
      <div className={style.imgcontainer}>
        <img className={style.img} src={member.profile_url}/>
        <p className={style.pos}>{member.Position}</p>
      </div>
      {/* <hr style={{color:"#f00",height:"5px"}}/> */}
      <div className={style.name}>{member.Name}</div>
      <div className={style.linkcontainer}>
        <a href={member.Linkdin}>Linkedin</a>
        <a href={member.github}>Github</a>
        <a href={member.mail}>Mail</a>
      </div>
     </div>
   
      </>);
  })}
       </div>
      </div>

      {/*media Team*/}
     <div>
        <h1 className={style.short_title}>Media Committee</h1>
        <hr className="h-3 text-gray-700"/>
         <div className={`${style.cardscontainer} ${style.centerLastTwo}`}>
     {media_team.map((member)=>{
      return(<>
    <div className={style.single_cardcontainer}>
      <div className={style.imgcontainer}>
        <img className={style.img} src={member.profile_url}/>
        <p className={style.pos}>{member.Position}</p>
      </div>
      {/* <hr style={{color:"#f00",height:"5px"}}/> */}
      <div className={style.name}>{member.Name}</div>
      <div className={style.linkcontainer}>
        <a href={member.Linkdin}>Linkedin</a>
        <a href={member.github}>Github</a>
        <a href={member.mail}>Mail</a>
      </div>
     </div>
   
      </>);
  })}
       </div>
      </div>

    
    {/*Finance Team*/}
     <div>
        <h1 className={style.short_title}>Finance Committee</h1>
        <hr className="h-3 text-gray-700"/>
         <div className={`${style.cardscontainer} ${style.centerLastTwo}`}>
     {finance_team.map((member)=>{
      return(<>
    <div className={style.single_cardcontainer}>
      <div className={style.imgcontainer}>
        <img className={style.img} src={member.profile_url}/>
        <p className={style.pos}>{member.Position}</p>
      </div>
      {/* <hr style={{color:"#f00",height:"5px"}}/> */}
      <div className={style.name}>{member.Name}</div>
      <div className={style.linkcontainer}>
        <a href={member.Linkdin}>Linkedin</a>
        <a href={member.github}>Github</a>
        <a href={member.mail}>Mail</a>
      </div>
     </div>
   
      </>);
  })}
       </div>
      </div>

    
     {/*Membership Team*/}
     <div>
        <h1 className={style.short_title}>Membership Committee</h1>
        <hr className="h-3 text-gray-700"/>
         <div className={`${style.cardscontainer} ${style.centerLastTwo}`}>
     {membership_team.map((member)=>{
      return(<>
    <div className={style.single_cardcontainer}>
      <div className={style.imgcontainer}>
        <img className={style.img} src={member.profile_url}/>
        <p className={style.pos}>{member.Position}</p>
      </div>
      {/* <hr style={{color:"#f00",height:"5px"}}/> */}
      <div className={style.name}>{member.Name}</div>
      <div className={style.linkcontainer}>
        <a href={member.Linkdin}>Linkedin</a>
        <a href={member.github}>Github</a>
        <a href={member.mail}>Mail</a>
      </div>
     </div>
   
      </>);
  })}
       </div>
      </div>
    
    <Footer/>
  </div>
  
}