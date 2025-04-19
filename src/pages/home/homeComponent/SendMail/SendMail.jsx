import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const SendMail = () => {

    const emailref=useRef()
    const messageref=useRef()

    emailjs.init(import.meta.env.VITE_USER_API_KEY); // Get this from emailjs.com dashboard

const sendEmail = (email,message) => {
  emailjs.send(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID, {
    name: 'Rifat',
    email: email,
    message: message,
  })
  .then((result) => {
    // console.log('Email sent!', result.text);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Success! Please wait to get response`,
      showConfirmButton: false,
      timer: 1500
    });

    emailref.current.value=" "
    messageref.current.value=" "
  }, (error) => {
    console.error('Email failed...', error);
  });
};


    const handleSendMaiil=()=>{
            const email=emailref.current.value;
            const message=messageref.current.value;

            // console.log(email,message);
            sendEmail(email,message)
    }





  return (
    <div className="py-20">
      <h2 className="text-3xl text-center mb-10">Send Mail</h2>
      <div>
        <div className="card bg-[#3F3F46] w-full md:w-3/5 max-w-3xl mx-auto shrink-0 shadow-2xl">
          <div className="card-body w-full">
            <fieldset className="fieldset">
              <input ref={emailref} type="email" className="input md:w-3/5 mx-auto text-black" placeholder="your email" />

              <textarea ref={messageref} className="textarea w-full my-5 text-black" placeholder="Write your message..."></textarea>{" "}
              
              <button onClick={handleSendMaiil} className="btn hover:bg-blue-500 bg-green-500 text-white mt-4">Send Mail</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
