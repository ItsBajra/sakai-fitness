import React, { useState } from "react";
import { Dumbbell } from "lucide-react";
import Label from "../Label/Label";
import Input from "../Form/Input";

const BMIcalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setMBI] = useState(null);
  const [range, setRange] = useState("");

  const calculateBMI = () => {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    setMBI(bmi);

    let bmiRange = "";
    if (bmi < 18.5) {
      bmiRange = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiRange = "Healthy";
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiRange = "Overweight";
    } else if (bmi >= 30) {
      bmiRange = "Obese";
    }

    setRange(bmiRange);
  };

  return (
    <>
      <div
        id="bmi"
        className="w-full h-auto flex items-center lg:py-16 md:py-14 sm:py-12 py-10
        lg:px-24 md:px-16 sm:px-6 px-4 bg-black/90"
      >
        <div className="w-full h-auto flex items-center justify-center flex-col">
          <h6
            className="lg:text-lg md:text-lf sm:text-base text-base font-medium text-white
                        flex items-center gap-x-2 rounded-t-md py-2 px-4"
          >
            <Dumbbell className="w-10 h-10 -rotate-45 text-red-600" />
            Calculate Your BMI
          </h6>
          <div className="w-full h-auto flex items-end justify-center rounded-md border lg:gap-5 md:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4 flex-wrap">
            <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
              <Label htmlfor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                name="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight..."
              />
            </div>
            <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
              <Label htmlfor="height">Height (cm)</Label>
              <Input
                id="height"
                name="height"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height..."
              />
            </div>
            <div className="lg:w-[20%] md:w-[35%] sm:w-[50%] w-full h-auto p-2">
              <button
                type="submit"
                className="text-base  font-medium flex text-white
                                        items-center gap-x-1 ease-out lg:w-auto md:w-auto sm:w-full w-full h-11 px-7 py-2 uppercase justify-center bg-red-500 rounded hover:bg-red-600 transition-colors duration-700"
                onClick={calculateBMI}
              >
                Calculate Your BMI
              </button>
            </div>
          </div>
          {/* Display BMI */}
          {bmi !== null && (
            <div className=" rounded-b-md px-6 py-2.5">
              <p className="text-white">
                Your BMI:- <span className="font-bold text-red-600">{bmi}</span>
              </p>
              <p className="text-white">
                Weight Status:-{" "}
                <span className="font-bold text-red-600">{range}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BMIcalculator;
