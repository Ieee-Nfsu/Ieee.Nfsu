const style = {
  aboutcontainer: "mt-24",
  title:
    "text-3xl mb-10 font-semibold tracking-wider hover:underline text-center",
  text: "text-lg w-6/12 font-light text-center ",
};
export default function About() {
  return (
    <div id="Aboutus" className={style.aboutcontainer}>
      <h1 className={style.title}>About IEEE-NFSU</h1>
      <div className=" flex justify-center mb-20">
        <p className={style.text}>
          {" "}
          Welcome to the IEEE NFSU Student Branch website, where we unite the worlds of technology and cybersecurity. As a community of budding engineers and cybersecurity enthusiasts, our aim is to fuse these two critical fields.

We're on a mission to ignite a passion for technology, promote cybersecurity awareness, and empower the future leaders in this ever-evolving domain. Through interactive workshops, engaging events, and networking opportunities, we provide a platform for learning, collaboration, and personal growth.

Whether you're a seasoned tech expert or just embarking on your cybersecurity journey, we invite you to join us. Together, we're at the forefront of advancing innovation and safeguarding the digital landscape. Get involved and help us merge technology and cybersecurity seamlessly within the IEEE NFSU Student Branch community!
        </p>
      </div>
      <hr/>
    </div>
  );
}
