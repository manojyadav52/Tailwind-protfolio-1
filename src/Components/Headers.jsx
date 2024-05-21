import React, { useState } from "react";
import Resume from '../Images/Manoj.jpg';

const Headers = () =>{
 const [nameState, setnameState] =useState('Manoj Yadav');
 const [menuLink, setmenuLink] = useState([
    {
        id : 1,
        title : 'Home',
        link : '/home'
    },

    {
        id : 2,
        title : 'About',
        link : '/about'
    },

    
    {
        id : 3,
        title : 'Skill',
        link : '/skill'
    },

    
    {
        id : 4,
        title : 'PortFolio',
        link : '/portfolio'
    },

    
    {
        id : 5,
        title : 'Contact',
        link : '/contact'
    },
 ]);
    return(
        <>
          <div className="  mx-auto flex justify-around h-20 border max-w-full items-center bg-gray-200 ">
             <h1 className="text-blue-900 text-3xl">{nameState} </h1>
               <div className="space-x-6">
                {/* here using Navbar */}

                 {menuLink.map(link=>(
                    <a key={link.id} href={link.link} className="hover:text-pink-500 "> {link.title} </a>
                 ))}

                
                {/* <a href="/about">About</a>
                <a href="/skill">/skill</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact us</a> */}
             </div>
               
             <div>
                {/* here using button */}
                <a href = {Resume} className="bg-pink-600 px-2 py-3 rounded-full text-white">Download CV</a>
                
             </div>
          </div>
        </>
    )
}
export default Headers;