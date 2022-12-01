import React from 'react'
let Suzi = require('./suziscreen.png');
let Via = require('./armourscreen.png');
let Yoyo = require('./yoyoscreen.png');
let Armour = require('./viascreen.png');
let Vback = require('./via BC - back.jpg');
let Vfront = require('./via BC - Front.jpg');
let Vgift = require('./via- gift card.jpg');
let Aback = require('./Armor - Back.png');
let Afront = require('./armor-front.jpg');
let Yoyot = require('./yoyo-card-1.jpg');


const Projects = () => {
  return (
    <div class=" bg-gray-900" >

       <div class="divider divider-horizontal">    </div>
       <div class="divider divider-horizontal">    </div>
       <div class="divider divider-horizontal">    </div>
       <div class="divider divider-horizontal">    </div>
       <div class="divider divider-horizontal">    </div>
 <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-white">Our Most Recent Work</h2>
 <div class="divider divider-horizontal">  </div>
 <p class="font-light text-gray-500 lg:mb-16 sm:text-xl text-gray-400">Please don't hesitate to scroll through our work and the experiences we've created !</p>


 <div className="collapse">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium text-base-300">
    Our Web Development work 
  </div>
  <div className="collapse-content"> 
  <div class=" bg-gray-900" >
 <div class="items-center bg-gray-800 rounded-lg shadow sm:flex border-gray-900">
  
  {/* proj */}
  <div class=" bg-gray-900" >
  <figure><img  class="relative mx-auto rounded-lg overflow-hidden" src={Suzi} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-base-300 text-base-300">Suzinteriors</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolorem perferendis ducimus esse magnam reprehenderit soluta perspiciatis in provident, consectetur nam eos dolore, aut quae ipsum ipsam quaerat tempore. Et.</p>
    <div className="card-actions justify-end">
    <a href="https://suzinteriors.com/" target="_blank" rel="noreferrer">
      <button className="btn btn-info">Visit</button>
      </a>
    </div>
  </div>
</div>

    {/* proj */}
    <div class=" bg-gray-900" >
  <figure ><img class="relative mx-auto rounded-lg overflow-hidden" src={Yoyo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-base-300 dark:text-base-300">Yoyos</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolorem perferendis ducimus esse magnam reprehenderit soluta perspiciatis in provident, consectetur nam eos dolore, aut quae ipsum ipsam quaerat tempore. Et.</p>
    <div className="card-actions justify-end">
       <a href="https://yoyosfamilyfuncenter.ca/" target="_blank" rel="noreferrer">
      <button className="btn btn-info">Visit</button>
      </a>
    </div>
  </div>
</div>

   {/* proj */}
   <div class=" bg-gray-900" >
  <figure><img class="relative mx-auto rounded-lg overflow-hidden" src={Via} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-base-300">Via Allegro</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolorem perferendis ducimus esse magnam reprehenderit soluta perspiciatis in provident, consectetur nam eos dolore, aut quae ipsum ipsam quaerat tempore. Et.</p>
    <div className="card-actions justify-end">
       <a href="https://viaallegroristorante.com/" target="_blank" rel="noreferrer">
      <button className="btn btn-info">Visit</button>
      </a>
    </div>
  </div>
</div>

   {/* proj */}
   <div class=" bg-gray-900" >
  <figure ><img class="relative mx-auto rounded-lg overflow-hidden" src={Armour} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-base-300">Armour Shield</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolorem perferendis ducimus esse magnam reprehenderit soluta perspiciatis in provident, consectetur nam eos dolore, aut quae ipsum ipsam quaerat tempore. Et.</p>
    <div className="card-actions justify-end">
       <a href="https://armourshieldroofing.ca/" target="_blank" rel="noreferrer">
      <button className="btn btn-info">Visit</button>
      </a>
    </div>
  </div>
</div>
{/* end proj */}
</div>
  </div>
</div>
<div className="collapse">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium text-base-300">
    Our Graphic design work
  </div>
  <div className="collapse-content"> 
  <div class=" bg-gray-900" >
 <div class="items-center bg-gray-800 rounded-lg shadow sm:flex border-gray-900">
  
  {/* proj */}
  <div class=" bg-gray-900" >
  <figure><img  class="relative mx-auto rounded-lg overflow-hidden" src={Afront}  alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-base-300">Armour Shield business card front</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolorem perferendis ducimus esse magnam reprehenderit soluta perspiciatis in provident, consectetur nam eos dolore, aut quae ipsum ipsam quaerat tempore. Et.</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>

    {/* proj */}
    <div class=" bg-gray-900" >
  <figure ><img class="relative mx-auto rounded-lg overflow-hidden" src={Aback} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-base-300">Armour Shield business Back</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolorem perferendis ducimus esse magnam reprehenderit soluta perspiciatis in provident, consectetur nam eos dolore, aut quae ipsum ipsam quaerat tempore. Et.</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>

   {/* proj */}
   <div class=" bg-gray-900" >
  <figure><img class="relative mx-auto rounded-lg overflow-hidden" src={Vfront} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-base-300">Via Allegro business card front</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolorem perferendis ducimus esse magnam reprehenderit soluta perspiciatis in provident, consectetur nam eos dolore, aut quae ipsum ipsam quaerat tempore. Et.</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>

   {/* proj */}
   <div class=" bg-gray-900" >
  <figure ><img class="relative mx-auto rounded-lg overflow-hidden" src={Vback} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-base-300">Via Allegro business card front</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolorem perferendis ducimus esse magnam reprehenderit soluta perspiciatis in provident, consectetur nam eos dolore, aut quae ipsum ipsam quaerat tempore. Et.</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>
   {/* proj */}
   <div class=" bg-gray-900" >
  <figure ><img class="relative mx-auto rounded-lg overflow-hidden" src={Vgift} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-base-300">Via Allegro business gift card</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolorem perferendis ducimus esse magnam reprehenderit soluta perspiciatis in provident, consectetur nam eos dolore, aut quae ipsum ipsam quaerat tempore. Et.</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>
   {/* proj */}
   <div class=" bg-gray-900" >
  <figure ><img class="relative mx-auto rounded-lg overflow-hidden" src={Yoyot} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-base-300">Yoyo Card</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolorem perferendis ducimus esse magnam reprehenderit soluta perspiciatis in provident, consectetur nam eos dolore, aut quae ipsum ipsam quaerat tempore. Et.</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>
{/* end proj */}
</div>
  </div>
</div>
<div className="collapse">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium text-base-300">
    Our Physical IT work
  </div>
  <div className="collapse-content"> 
  <div class=" bg-gray-900" >
 <div class="items-center bg-gray-800 rounded-lg shadow sm:flex border-gray-900">
  
  {/* proj */}
  <div class=" bg-gray-900" >
  <figure><img  class="relative mx-auto rounded-lg overflow-hidden" src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-base-300">Suzinteriors</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolorem perferendis ducimus esse magnam reprehenderit soluta perspiciatis in provident, consectetur nam eos dolore, aut quae ipsum ipsam quaerat tempore. Et.</p>
    <div className="card-actions justify-end">
       <a href="https://google.com" target="_blank" rel="noreferrer">
      <button className="btn btn-info">Visit</button>
      </a>
    </div>
  </div>
</div>

    {/* proj */}
    <div class=" bg-gray-900" >
  <figure ><img class="relative mx-auto rounded-lg overflow-hidden" src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-base-300">Yoyos</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolorem perferendis ducimus esse magnam reprehenderit soluta perspiciatis in provident, consectetur nam eos dolore, aut quae ipsum ipsam quaerat tempore. Et.</p>
    <div className="card-actions justify-end">
       <a href="https://google.com" target="_blank" rel="noreferrer">
      <button className="btn btn-info">Visit</button>
      </a>
    </div>
  </div>
</div>

   {/* proj */}
   <div class=" bg-gray-900" >
  <figure><img class="relative mx-auto rounded-lg overflow-hidden" src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-base-300">Via Allegro</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolorem perferendis ducimus esse magnam reprehenderit soluta perspiciatis in provident, consectetur nam eos dolore, aut quae ipsum ipsam quaerat tempore. Et.</p>
    <div className="card-actions justify-end">
       <a href="https://google.com" target="_blank" rel="noreferrer">
      <button className="btn btn-info">Visit</button>
      </a>
    </div>
  </div>
</div>

   {/* proj */}
   <div class=" bg-gray-900" >
  <figure ><img class="relative mx-auto rounded-lg overflow-hidden" src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-base-300">Armour Shield</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolorem perferendis ducimus esse magnam reprehenderit soluta perspiciatis in provident, consectetur nam eos dolore, aut quae ipsum ipsam quaerat tempore. Et.</p>
    <div className="card-actions justify-end">
       <a href="https://google.com" target="_blank" rel="noreferrer">
      <button className="btn btn-info">Visit</button>
      </a>
    </div>
  </div>
</div>
{/* end proj */}
</div>
  </div>
</div>


 


    </div>
    <div class="divider divider-horizontal">    </div>
    <div class="divider divider-horizontal">    </div>
    <div class="divider divider-horizontal">    </div>

    </div>
    </div>
    </div>
    
  )
}

export default Projects