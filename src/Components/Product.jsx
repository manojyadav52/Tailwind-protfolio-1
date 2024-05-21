import React from "react";
import img from '../Images/Mumabi12.jpg';
import img1 from '../Images/Manoj.jpg'
import img2 from '../Images/Mumabi17.jpg';
import img3 from '../Images/Mumabi15.jpg';
const Product =()=>{

    return(
        <>
        <div className="max-w-[1320px] mx-auto">
            <h1 className="text-4xl text-center py-5">Feature Product</h1>
        </div>

        {/* here is product section starte here */}
        <div className="max-w-[1320px] mx-auto py-5 grid lg:grid-cols-4 md:grid-cols-2 gap-5 p-[20px]">
            
            <div className="text-center text-1xl shadow-lg rounded">
                <div className="overflow-hidden">
                <img src= {img}alt="this is card imges"
                 className="hover:scale-125 duration-1000"
                 />
                 </div>
                <h3 className="py-2">this is picture to mumbai, visited mumbai</h3>
                <p className="py-2">Price: $70</p>
            </div>
            <div className="text-center shadow-lg">
                <div className="overflow-hidden">
                <img src= {img1}alt="this is card imges" 
                className="hover:scale-125 duration-1000"/>
                </div>
                <h3>this is picture to mumbai, visited mumbai</h3>
                <p>Price: $90</p>
            </div>
            <div className="text-center shadow-lg">
                <div className="overflow-hidden">
                <img src= {img2}alt="this is card imges" 
                className="hover:scale-125 duration-1000"/>
                </div>
                <h3>this is picture to mumbai, visited mumbai</h3>
                <p>Price: $87</p>
            </div>
            <div className="text-center shadow-lg">
                <div className="overflow-hidden">
                <img src= {img3}alt="this is card imges" 
                className="hover:scale-125 duration-1000"/>
                </div>
                <h3>this is picture to mumbai, visited mumbai</h3>
                <p>Price: $120</p>
            </div>

        </div>
        </>
    )
}

export default Product;