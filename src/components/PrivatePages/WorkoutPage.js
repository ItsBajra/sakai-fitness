import React from "react";
import { Link } from "react-router-dom"; // Make sure to install and import Link from 'react-router-dom'
import { Dumbbell, MoveRight } from "lucide-react";

const bodyParts = [
  {
    id: 1,
    title: "Chest",
    desc: "Exercises for chest development",
    serviceImg:
      "https://www.dmoose.com/cdn/shop/articles/feature-image_664d327f-547e-4e9e-aae3-3e9d651d2cea.jpg?v=1683545606",
  },
  {
    id: 2,
    title: "Biceps",
    desc: "Exercises for biceps growth",
    serviceImg: "https://cdn.mos.cms.futurecdn.net/zkrwxQVtsn3Yi2Pgmh89eN.jpg",
  },
  {
    id: 3,
    title: "Triceps",
    desc: "Exercises for triceps strength",
    serviceImg:
      "https://www.dmoose.com/cdn/shop/articles/Main_Image_c904396b-b119-4e73-9c31-156c28de2dfb.jpg?v=1669992430",
  },
  {
    id: 4,
    title: "Shoulders",
    desc: "Exercises for shoulder strength",
    serviceImg:
      "https://i.ytimg.com/vi/1omoNQBgxJI/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLAVVquGHuovf0fbtxjuTvC2-8OxcQ",
  },
  {
    id: 5,
    title: "Back",
    desc: "Exercises for back development",
    serviceImg:
      "https://www.dmoose.com/cdn/shop/articles/Feature-image_535c6f0b-08ae-4264-9c22-e1943b53013e.jpg?v=1680860841",
  },
  {
    id: 6,
    title: "Abs",
    desc: "Exercises for abdominal muscles",
    serviceImg:
      "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/07/1109-cable-crunch-abs.jpg?quality=86&strip=all",
  },
  {
    id: 7,
    title: "Legs",
    desc: "Exercises for leg strength",
    serviceImg:
      "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/04/bodybuilding-leg-workout.jpg?fit=1000%2C667&ssl=1",
  },
  {
    id: 8,
    title: "Forearms",
    desc: "Exercises for forearm strength",
    serviceImg:
      "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2020/03/Two-Muscular-Males-Arm-Wrestling-Holding-Hands.jpg?quality=86&strip=all",
  },
];

const WorkoutPage = () => {
  return (
    <div
      id="workouts"
      className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
    >
      <h6 className="text-lg font-medium text-gray-700 flex items-center gap-x-2 mb-6">
        <Dumbbell className="w-4 h-4 -rotate-45 text-red-600" />
        Workout Categories
      </h6>
      <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10">
        {bodyParts.map((part) => (
          <div
            key={part.id}
            className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500"
            style={{
              backgroundImage: `url(${part.serviceImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-black/70 absolute top-0 left-0 -z-10"></div>
            <div className="w-full h-full flex flex-col items-center justify-center text-white p-4 z-50">
              <div className="w-14 h-14 rounded-full bg-red-600 border-4 border-red-600/80 flex items-center justify-center mb-5">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl text-white font-semibold text-center mb-4">
                {part.title}
              </h1>
              <p className="text-base text-white font-normal text-center mb-4">
                {part.desc}
              </p>
              <Link
                className="text-base text-red-600 bg-transparent font-medium px-3 py-1.5 rounded flex items-center justify-center gap-x-1 hover:text-red-600/70 ease-out duration-500"
                to={`/workoutpage/${part.title.toLowerCase()}`}
              >
                View Exercises
                <MoveRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPage;
