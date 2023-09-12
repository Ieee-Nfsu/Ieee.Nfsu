
import Image from "next/image";
const style = {
  footerContainer: "bg-black mt-24 pb-2"
}
export default function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className=" mx-auto py-14 mb-28">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:justify-between text-white md:mx-auto space-y-5 mx-auto max-w-lg md:max-w-none">
          <div className="flex flex-row gap-4 w-full min-w-fit md:w-1/4 md:mx-auto">
            <div className="flex pt-4 text-white">

            </div>
            <div className="flex flex-col md:justify-center">
              <h1 className="heading text-xl font-bold">IEEE</h1>
              <h1 className="heading text-xl font-bold">NFSU Gandhinagar</h1>
              <h2 className="heading text-md font-bold text-gray-500">
                student branch
              </h2>
              <p className="text-sm text-gray-500 mt-3">
                NFSU, Main Campus, <br />
                Sector-9, Gandhinagar-382007
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 md:justify-between w-full md:w-1/3 md:mx-auto">
            <div className="flex flex-col w-full md:w-1/2 mb-5 md:mb-5">
              <h1 className="heading font-bold">Associated to</h1>
              <div className="flex flex-wrap gap-1 md:flex-col space-x-5 md:space-x-0">
                <a
                  href="https://www.nfsu.ac.in/"
                  target="_blank"
                  className="text-gray-500"
                >
                  <span className="link link-underline link-underline-black">
                    NFSU
                  </span>
                </a>
                <a
                  href="https://www.ieee.org"
                  target="_blank"
                  className="text-gray-500"
                >
                  <span className="link link-underline link-underline-black">
                    IEEE
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <h1 className="heading font-bold">Find us on</h1>
              <div className="flex flex-wrap md:flex-col md:space-x-0 gap-1">
                <a
                  href="#"
                  target="_blank"
                  className="pr-5 md:pr-0 text-gray-500"
                >
                  <span className="link link-underline link-underline-black">
                    Instagram
                  </span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="pr-5 md:pr-0 text-gray-500"
                >
                  <span className="link link-underline link-underline-black">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="pr-5 md:pr-0 text-gray-500"
                >
                  <span className="link link-underline link-underline-black">
                    Twitter
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/5">
            <h1 className="heading font-bold">Official Contact</h1>
            <p className="text-gray-500">
              <a href="mailto:">mailidof branch</a>
            </p>

          </div>
        </div>
      </div>
      <hr className="border-gray-600 opacity-50 rounded-full mx-auto linejoin" />
      <p className="text-center py-3 pb-5 text-gray-600 opacity-50 heading2">
        <a href="https://github.com/ryuk-jayant">© 2023 | Made by jkj-ryuk  </a>
      </p>

    </div>
  )
}