// import React, { useEffect, useState } from "react";
// // import React from 'react';
// import axios from 'axios';


// let Logo = require('./metatemlogo.png')

// const Contact = () => {

//   const[name, setName] = useState('');
//   const[email, setEmail] = useState('');
//   const[message, setMessage] = useState('');
//   const[banner, setBanner] = useState('');
//   const[bool, setBool] = useState(false);



//   // handle inputs
//   const handleNameChange=(e)=>{
//     setName(e.target.value);
//     console.log(name)
//   }
//   const handleEmailChange=(e)=>{
//     setName(e.target.value);
//     console.log(email)
//   }
//   const handleMessagechange=(e)=>{
//     setName(e.target.value);
//     console.log(message)
//   }

//   //submit form

//   const formSubmit = (e)=>{
//     e.preventDefault();

//     let data = {
//       name:name,
//       email:email,
//       message:message
//     }

//   setBool(true);

//   axios.Axios.post(`/contact`, data)
//   .then (res=>{
//     setBanner(res.data.msg);
//     setBool(false);
//     setTimeout(()=>{
//       setBanner('');
//     }, 2000)

//     setName('');
//     setEmail('');
//     setMessage('');

//   }).catch(err=>console.log(err))
//   }


//   return (
//     <div className= "bg-white">
//       <form onSubmit={formSubmit}>
//         <p>{banner}</p>
//     <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl pb-20 pt-10">Contact Us for a free Quote !</p>
//     <div class="flex justify-evenly">

//     {/* <div class="w-full md:w-96 md:max-w-full mx-auto">
//   <div class="p-6 border border-gray-300 sm:rounded-md">
//     <form method="POST" action="https://herotofu.com/start">
//       <label class="block mb-6">
//         <span class="text-gray-700">Your name</span>
//         <input
//           type="text"
//           name="name"
//           class="
//             block
//             w-full
//             mt-1
//             border-gray-300
//             rounded-md
//             shadow-sm
//             focus:border-indigo-300
//             focus:ring
//             focus:ring-indigo-200
//             focus:ring-opacity-50
//           "
//           placeholder="Joe Bloggs"
//           required
//           value={name} onChange={handleNameChange}
//         />
//       </label>
//       <label class="block mb-6">
//         <span class="text-gray-700">Email address</span>
//         <input
//           name="email"
//           type="email"
//           class="
//             block
//             w-full
//             mt-1
//             border-gray-300
//             rounded-md
//             shadow-sm
//             focus:border-indigo-300
//             focus:ring
//             focus:ring-indigo-200
//             focus:ring-opacity-50
//           "
//           placeholder="joe.bloggs@example.com"
//           required
//            value={email} onChange={handleEmailChange}
//         />
//       </label>
//       <label class="block mb-6">
//         <span class="text-gray-700">Message</span>
//         <textarea
//           name="message"
//           class="
//             block
//             w-full
//             mt-1
//             border-gray-300
//             rounded-md
//             shadow-sm
//             focus:border-indigo-300
//             focus:ring
//             focus:ring-indigo-200
//             focus:ring-opacity-50
//           "
//           rows="3"
//           placeholder="Tell us what you're thinking about..."
//           onChange={handleMessagechange}
//         ></textarea>
//       </label>
//       <div class="mb-6">
//         <button
//           type="submit"
//           class="
//             h-10
//             px-5
//             text-indigo-100
//             bg-indigo-700
//             rounded-lg
//             transition-colors
//             duration-150
//             focus:shadow-outline
//             hover:bg-indigo-800
//           "
//         >
//           Contact Us
//         </button>
//       </div>
//       <div>
//         <div class="mt-2 text-gray-700 text-right text-xs">
//           by
//           <a href="https://herotofu.com" class="hover:underline" target="_blank"
//             >HeroTofu</a
//           >
//         </div>
//       </div>
//     </form>
//   </div>
// </div> */}

