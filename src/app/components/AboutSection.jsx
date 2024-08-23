"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="space-y-6">
        {[
          {
            company: "MOZA BANCO",
            role: "Business Intelligence Analyst, Information Management and Data Desk",
            responsibilities: [
              "Providing management information to various bank departments.",
              "Creating metrics for tabular reports, dashboards, and decision-making.",
              "Extracting queries using SQL and PL/SQL.",
              "Architecting the internal management system (Microstrategy) for dashboard creation and predictive model training.",
              "Automating daily reports using VBA and Python."
            ],
            logo: "/images/about.jpeg"
          },
          {
            company: "Basela - Australia Development Agency (ADA) and European Union, DELAPAZ Strategic Project for Local Development and Peace Consolidation in Mozambique",
            role: "Data Analyst",
            responsibilities: [
              "Designing questionnaires.",
              "Cleaning data.",
              "Creating data visuals to support the Monitoring and Evaluation team."
            ],
            logo: "/images/about.jpeg"
          },
          {
            company: "Florita Telo Consultoria, Angola",
            role: "External Data Analyst",
            responsibilities: [
              "Preparing data analysis reports."
            ],
            logo: "/images/about.jpeg"
          },
          {
            company: "AIESEC, UEM",
            role: "Global Volunteer/Incoming Global Volunteer/Outgoing Global Talent",
            responsibilities: [
              "Leadership development.",
              "Recruitment training.",
              "Personal and professional management.",
              "Student recruitment for international exchanges and internships."
            ],
            logo: "/images/about.jpeg"
          }
        ].map(({ company, role, responsibilities, logo }) => (
          <div key={company} className="flex items-start space-x-4 p-6 border border-gray-700 rounded-lg shadow-lg bg-gray-800">
            <Image src={logo} alt={`${role} logo`} width={60} height={60} className="rounded-full" />
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">{company}</h3>
              <p className="text-md font-semibold text-gray-300 mb-2">{role}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-200">
                {responsibilities.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-6">
        <div className="flex items-start space-x-4 p-6 border border-gray-700 rounded-lg shadow-lg bg-gray-800">
          <Image src="/images/about.jpeg" alt="Education logo" width={60} height={60} className="rounded-full" />
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Universidade Eduardo Mondlane - Licentiate Degree in Statistics</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-200">
              <li>Probability Theory</li>
              <li>Statistical Inference</li>
              <li>Regression Analysis</li>
              <li>Time Series Analysis</li>
              <li>Multivariate Analysis</li>
              <li>Data Mining</li>
              <li>Statistical Computing with R and Python</li>
              <li>Survey Sampling Techniques</li>
              <li>Experimental Design</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-6">
        <div className="flex items-start space-x-4 p-6 border border-gray-700 rounded-lg shadow-lg bg-gray-800">
          <Image src="/images/about.jpeg" alt="Certifications logo" width={60} height={60} className="rounded-full" />
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Certifications</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-200">
              {[
                "Excel 2019: Data Management and Analysis",
                "Arduino Programming",
                "Financial Forecasting with Big Data",
                "Advanced Power BI Techniques",
                "Financial Portfolio Optimization with R"
              ].map(certification => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

const ExpandableContent = ({ company, role, responsibilities, logo }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex items-start space-x-4 p-6 border border-gray-700 rounded-lg shadow-lg bg-gray-800">
      <Image src={logo} alt={`${role} logo`} width={60} height={60} className="rounded-full" />
      <div>
        <h3 className="text-2xl font-bold text-blue-400 mb-2">{company}</h3>
        <p className="text-md font-semibold text-gray-300 mb-2">{role}</p>
        {expanded ? (
          <ul className="list-disc pl-6 space-y-2 text-gray-200">
            {responsibilities.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        ) : (
          <button onClick={() => setExpanded(true)} className="text-blue-400 underline">
            Show more
          </button>
        )}
        {expanded && (
          <button onClick={() => setExpanded(false)} className="text-blue-400 underline mt-2">
            Show less
          </button>
        )}
      </div>
    </div>
  );
};

const AboutSection = () => {
  const [tab, setTab] = useState("experience");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white" id="about">
      <div className="flex flex-col md:flex-row gap-8 py-8 px-4 xl:px-16">
        <div className="flex-none">
          <Image src="/images/about.jpeg" alt="About Me" width={500} height={500} className="rounded-lg shadow-lg" />
        </div>
        <div className="flex-grow">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-8">
            A seasoned Business Intelligence analyst with a proven ability to convert raw data into actionable insights. I excel in crafting and implementing data-driven strategies that drive business growth and efficiency. My expertise lies in leveraging advanced BI tools to uncover hidden patterns, optimize operations, and inform critical decision-making.
          </p>
          <div className="flex flex-row mb-8 space-x-4">
            {TAB_DATA.map(({ title, id }) => (
              <TabButton
                key={id}
                selectTab={() => handleTabChange(id)}
                active={tab === id}
              >
                {title}
              </TabButton>
            ))}
          </div>
          <div className="space-y-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;