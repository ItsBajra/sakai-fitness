import React from "react";
import { Link } from "react-router-dom";
import { Dumbbell, MoveRight } from "lucide-react";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      serviceImg:
        "https://images.unsplash.com/photo-1579758682665-53a1a614eea6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fitness",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "/login",
    },
    {
      id: 2,
      serviceImg:
        "https://images.unsplash.com/photo-1628884879718-60dd217d5c9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Workout Tracking",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "/login",
    },
    {
      id: 3,
      serviceImg:
        "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Workout Plans",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "/login",
    },
    {
      id: 4,
      serviceImg:
        "https://images.unsplash.com/photo-1581122584612-713f89daa8eb?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Aerobics",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "/login",
    },
    {
      id: 5,
      serviceImg:
        "https://images.unsplash.com/photo-1618517048289-4646902edaf5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Boxing",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "/login",
    },
    {
      id: 6,
      serviceImg:
        "https://images.unsplash.com/photo-1590803218795-99a0baabb861?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dance Fitness",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "/login",
    },
    {
      id: 7,
      serviceImg:
        "https://images.unsplash.com/photo-1591258370814-01609b341790?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "HIIT",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "/login",
    },
    {
      id: 8,
      serviceImg:
        "https://images.unsplash.com/photo-1564282350350-a8355817fd2e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Zumba",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "/login",
    },
  ];

  return (
    <>
      <div
        id="services"
        className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
      >
        <h6 className="text-lg font-medium text-gray-700 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-red-600" />
          Our Services
        </h6>
        <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10">
          {/* Displaying these through loop */}
          {serviceData.map((data) => (
            <div
              key={data.id}
              className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translater-y-2 ease-out duration-500"
              style={{
                backgroundImage: `url(${data.serviceImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full h-full bg-black/70 absolute top-0 left-0 -z-10"></div>
              <div className="w-full h-full flex flex-col items-center justify-center text-white p-4 z-50">
                <div className="w-14 h-14 rounded-full bg-red-600 border-4 border-red-600/80 flex items-center justify-center mb-5 ">
                  <Dumbbell className="w-6 h-6 text-white" />{" "}
                </div>
                <h1 className="text-xl text-white font-semibold text-center mb-4">
                  {data.title}
                </h1>
                <p className="text-base text-white font-normal text-center mb-4">
                  {data.desc}
                </p>
                <Link
                  className="text-base text-red-600 bg-transparent font-medium px-3 py-1.5 rounded flex items-center justify-center gap-x-1 hover:text-red-600/70 ease-out duration-500"
                  to={data.link}
                >
                  Read More
                  <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
