import React from 'react'
import Protein from 'public/protein.png'
function Rightdiv() {
  return (
    <>
    <div className=' flex flex-wrap items-center justify-around bg-[#E1F3E8] h-[580px] bg-white  rounded shadow-lg w-5/6 gap-6' >
      <div className='bg-[#ffffff] h-[250px]  rounded shadow-lg w-1/4' >
        <h2 className='text-end mr-8 mt-5'>abhishek</h2>
        <p className='text-end mr-8'>age- </p>
        <p className='text-end mr-8'>healthy</p>
      <p className='ml-5 mt-10'>your BMI</p>
      <p  className='ml-5 mt-4'>your BMR</p>

      <p  className='ml-5 mt-4'>your TDEE</p>

      </div>
      <div className='bg-[#ffffff] h-[250px]  rounded shadow-lg w-3/5' >second</div>



      <div className='bg-[#ffff] h-[250px] rounded shadow-lg w-3/5' ><div class="days-to-fit">
    <p  id="smallfont">Have no time to prepare food?</p>
    <p id="smallfont">try sari foods(from mounainkid farms)</p>
    <div className='flex flex-wrap justify-evenly items-end'>
      <div className='h-[100] bg-[#00000]' >
      <img src="/protein.png" alt="Protein Shake " width={80} height={80}  />
      <p className='text-sm'>sari portein shake</p>
        <p  className='text-sm'>cal:200</p>
        <button className='text-base'>subscribe</button>
      </div>
      
      <div  >
      <img src="/protein.png" alt="Protein Shake " width={100} height={100}  />
      <p className='text-sm'>sari portein shake</p>
        <p  className='text-sm'>cal:200</p>
        <button className='text-base'>subscribe</button>
      </div>
      

      <div  >
      <img src="/protein.png" alt="Protein Shake " width={100} height={100}  />
      <p className='text-sm'>sari portein shake</p>
        <p  className='text-sm'>cal:200</p>
        <button className='text-base'>subscribe</button>
      </div>
      
      <div  >
      <img src="/protein.png" alt="Protein Shake " width={100} height={100}  />
      <p className='text-sm'>sari portein shake</p>
        <p  className='text-sm'>cal:200</p>
        <button className='text-base'>subscribe</button>
      </div>
      
     
    
    </div>
  </div></div>
      <div className='bg-[#ffff] h-[250px]   rounded shadow-lg w-1/4' >dour</div>
    </div></>
  )
}

export default Rightdiv