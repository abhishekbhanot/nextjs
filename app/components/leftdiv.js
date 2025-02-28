import React from 'react'

export default function leftdiv() {
  return (
    <>
        <div className="w-1/4 h-auto bg-[#E1F3E8] p-4 mt-9 ml-[6%] rounded-lg ">
  <h1 className="text-green-500 text-center font-bold">Know Your Vitals</h1>
  <label className="block mt-2 text-green-500 text-center font-bold" >Name</label>
  <input type="text" className="border border-gray-300 rounded px-2 py-1 w-full h-5 text-black-500" /><br></br> <h1 className=" mt-2 text-green-500 text-center font-bold" >height</h1>
   <div className='flex ' >
  <label className=" mt-2 ml-3 text-green-500 text-center font-bold" >feet</label><br></br>
  <input type="text" className="border border-gray-300 rounded px-2 py-1 w-1/4 ml-5" />

  <label className=" mt-2 text-green-500 text-center  ml-1 font-bold" >Inches</label>
  <input type="text" className="border border-gray-300 rounded px-2 py-1 w-1/4 ml-5" /></div>

  <label className="block mt-2 text-green-500 text-center font-bold" >weight</label>
  <input type="text" className="border border-gray-300 rounded px-2 py-1 w-full " placeholder="in kgs" />

   
  <label className="block mt-2 text-green-500 text-center font-bold" >Gender</label>
  <input className="border border-gray-300 rounded px-2 py-1 w-full" list="genderOptions" name="gender" placeholder="Select Gender" />
<datalist id="genderOptions">
  <option value="male" />
  <option value="female" />
</datalist>





  <label className="block mt-2 text-green-500 text-center font-bold" >date of birth</label>
  <input type="date" className="border border-gray-300 rounded px-2 py-1 w-full" />



    <label className="block mt-2 text-green-500 text-center font-bold" >Goal</label>
  <input className="border border-gray-300 rounded px-2 py-1 w-full" list="goal" name="gender" placeholder="Select goal" />
<datalist id="goal">
  <option value="gain" />
  <option value="lose" />
</datalist>


  <label className="block mt-2 text-green-500 text-center font-bold" >activity level</label>
  <input type="text" className="border border-gray-300 rounded px-2 py-1 w-full" list='activity' placeholder='select activity level'/>
  <datalist id="activity">
  <option value="very light" />
  <option value="light" />
  <option value="moderate" />
  <option value="active" />
  <option value="very active" />
  
</datalist>


<h1  className="block mt-2 text-green-500 text-center font-bold"> what is your target</h1>
<input type="text" className="border border-gray-300 rounded px-2 py-1 w-full " placeholder='in kgs' />
<button className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg mx-auto'> submit</button>
</div>

    </>
  )
}
