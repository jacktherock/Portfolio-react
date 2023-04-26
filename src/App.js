import React from "react";
import './App.css'
import './assets/css/styles.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import resume from './assets/Abhijeet_Resume.pdf'
import about_profile from './assets/img/about_profile.jpg'
import title_profile from './assets/img/title_profile.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function App() {

  const data = {
    first_name: "Abhijeet",
    last_name: "Sonawane",
    linkedin: "https://www.linkedin.com/in/abhijeetsss/",
    github: "https://github.com/jacktherock",
    leetcode: "https://leetcode.com/abhijeetsss/",
    hackerrank: "https://www.hackerrank.com/abhijeetsss",
    mail: "sonawaneabhijeet273@gmail.com",
    location: "https://www.google.com/maps/place/Pune,+Maharashtra/@18.5245649,73.7228812,11z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5204303!4d73.8567437!16zL20vMDE1eTJx",
    resumePdf: resume,
    home_image: title_profile,
    about_image: about_profile,
    siteLink: "https://portfolio-abhijeets.netlify.app/",
  }

  return (
    <>
      <Header data={data} />
      <Main data={data} />
      <Footer data={data} />
    </>
  )
}

export default App
