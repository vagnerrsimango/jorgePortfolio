"use client";
import React from "react";
import {
  FaDatabase,        // SQL
  FaFileExcel,       // Excel
  FaPython,          // Python
  FaLaptopCode,      // SPSS
  FaToolbox,         // Kobo Toolbox
  FaRProject,        // R Studio
  FaPoll,            // Survey Monkey
  FaBusinessTime,    // Consulting
  FaMicrochip,       // MicroStrategy
  FaCode,            // VBA, Automation
} from "react-icons/fa";

const toolsList = [
  {
    name: "Excel",
    description: "Started my career as a data analyst in marketing, primarily using Excel.",
    icon: FaFileExcel,
  },
  {
    name: "SQL",
    description: "Integrated SQL into my toolkit for more advanced analyses.",
    icon: FaDatabase,
  },
  {
    name: "Python",
    description: "Used Python for data analysis, automation, and developing financial risk management models.",
    icon: FaPython,
  },
  {
    name: "SPSS",
    description: "Applied SPSS for statistical analysis and data interpretation.",
    icon: FaLaptopCode,
  },
  {
    name: "Kobo Toolbox",
    description: "Provided training in Kobo Toolbox for efficient data collection.",
    icon: FaToolbox,
  },
  {
    name: "R Studio",
    description: "Utilized R Studio for statistical programming and data visualization.",
    icon: FaRProject,
  },
  {
    name: "Survey Monkey",
    description: "Used Survey Monkey for market research and academic studies.",
    icon: FaPoll,
  },
  {
    name: "Consulting",
    description: "Consulted on data analysis and market research for Mozambique and Angola.",
    icon: FaBusinessTime,
  },
  {
    name: "MicroStrategy",
    description: "Developed BI skills with a focus on MicroStrategy and complex queries.",
    icon: FaMicrochip,
  },

];

const CareerPathSection = () => {
  return (
    <div className="py-6 px-4 sm:py-10 sm:px-8 lg:py-16 lg:px-16 ">
      <h1 className="text-white text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-8 lg:mb-12 animate-fadeIn">
        Tools & Stack used
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {toolsList.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 transform transition duration-500 hover:scale-105 hover:shadow-lg group"
            >
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-blue-800 transition duration-300">
                {tool.name}
              </h2>
              <Icon className="text-white text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:text-blue-800 transition duration-300 transform group-hover:rotate-12" />
              <p className="text-[#ADB7BE] text-sm sm:text-base text-center mt-1 sm:mt-2 opacity-80 transition duration-300 group-hover:opacity-100">
                {tool.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerPathSection;
