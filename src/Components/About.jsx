import React from "react";
import leftimg from '../Images/bcimg2.jpg';

const About = () =>{


    return(
        <>
          <div className="max-w-[1320px] mx-auto text-center md:py-[80] py-5">
            <h1 className="text-center text-3xl text-bold">About Section</h1>
          </div>

          <div className="max-w-[1320px] mx-auto md:py-[80] py-5 flex md:flex-row flex-col pb-5">
            <div className="basis-[45%]">
                <img src={leftimg} alt="this is left size images"  className="w-full"/>
            </div>
            <div className="basis-[55%] px-5">
                <h1 className="text-3xl text-center p-4 border-b-lime-900">Hi, I'm <span className="text-blue-900 text-4x">Manoj</span> Yadav full stack web Developers</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas excepturi, delectus voluptatum alias accusamus dolore repellat ea libero voluptatibus, pariatur tenetur eius quos, fugiat consectetur vero quod ipsam! Ullam.
                Enim corrupti, cum alias aliquam suscipit reiciendis magnam, repudiandae eveniet voluptate illo ea. Totam velit, saepe dicta quisquam sint ipsum dignissimos minus id animi illum possimus vitae recusandae deleniti ratione.
                Quisquam et molestiae quod earum labore eos, unde veniam placeat voluptatem similique porro omnis doloribus, eum quos quas possimus est quia! Voluptas quibusdam necessitatibus saepe ab fugit placeat eum officiis.
                Culpa deleniti sed autem repellendus atque ea amet eveniet ex quisquam dolorem eligendi neque veniam vel consectetur omnis, minus dolor soluta! Excepturi quo ea dolores voluptate laboriosam eius commodi provident.</p>
            </div>
                
          </div>
        </>
    )
}

export default About;