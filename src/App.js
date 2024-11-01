import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import ContactForm from './components/ContactForm'
import PlayPic from './components/SlideShow'
import '../src/components/MyStack.css'
import profilepict from './PICS/profilepict.jpeg'
import code from './PICS/code.png'

import educations from './PICS/educations.png'
import Footer from './components/Footer';
import SocialMedia from './components/SocialMedia';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNewTextActive, setIsNewTextActive] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);

    if (!isNewTextActive) {
      setIsNewTextActive(true);
    } else {
      setIsNewTextActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div>
      <nav
        className={`sticky-nav ${isScrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}
      >
        <div>
          <span className={`menu-text ${isNewTextActive ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`} onClick={handleMobileMenuToggle}>
            Menu
          </span>
        </div>
        <ul>
          <li><Link to="#start" onClick={() => { scrollToSection('start'); setMobileMenuOpen(false); }}>Start</Link></li>
          <li><Link to="#ridertwo" onClick={() => { scrollToSection('ridertwo'); setMobileMenuOpen(false); }}>About me</Link></li>
          <li><Link to="#riderone" onClick={() => { scrollToSection('riderone'); setMobileMenuOpen(false); }}>Education</Link></li>
          <li><Link to="#info" onClick={() => { scrollToSection('info'); setMobileMenuOpen(false); }}>My Coding Stack</Link></li>
          <li><Link to="#about" onClick={() => { scrollToSection('about'); setMobileMenuOpen(false); }}>Prev Projects</Link></li>
          <li><Link to="#contact" onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }}>Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>

  );
};

const HomePage = () => (
  <div>
    <section id="start" className="custom-section">
      {/* Embedded YouTube video as a background */}
      <iframe
        title="Snowboard Video Background"
        id="video-background"
        src="https://www.youtube.com/embed/RzVvThhjAKw?si=5K8xtt8HjOCiZ9gY&start=12&autoplay=1&mute=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"

        style={{ width: '100%', height: '180%', position: 'absolute', top: -100, zIndex: -1 }}
      ></iframe>
      <div className="section-content">
        {/* Your content inside the #start section */}
        <h1>Tengnér Web and Media</h1>
        <Home />
      </div>
    </section>
    <section id="ridertwo" className="custom-section">
      <div className="section-content">
        <div className="ridertwo-content">
          <div className="ridertwo-block">
            <div className="profiletwo-picture-container">

              <img src={profilepict} alt="pics" className="proffa" />
            </div>
          </div>
          <div className="ridertwotwo-block">

            <div className='RiderTwoDiv'>
              <h2>About Me</h2>
              <p>Name: Olle Tengnér</p>
              <p>Age: 34</p>
              <p>From: Stockholm,Sweden</p>
              <p>Phone Number: +46760 169 497</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="riderone" className="custom-section">
      <div className="section-content">
        <div className="riderone-content">
          <div className="riderone-block">
            <div className='RiderOneDiv'>

              <h2>Education</h2>

              <div className='education-section'>
                <h3>JENSEN Vocational College</h3>
                <p><strong>Frontend Developer with a focus on Web Security, IT</strong></p>
                <p>Aug. 2021 – June 2023</p>
                <p><a href='https://www.jensenyh.se/vara-utbildningar/frontendutvecklare-webbsakerhet'>Education plan and details -click here</a></p>
                <p><strong>Grades:</strong> Available upon request</p>
                <p><strong>Activities and Societies:</strong> Class Representative, Fall 2021</p>
                <ul>
                  <li>In-depth Frontend Development</li>
                  <li>Web Security</li>
                  <li>Backend Development</li>
                  <li>Requirements and Threat Analysis from a Web Security Perspective, Legislation</li>
                  <li>Agile/Scrum, Entrepreneurship, Customer Communication, Requirements Specification</li>
                  <li>Documentation, Delivery & Presentation to the Customer</li>
                </ul>
              </div>

              <div className='education-section'>
                <h3>Lexicon IT-Proffs</h3>
                <p><strong>Fullstack .NET Developer, IT</strong></p>
                <p>Feb. 2024 – Oct. 2024</p>
                <p><a href='https://verify.trueoriginal.com/4759E151-F557-4A31-15C5-8109778FF46F/?ref=direct-copy'>Certification - click here</a></p>
                <ul>
                  <li>C# .NET Basics</li>
                  <li>Frontend (HTML, CSS, JavaScript, Bootstrap 5)</li>
                  <li>Databases (SQL, Database Modeling, Entity Framework Core, NoSQL)</li>
                  <li>Testing (TDD, xUnit, Moq)</li>
                  <li>ASP.NET Core</li>
                  <li>Fullstack Project Work (Blazor WASM, ASP.NET Core Web API, Scrum Project Methodology)</li>
                  <li>Microsoft Azure (Web App, CI/CD with Azure DevOps, CosmosDB, Azure SQL Database)</li>
                </ul>
              </div>

              <div className='skills-section'>
                <h4>Additional Skills</h4>
                <ul>
                  <li>Understanding of Python & More</li>
                </ul>
              </div>
            </div>

          </div>
          <div className="rideronetwo-block">
            <div className='education-roler '>
              <img src={educations} alt="pics" className="educations" />
            </div>
          </div>
        </div>
      </div>
    </section>




    <section id="info" className="custom-section">
      <div className="section-content">
        <div className="info-content">
          <div className="infoinfo-block">

            <a className="snowboardsKapa" href="/" target="_blank" rel="noopener noreferrer">
              <img src={code} alt="pics" className='kaPA' />
            </a>
          </div>

          <div className="infotwo-block">
            <h2>My Coding Stack:</h2>
            <div className='MyStackGrid'>


              <div className='MyStacksGraph'>
                <h4>Front End Development</h4>
                <ul>
                  <li>HTML</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>React Router DOM</li>
                  <li>NextJS - understanding</li>
                  <li>Next.js </li>
                  <li>Typescript </li>
                  <li>Razor </li>
                  <li>Blazor </li>

                </ul>
              </div>

              <div className='MyStacksAi'>
                <h4>Backend Development / DB / Cloud</h4>
                <ul>
                  <li>Golang</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>C# / .Net7 Core </li>
                  <li>Express</li>
                  <li>DB - Sql</li>
                  <li>DB - Postgress</li>
                  <li>DB - MongoDb</li>
                  <li>DB - Sqllite</li>
                  <li>DB - AzureDB</li>
                  <li>API CALLS - POSTman / bash / Swagger</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>

                  <li>
                    Entity Framework Core, Code-First, LINQ.
                  </li>

                  <li>Azure:</li>
                  <li>Microsoft Azure</li>
                  <li>Azure Web Apps</li>
                  <li> CI/CD with Azure DevOps</li>
                  <li> Azure Functions</li>
                  <li>Azure Storage</li>
                  <li>Azure SQL Database</li>

                </ul>
              </div>

              <div className='MyStacksWebDesign'>
                <h4>UX/UI Development</h4>
                <ul>
                  <li>Bootstrap</li>
                  <li>Tailwind</li>
                  <li>Flexbox</li>
                  <li>Grid</li>
                  <li>Media-queries</li>
                  <li>Plain css</li>
                  <li>Photoshop</li>
                  <li>AI promt Gen</li>
                  <li>MIRO</li>
                  <li>FIGMA</li>
                  <li>JIRA</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section >

    <section id="about" className="custom-section">
      <div className="section-content">
        <div className="about-content">
          <div className="aboutone-block">
            <div className="aboutMountain">
              <h2>Some of Previous Projects</h2>
              <p>SnowMedia: <a href='https://nraxi.github.io/snowmedia/'>
                Link</a></p>
              <p>Old CV/Projects: <a href='https://nraxi.github.io/nraxi-home/'>
                Link</a></p>
              <p>SCRUMS/Trello boards: see picture --> </p>
              <p>Examen: <a href='https://github.com/Nraxi/examen'>
                Link</a></p>
              <p>Public CMS:  <a href='https://codemonkeyspubliccms.azurewebsites.net/'>Link:</a></p>
              <p>Github project for:  <a href='https://github.com/Zocom-LIA/CmsCodeMonkeys'>Link: Public CMS</a></p>
               <p>Star Wars ChartApp: <a href='https://nraxi.github.io/chartsapp/'>
                Link</a></p>

            </div>
          </div>
          <div className="abouttwo-block">
            <div >
              <PlayPic />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="abouttwo" className="custom-section">
      <div className="section-content">
        <div className="about-content-vid">
          <div className="abouttwothree-block">
            <div className='aboutMountain'>
              <h2>Contact Me</h2>

              <ContactForm />

            </div>
          </div>
          <div className="aboutonethree-block">
            <div className='mountain-rolertwo'>
              <h1>Some video that intrests me</h1>


              <iframe src="https://player.vimeo.com/video/144545554?h=367734e3fe&color=ffffff"
                title='vimeo player'
                width="800" height="400"
                allow="autoplay; fullscreen; "
                className='mountaintwo'
                frameBorder="0"
              ></iframe>

            </div>

          </div>
        </div>
      </div>
    </section >


    <section id="contact" className="custom-section">
      <div className="section-content">

        <h2 className='theh2'>Social media / contact</h2>
        <SocialMedia />
      </div>
    </section>

    <section id="footer" className="custom-section">
      <div className="section-content">
        <Footer />
      </div>
    </section>
  </div >
);

export default App;
