import React from "react";
import First from "./leftdiv";
import Second from './Rightdiv'

const HomePage = () => {
  return (
    <>
    <div className="flex justify-between items-center gap-2 w-full h-full " >
    <div></div>
    <First></First><br></br>
    <div></div>
    <Second></Second>
    </div>
  
    </>
  );
};

export default HomePage;