"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import {
  FaMailBulk, FaWhatsapp
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
    id="contact"
    className="my-12 md:my-12 py-24 relative text-center"
  >
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
  
    {/* Animação de partículas interativas */}
    <div className="particles-bg absolute inset-0 z-0 pointer-events-none">
      {/* Você pode usar bibliotecas como tsParticles ou Three.js para criar esse efeito */}
    </div>
    
    <div className="z-10 relative">
      {/* Efeito Typewriter */}
      <h5 className="text-4xl font-bold text-white my-4 typewriter">
        Connect now
      </h5>
      <p className="text-[#ADB7BE] mb-6 max-w-lg mx-auto">
      I am available for new collaborations and challenging projects, especially those involving Power BI, data analysis, and business intelligence. If you are looking for innovation and excellence in these fields, feel free to get in touch. Let’s explore how we can work together to achieve remarkable results and turn ideas into reality.
</p>

      

  
      {/* Ícones interativos de plataformas */}
      <div className="flex justify-center gap-6">
        <Link href="https://github.com/yourprofile" className="group">
          <Image src={GithubIcon} alt="Github Icon" className="hover:scale-110 transition transform duration-300" />
          <span className="block text-sm text-[#ADB7BE] opacity-0 group-hover:opacity-100 transition duration-300">Follow me on GitHub</span>
        </Link>
        <Link href="https://linkedin.com/in/yourprofile" className="group">
          <Image src={LinkedinIcon} alt="Linkedin Icon" className="hover:scale-110 transition transform duration-300" />
          <span className="block text-sm text-[#ADB7BE] opacity-0 group-hover:opacity-100 transition duration-300">Connect on LinkedIn</span>
        </Link>
      
      </div>
    </div>
  </section>
  
  
  );
};

export default EmailSection;
