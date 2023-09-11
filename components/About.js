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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <hr/>
    </div>
  );
}
