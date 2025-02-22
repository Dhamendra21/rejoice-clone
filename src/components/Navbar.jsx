import React from "react";

function Navbar() {
  return (
    <div className="w-full relative">
      <nav className=" fixed top-0 w-full text-white p-5 sm:p-12  ">
      <div className="flex justify-between">
      <h1 className=" tracking-tight ">The growth accelerator</h1>
      <div className="button sm:hidden w-fit bg-[#2D2D2D]  py-2 px-5">Menu</div>
      <div className="Links flex gap-2 max-sm:hidden">
      {
        ["home","Work","About","services","Contacts"].map((item,index)=>{
            return <a href="#" key={index}>{item}</a>  // replace "#" with your actual route path for each link. For now, it's a placeholder.  // for production, you'd want to use a more robust navigation library like react-router-dom.  // also, you might want to use a CSS framework like Tailwind CSS or Bootstrap for styling and responsiveness.  // you can find examples of how to implement these in the "src/components" directory.  // in the "App.jsx" file, you can import and use this Navbar component like this: <Navbar />  // and in the "Landing.jsx" file, you can import and use this Navbar component like this: <Navbar />  // and in the "index.css" file, you can add the necessary styles for the Navbar component.  // in the "tailwind.config.js" file, you can add the necessary styles for the Navbar component using
        })
      }
      </div>
      <div className="max-sm:hidden">
        <h3>Let's talk</h3>
      </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
