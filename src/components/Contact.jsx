import React from "react";

const Contact = () => {
    return(
     <div name="contact" 
     className="w-full h-screen bg-gradient-to-b 
     from-black to-gray-800 p-4 text-white ">

        <div className="flex flex-col p-4 justify-center
        max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500">
                    Contact
                    </p>
                <p className=" py-6 ">
                    Feel free to hit me up!</p>
            </div> 
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/03a15b26-6719-48b8-a807-a9e267728aef"
                method="POST" className=" flex flex-col w-full md:w-1/2">
                   
                    <input type="text" 
                    name="name" 
                    placeHolder="Enter your name" 
                    className=" my-4 p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none">
                    </input>
                   
                    <input type="text" 
                    name="email" 
                    placeHolder="Enter your email" 
                    className=" my-4 p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none">
                    </input>
                    <textarea name="message"
                    placeholder="Type here ;)"
                           rows="10" 
                           className="p-2 bg-transparent border-2 rounded-md
                                      text-white focus:outline-none">

                    </textarea>
                    <button className="text-white bg-gradient-to-b 
                    from-orange-500 to-yellow-700
                    px-3 py-3 my-8 mx-auto flex items-center rounded-md
                    hover:scale-110 duration-300">
                        Let's talk

                    </button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Contact;