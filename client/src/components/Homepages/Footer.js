import React from 'react'
import { scroller } from 'react-scroll'
import { useState } from 'react'

let Logo = require('./metatemlogo.png');

  


const Footer = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const scrollToElement = (element)=>{
  scroller.scrollTo(element,{
    duration:800,
    delay:50,
    smooth:true,
    offset:-80
  })
}
  return (
    
<footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 ">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
            <img src={Logo} class="mr-3 h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap"></span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 ">
            <li>
            <a onClick={()=>scrollToElement('About')}><a href="#" class="mr-4 hover:underline md:mr-6 ">About</a></a>
            </li>
            <li>
            <a onClick={()=>scrollToElement('Projects')}><a href="#" class="mr-4 hover:underline md:mr-6">Projects</a></a>
            </li>
            <li>
            <a onClick={()=>scrollToElement('Services')}> <a href="#" class="mr-4 hover:underline md:mr-6 ">Services</a></a>
            </li>
            <li>
            <a onClick={()=>scrollToElement('Contact')}> <a href="#" class="hover:underline">Contact</a></a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto" />
    <span class="block text-sm text-gray-500 sm:text-center ">© 2022 <a href="https://http://metatem.ca/" class="hover:underline">Metatem Inc</a>. All Rights Reserved.
    </span>
</footer>

  )
}

export default Footer

