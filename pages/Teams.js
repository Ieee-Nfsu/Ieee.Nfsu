import Event_back from "../components/Event_back"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


var TeamMembers=[
  {
  "Name":"Aditi Kulkarni",
  "Position":"Chair",
  "Linkdin":"https://www.linkedin.com/in/aditi-kulkarni-46715b215",
  "github":"https://github.com/Adicodin",
  "mail":"mailto:aditik@ieee.org",
  "profile_url":"https://media.licdn.com/dms/image/D4D03AQGQy2KEJdvwOA/profile-displayphoto-shrink_100_100/0/1692795142298?e=1700092800&v=beta&t=Q7UgCArPuGPxExz2uvp7nUenq8uO-0gG0Yg6eVkEwwE"
},
    {
  "Name":"Kushagra Trivedi",
  "Position":"Vice Chair",
  "Linkdin":"",
  "github":"https://github.com/ryuk-jayant",
  "mail":"",
  "profile_url":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
},  
    {
  "Name":"Jayant Dubey",
  "Position":"Secretary",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://avatars.githubusercontent.com/u/97748684?v=4"
},

    {
  "Name":"Kunal choudhary",
  "Position":"Web Lead",
  "Linkdin":"www.linkedin.com/in/kunal-choudhary-23aa81224",
  "github":"https://github.com/kunal0x00",
  "mail":"mailto:kunalchoudhary@ieee.org",
  "profile_url":"https://media.licdn.com/dms/image/D5603AQFUZrgbsH43Vg/profile-displayphoto-shrink_200_200/0/1677675047276?e=1699488000&v=beta&t=f1NhynYQkiKdvz6bMZVzya1TkQhEydwCQQZVkMl_3Ag"
},
    {
  "Name":"Supriy Rathi",
  "Position":"Program Committe",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://media.licdn.com/dms/image/D4E03AQHrmnFAkRLvFQ/profile-displayphoto-shrink_100_100/0/1681197925447?e=1700092800&v=beta&t=Smguh437wjk8dbuc4nEkK0p0BUSWDzcl0GAOea8_Jd4"
},
  {
  "Name":"Krishita Choksi",
  "Position":"Program Committe",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://media.licdn.com/dms/image/D4D03AQGcG0md71vrzQ/profile-displayphoto-shrink_100_100/0/1687669141686?e=1700092800&v=beta&t=CcCkQ3qss1weigLjJkW3o30DiiUfiMygfgoabZc7gBE"
},
  {
  "Name":"Varshila Tamboli",
  "Position":"Program Committe",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://media.licdn.com/dms/image/D4D03AQEGEPTHoagqpg/profile-displayphoto-shrink_100_100/0/1687629777596?e=1700092800&v=beta&t=OWyv-85_nHPSg5hEjk9T77X9zJ77qjtRTsUmJwY14Xc"
},
  {
  "Name":"Taneesha Shah",
  "Position":"Program Committe",
  "Linkdin":"http://linkedin.com/in/taneesha-shah-b7356b236",
  "github":"http://github.com/tan0001",
  "mail":"mailto:taneesha.shah@ieee.org",
  "profile_url":"https://media.licdn.com/dms/image/C4E03AQEDXKwRSFYAXg/profile-displayphoto-shrink_100_100/0/1649430722337?e=1700092800&v=beta&t=Zhlwahiiz7LyDgf0B-JnolQI1uSVPgpzw0KYhGS-LJo"
},
  {
  "Name":"Soumitri Barury",
  "Position":"Program Committe",
  "Linkdin":"",
  "github":"https://github.com/SoumitriB",
  "mail":"mailto:soumitri@ieee.org",
  "profile_url":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
},
  {
  "Name":"Abhishek Kanzariya",
  "Position":"Program Committe",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://media.licdn.com/dms/image/D4D35AQFPTPGgbnei-g/profile-framedphoto-shrink_100_100/0/1694204899881?e=1694952000&v=beta&t=w4R38CMqgK1oW3aHnhhsvhlomlrscl9KAOiA103FiZk"
},
  {
  "Name":"Johana Sallangi",
  "Position":"Program Committe",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
},
  {
  "Name":"Belinda Grace",
  "Position":"Program Committe",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
},
  {
  "Name":"Aarushi Taneja",
  "Position":"Finance Committe",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://media.licdn.com/dms/image/D4D03AQGk19mEp4aTAw/profile-displayphoto-shrink_400_400/0/1685706546602?e=1700092800&v=beta&t=ZwoozTkz0bDEVbBfyy1Rk-xhrWoe7OUYNHbPB78mfb8"
},
  {
  "Name":"Khushi Bansal",
  "Position":"Finance Committe",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
},
    {
  "Name":"Nitish Deshpande",
  "Position":"Media and Membership Committe",
  "Linkdin":"https://www.linkedin.com/in/nitish-deshpande-a095341ba/",
  "github":"https://github.com/nitishdeshpande07",
  "mail":"mailto:nitishdeshpande07@ieee.org",
  "profile_url":"https://media.licdn.com/dms/image/C4D03AQEtGveK8FO88w/profile-displayphoto-shrink_200_200/0/1662822080072?e=1699488000&v=beta&t=x5NMIBw7qioCUwjPoovTmnxY8mKFL2UUCgW1P1WKWts"
},
    {
  "Name":"Achal Patil",
  "Position":"Media Committe",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://media.licdn.com/dms/image/C4D03AQHWegBRhX-9Aw/profile-displayphoto-shrink_100_100/0/1645037256026?e=1700092800&v=beta&t=YeAxgmTFAKgJcg77xvrOe-ZROAQge581hFlBc-zqFjI"
},
    {
  "Name":"Sneh singh",
  "Position":"Member Committe",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"https://media.licdn.com/dms/image/D4D03AQFdthqrjT0UVA/profile-displayphoto-shrink_100_100/0/1675163271034?e=1700092800&v=beta&t=7YyspsdaxVRz-9jqTRfEMOrKT7JNTrTL_K-jCCQXTgA"
},
    {
  "Name":"Johana Sallangi",
  "Position":"Membership and Content & Design Committe",
  "Linkdin":"",
  "github":"",
  "mail":"",
  "profile_url":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
},
  
];

  
const style = {
  title: "text-8xl font-semibold text-white text-center absolute top-1/3 inset-x-1/3",
  cardscontainer:"mx-20 mt-16 gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center md:justify-around justify-center",
  centerLastTwo: "md:justify-around justify-center md:justify-center",
  single_cardcontainer:" text-white w-[330px] flex flex-col items-center shadow-black hover:shadow-xl bg-slate-800 rounded-2xl overflow-hidden ",
  imgcontainer:" flex flex-col justify-center items-center rounded-b-full p-8 bg-[#9ca3af] ",
  img:"h-32 w-32 rounded-full ",
  pos:"text-center pt-2 text-xl",
  name:"text-3xl",
  description:"",
  linkcontainer:"gap-3 flex",
  links:""
}


export default function Teams() {
  return <div>
    <Navbar/>
    <div className="bg-black  h-auto relative">
      <h1 className={style.title}>Our Team</h1>
      <Event_back />
    </div>
       {/*card container and cards are rendered using map of te */}
    <div className={`${style.cardscontainer} ${style.centerLastTwo}`}>
    {TeamMembers.map((member)=>{
      return(<>
    <div className={style.single_cardcontainer}>
      <div className={style.imgcontainer}>
        <img className={style.img} src={member.profile_url}/>
        <p className={style.pos}>{member.Position}</p>
      </div>
      {/* <hr style={{color:"#f00",height:"5px"}}/> */}
      <div className={style.name}>{member.Name}</div>
      <div className={style.linkcontainer}>
        <a href={member.Linkdin}>Linekdin</a>
        <a href={member.github}>Github</a>
        <a href={member.mail}>Mail</a>
      </div>
     </div>
   
      </>);
  })}
       </div>
    <Footer/>
  </div>
}

