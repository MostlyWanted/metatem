import React from 'react'
import './login.css'

const Login = () => {
  return (


    <section class="bg-white dark:bg-gray-900">
    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
    <svg
      className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
      viewBox="0 0 1155 678"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
        fillOpacity=".3"
        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
      />
      <defs>
        <linearGradient
          id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
          x1=""
          x2=""
          y1=""
          y2=""
          // gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4287f5" />
          <stop offset={5} stopColor="#4287f5" />
          
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Our Most trusted Management team at your service!</p>
      <form target="_blank" action="https://formsubmit.co/22ee37e4e81f7624603af1d83a2ad7ef" method="POST">
          <div classname="form-control">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" name="email" class="form-control shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
          </div>
          <div classname="form-control">
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
              <input type="text" name="name" class="form-control block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required></input>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">What would you like us to know?</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <div className="G">

<input type="checkbox" id="SEO" name="SEO" value="SEO"></input>
<label for="SEO"> SEO </label><br/>
<input type="checkbox" name="Web Developement" value="Web Development"></input>
<label for="Web Dev" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Web Developement</label><br/>
<input type="checkbox" id="vehicle3" name="Social Media Marketing" value="Social Media Marketing"></input>
<label for="Social Media Marketing"> Social Media Marketing </label><br/>
<input type="checkbox" id="vehicle1" name="Content Creation" value="Content Creation"></input>
<label for="Content Creation"> Content Creation </label><br/>
<input type="checkbox" id="vehicle2" name="Graphic Design" value="Graphic Design"></input>
<label for="Graphic Design"> Graphic Design</label><br/>
<input type="checkbox" id="vehicle3" name="App Development" value="App Development"></input>
<label for="App Development"> App Development</label><br/>

</div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-400 focus:ring-4 focus:outline-none focus:ring-black-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>


  )
}

export default Login