//     {/* name */}
//  <div className="form-control w-full max-w-xs">
//   <label className="label">
//     <span className="label-text">What's your name?</span>
//   </label>
//   <input type="text" placeholder="John Doe" className="input input-bordered w-full max-w-xs" required value={name} onChange={handleNameChange} />
//   <label className="label">
//   </label>
// </div>
// {/* email */}
//     <div className="form-control">
//   <label className="label">
//     <span className="label-text">Your Email</span>
//   </label>
//   <label className="input-group">
//     <span>Email</span>
//     <input type="text" placeholder="info@site.com" className="input input-bordered"  value={email} onChange={handleEmailChange}  />
//   </label>
// </div>
// </div>
// {/* checkbox  */}
// <div class="flex justify-center pt-20 " >
// <div class="grid grid-cols-2 gap-3 w-1/2" >
// <div className="form-control">
//   <label className="cursor-pointer label">
//     <span className="label-text">SEO</span>
//     <input type="checkbox" checked className="checkbox checkbox-info" />
//   </label>
// </div>
// <div className="form-control">
//   <label className="cursor-pointer label">
//     <span className="label-text">Web Dev</span>
//     <input type="checkbox" checked className="checkbox checkbox-info" />
//   </label>
// </div>
// <div className="form-control">
//   <label className="cursor-pointer label ">
//     <span className="label-text">Social Media Marketing</span>
//     <input type="checkbox" checked className="checkbox checkbox-info" />
//   </label>
// </div>
// <div className="form-control">
//   <label className="cursor-pointer label">
//     <span className="label-text">Content Creation/span>
//     <input type="checkbox" checked className="checkbox checkbox-info" />
//   </label>
// </div>
// <div className="form-control">
//   <label className="cursor-pointer label">
//     <span className="label-text"></span>
//     <input type="checkbox" checked className="checkbox checkbox-info" />
//   </label>
// </div>
// <div className="form-control">
//   <label className="cursor-pointer label">
//     <span className="label-text">Remember me</span>
//     <input type="checkbox" checked className="checkbox checkbox-info" />
//   </label>
// </div>
// </div>
// </div>

// {/* message */}
// <div className='grid col-2 justify-center pt-20 pb-15'>

// <div className="mockup-window border bg-base-300">
//   <div className="flex justify-center px-4 py-16 bg-base-200"><textarea className="textarea textarea-ghost pb-20" placeholder="What would you like us to know ?" value={message} onChange={handleMessagechange}></textarea></div>
// </div>
// <div className="pt-10"/>
// <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs "   />
// <div className="pb-20"/>
// {/* <textarea className="textarea textarea-ghost pb-20" placeholder="What would you like us to know ?"></textarea> */}

// {/* file upload */}
//     </div>
//     <div className="send-btn">
//     <button type="submit" >Send{bool? <b className="load" ></b>:''}</button>
//                   </div>

//       </form>
// </div>


    



//   )
// }

// export default Contact

import React,{useState} from 'react';
import './contact.css'; 
import axios from 'axios';
// import BackImg from '../../images/im4.jpg';
// import load2 from '../../images/load2.gif';






const Contact = () => {

const[name, setName] = useState('');
const[email, setEmail] = useState('');
const[message, setMessage] = useState('');
const[banner, setBanner] = useState('');
const[bool, setBool] = useState(false);



// handle inputs
const handleNameChange=(e)=>{
  setName(e.target.value);
//   console.log(name)
}

const handleEmailChange=(e)=>{
    setEmail(e.target.value);
    // console.log(email)
  }

  const handleMessageChange=(e)=>{
    setMessage(e.target.value);
    // console.log(message)
  }


//   submit form
const formSubmit = (e)=>{
e.preventDefault();

let data={
    name:name,
    email:email,
    message:message
}

setBool(true);


axios.post(`/`, data)
.then(res=>{
setBanner(res.data.msg);
setBool(false);
setTimeout(()=>{
setBanner('');

},2000)

setName('');
setEmail('');
setMessage('');

}).catch(err=>console.log(err))


}









    return (
        <div className="main-container" >
           <div className="contactForm">
               <h2 className="title">
                   Contact form
               </h2>
        <div className="contactForm-center">
            <div className="contact_form">
                <form onSubmit={formSubmit}>
                     <p>{banner}</p>

                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    placeholder="import name..." 
                    required 
                    value={name}
                    onChange={handleNameChange}
                    
                    />


                    <label htmlFor="email">Email</label>
                    <input type="email"
                     placeholder="import email..." 
                     required 
                     value={email}
                     onChange={handleEmailChange}
                     
                     />


                    <label htmlFor="message">Message</label>
                   <textarea  type='text'
                    name="message"
                    id=""
                     placeholder='import contact reason...' 
                     value={message}
                     onChange={handleMessageChange}
                     
                     />

                  
                  <div className="send-btn">
    <button type="submit" >Send{bool? <b className="load" ></b>:''}</button>
                  </div>

                </form>
            </div>

           {/* contact info */}
           <div className="contact-info">
               <h4>Send your message</h4>
               {/* <img src={BackImg} alt=""/> */}
           </div>


        </div>
           </div>
        </div> 
    )
}

export default Contact

// const Contact = () =>{


//   return(
//     <>
    
//   <title>Contact Us</title>

    
    
//     </>
//   )
// }

// export default Contact