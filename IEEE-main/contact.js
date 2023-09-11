import github from "./github.png"
import discord from "../images/disco.png"
import instagram from "./instagram.png"
import linkdin from "./linkedin.png"
import { useRef } from "react"
import emailjs from '@emailjs/browser'

export default function contact() {

   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ptnfsjf', 'template_dsb5dle', form.current, 'LI8qJ4q1ayDY5TF_I')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  
  return (
    <div className="">
      <div id="Connect" className="text-4xl tracking-widest font-semibold text-center">
        <h1>Contact Us</h1>

      </div>
      <main>
        <div className="container">

          <form ref={form} onSubmit={sendEmail}>
            <div className="input-group">
              <input type="text" id="name" name="name" required="" />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="input-group">
              <input type="email" id="email" name="email" required="" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-group">
              <textarea id="message" name="message" required="" defaultValue={""} />
              <label htmlFor="message">Message</label>
            </div>
            <div>
              <input type="submit" defaultValue="Send Message" />
            </div>
          </form>


          {/* <div className="social-links">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Github</p>
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkdin} alt="LinkedIn" />
               <p>Github</p> 
            </a>
            <a
              href="https://discord.gg/your-discord-invite-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={discord} />
               <p>Github</p> 
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
               <img src={instagram} alt="Instagram" /> 
              <p>Github</p>
            </a>
          </div> */}
        </div>
      </main>
    </div>

  )
}