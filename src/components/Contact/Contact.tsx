import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
  const form: any = useRef();

  const sendEmail = (event: any) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_x2th2fc',
        'template_e3p7s9b',
        form.current,
        'grjzy8ufo72-jSoDH'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='maxContainer'>
      <h1 className='contactTitle'>Contact Me</h1>
      <div className='formContainer'>
        <form ref={form} onSubmit={sendEmail}>
          <div className='formItem'>
            <label className='label'>Name</label>
            <input type="text" name="user_name" />
          </div>

          <div className='formItem'>
            <label className='label'>Email</label>
            <input type="email" name="user_email" />
          </div>

          <div className='formItem'>
            <label className='label'>Message</label>
            <textarea className='textArea' name="message"/>
          </div>
            <input className='input' type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
