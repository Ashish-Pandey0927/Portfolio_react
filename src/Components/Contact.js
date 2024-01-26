import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <section class="contact" id="contact">
      <h1 class="heading">Contact <span>Me!</span></h1>

      <form action="#">
        <div class="input-box">
          <input type="text" name="Name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>

        <div class="input-box">
          <input
            type="number"
            name="Mobile"
            placeholder="Mobile Number"
            required
          />
          <input
            type="text"
            name="email -sub"
            placeholder="Email Subject"
            required
          />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <input type="submit" value="Send Message" class="btn" />
      </form>
    </section>
  )
}

export default Contact