import React from "react";


const Services = () =>{


    return(
        <>
        <div className="max-w-[1320px] mx-auto md:[80]">
            <h3 className="text-center text-3xl mt-3">Our Services</h3>
        </div>
        <div className="max-w-[1200px] mx-auto py-[50px] grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            <div className="shadow-lg p-5 text-center hover:bg-blue-900 hover:text-white hover:scale-105 duration-1000  ">
                <h3 className="text-2xl text-center py-2 ">web Design</h3>
                <p> Hello,I'm web developer this is hand created websites, no copy pate</p>

            </div>
            {/* second 2nd div */}

            <div className="shadow-lg p-5 text-center hover:bg-blue-900 duration-1000 hover:text-white hover:scale-105">
                <h3 className="text-2xl text-center py-2">App Design</h3>
                <p>Hello I'm manoj yadav. we are create app develpement in whole code have hand created</p>
            </div>
            <div className="shadow-lg p-5 py-2 hover:bg-blue-900 duration-1000 hover:text-white hover:scale-105">
                <h3 className="text-2xl text-center py-2">Service base App</h3>
                <p>Hello Developers here we will be discussion about how to use Card</p>

            </div>
            <div className="shadow-lg p-5 hover:bg-blue-900 duration-1000 hover:text-white hover:scale-105">
                <h3 className="text-2xl text-center">Cloud Engineering</h3>
                <p className="text-center p-2">Here we will be discussion about cloud and redering some other pages</p>

            </div>

            {/* Here second column div started here */}

            <div className="shadow-lg p-5 text-center hover:bg-blue-900 duration-1000 hover:text-white hover:scale-105">
            
                <h3 className="text-2xl text-center py-2">web Design</h3>
                <p> Hello,I'm web developer this is hand created websites, no copy pate</p>

            </div>
            {/* second 2nd div */}

            <div className="shadow-lg p-5 text-center hover:bg-blue-900 duration-1000 hover:text-white hover:scale-105">
                <h3 className="text-2xl text-center py-2">App Design</h3>
                <p>Hello I'm manoj yadav. we are create app develpement in whole code have hand created</p>
            </div>
            <div className="shadow-lg p-5 py-2 hover:bg-blue-900 duration-1000 hover:text-white hover:scale-105">
                <h3 className="text-2xl text-center py-2">Service base App</h3>
                <p>Hello Developers here we will be discussion about how to use Card</p>

            </div>
            <div className="shadow-lg p-5 hover:bg-blue-900 duration-1000 hover:text-white hover:scale-105">
                <h3 className="text-2xl text-center">Cloud Engineering</h3>
                <p className="text-center p-2">Here we will be discussion about cloud and redering some other pages</p>

            </div>

        </div>
        </>
    )
}
export default Services;