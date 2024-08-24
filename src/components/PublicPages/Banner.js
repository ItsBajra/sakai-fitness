import React from "react";

const Banner = () => {
    return (
        <>
            <div className="w-full h-[35vh] flex items-center justify-center flex-col relative z-10 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
                style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1517130038641-a774d04afb3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
                <div className="w-full h-full bg-black/70 absolute top-0 left-0 -z-10"></div>
                <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-white uppercase mb-4 text-center">
                    No <span className="text-red-600">Pain</span>, No{" "} <span className="text-red-600">Gain</span>
                </h1>
                <p className="text-lg text-gray-300 font-medium mb-8 text-center">
                    Ignite Your Fitness Journey with Premium Solutions.
                </p>
                <button
                    className="text-base text-gray-200 bg-red-600 font-medium px-10 py-3 gap-x-1 hover:bg-red-600/70 ease-out duration-500 uppercase rounded-full text-center"
                >
                    Become a member
                </button>
            </div>
        </>
    )
}

export default Banner;
