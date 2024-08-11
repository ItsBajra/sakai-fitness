import { Dumbbell } from "lucide-react";
import React from "react";
import Input from "../Form/Input";
import Textarea from "../Form/Textarea";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="w-ful h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-24 sm:px-6 px-4"
      >
        <h6 className="text-lg font-medium text-gray-700 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-red-600" />
          Get in Touch with Us
        </h6>
        <div className="w-full h-auto flex items-center gap-x-8 lg:gap-y-8 md:gap-y-8 sm:gap-y-5 gap-y-4 flex-col lg:p-7 md:p-7 sm:p-4 p-3">
          <div className="w-full h-auto flex items-center lg:gap-x-8 md:gap-x-4 sm:gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-8 sm:gap-y-5 gap-y-4 lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap">
            <div className="lg:w-[32%] md:w-[32%] sm:w-[48%] w-full h-auto">
              <Input
                type="text"
                id="fullname"
                name="fullname"
                className="w-full h-12 px-4"
                placeholder="Enter your fullname..."
              />
            </div>
            <div className="lg:w-[32%] md:w-[32%] sm:w-[48%] w-full h-auto">
              <Input
                type="email"
                id="email"
                name="email"
                className="w-full h-12 px-4"
                placeholder="Enter your email..."
              />
            </div>
            <div className="lg:w-[32%] md:w-[32%] sm:w-[48%] w-full h-auto">
              <Input
                type="text"
                id="subject"
                name="subject"
                className="w-full h-12 px-4"
                placeholder="Enter your subject..."
              />
            </div>
          </div>
          <Textarea
            id="message"
            name="message"
            className="w-full px-4"
            placeholder="Enter your message..."
          />
          <button className="lg:w-auto md:w-auto sm:w-[75%] w-full text-base text-gray-200 bg-red-600 font-medium px-8 py-3 rounded-md uppercase gap-x-1 hover:bg-red-600/70 ease-out duration-500 ">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
