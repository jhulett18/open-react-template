import React from 'react'
import Image from 'next/image';
import celcius  from '../public/images/Logos/Celcius.png';
import lifeaid  from '../public/images/Logos/LifeAid.png';
import doordash  from '../public/images/Logos/doordash.png';
import  bose from '../public/images/Logos/bose.png';
import budweiser  from '../public/images/Logos/budweiser.png';
import caprisun  from '../public/images/Logos/Capri-sun.png';
import cap1  from '../public/images/Logos/CapitalOne.png';
import electrolit  from '../public/images/Logos/Electrolit.png';
import epicgames  from '../public/images/Logos/EpicGames.png';
import jcpenny  from '../public/images/Logos/JCPenny.png';


export default function Brands(){
  return (
    <> 
    {/* BRAND CONTAINER */}
    <div className="brand-section">
      <div className="brand-text-container">
        <h2 className='h2 mb-4'>From clients to friends</h2>
        <p className='text-xl text-gray-400 mb-8 '>
          Experimental marketing staffing, recruiting and more
          using strategic solutions to launch and grow your project.
        </p>
      </div>
        
        {/* CURVED SERVICES SECTION */}
        
        {/* <section class="curved"> */}
        {/* MARQUEE */}
        <div className="marquee-body">
            

            <section class="marquee-content">
              
              <a class="marquee-block">
                {/* <img class="marquee-logo" src={require('images/image14.png')} /> */}
                <Image id="celcius" className="marquee-logo" src={celcius} alt="Brand Logo" />           
              </a>
              
              <a class="marquee-block">
              <Image className="marquee-logo" src={lifeaid} alt="Brand Logo" />           
              
              {/* <img class="marquee-logo" src="https://cdn.shopify.com/s/files/1/0789/1333/files/Inc.svg?v=1593719066" /> */}
              </a>
                
              <a class="marquee-block">
              <Image className="marquee-logo" src={bose} alt="Brand Logo" />           
              
                {/* <img class="marquee-logo" src="https://cdn.shopify.com/s/files/1/0789/1333/files/Nat_Geo.svg?v=1593719066" /> */}
              </a>
              
              <a class="marquee-block">
              <Image className="marquee-logo" src={cap1} alt="Brand Logo" />           
                {/* <img class="marquee-logo" src="https://cdn.shopify.com/s/files/1/0789/1333/files/Red_Cross.svg?v=1593719066" /> */}
              </a>
              
              <a class="marquee-block">
              <Image className="marquee-logo" src={doordash} alt="Brand Logo" />           
                {/* <img class="marquee-logo" src="https://cdn.shopify.com/s/files/1/0789/1333/files/Discovery_Channel.svg?v=1593719066" /> */}
              </a>
              
              <a class="marquee-block">
              <Image className="marquee-logo" src={electrolit} alt="Brand Logo" />           
                {/* <img class="marquee-logo" src="https://cdn.shopify.com/s/files/1/0789/1333/files/REI.svg?v=1593719066" /> */}
              </a>
              
              <a class="marquee-block">
              <Image className="marquee-logo" src={budweiser} alt="Brand Logo" />           
                {/* <img class="marquee-logo" src="https://cdn.shopify.com/s/files/1/0789/1333/files/Fortune.svg?v=1593719066" /> */}
              </a>

              <a class="marquee-block">
              <Image className="marquee-logo" src={jcpenny} alt="Brand Logo" />           
                {/* <img class="marquee-logo" src="https://cdn.shopify.com/s/files/1/0789/1333/files/Fortune.svg?v=1593719066" /> */}
              </a>

              <a class="marquee-block">
              <Image className="marquee-logo" src={epicgames} alt="Brand Logo" />           
                {/* <img class="marquee-logo" src="https://cdn.shopify.com/s/files/1/0789/1333/files/Fortune.svg?v=1593719066" /> */}
              </a>
            </section>
    
           
        </div>

        {/* SERVICES */}
        {/* <div className="services-container">
          <div className="staffing-column">
            <h1>Staffing</h1>
            <p>Brand Ambassador's</p>
            <p>Bilingual Talent</p>
            <p>Trade Shows</p>
            <p>Promotional Staffing</p>
            <p>Demonstrators</p>
          </div>
          <div className="event-column">
            <h1>Events</h1>
            <p>Project Management</p>
            <p>Data Capture</p>
            <p>Market Research</p>
            <p>Photo & Brand Film</p>
            <p>Custom Giveaways and Gifts</p>
          </div>

          
        </div> */}
        
    {/* </section> */}
      
      </div>
    </>
  )
}

// export default Brands