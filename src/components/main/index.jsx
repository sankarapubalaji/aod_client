import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";

import { IconContext } from "react-icons";
import "./app.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { useState, useEffect } from "react";




const Main = () => {

	const sliderData = [
		{
		  image: "ramenWrap.jpg",
		  heading: "65 Dosa",
		  desc: "This is the description of slide one Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
		},
		{
		  image: "art of dosa home.jpeg",
		  heading: "Slide Two",
		  desc: "This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
		},
		{
		  image: "artOfDosa_light.jpeg",
		  heading: "Slide Three",
		  desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
		},
	  ];
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};


	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);


	const [currentSlide, setCurrentSlide] = useState(0);
	const slideLength = sliderData.length;
  
	const autoScroll = true;
	let slideInterval;
	let intervalTime = 2000;
  
	const nextSlide = () => {
	  setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
	  console.log("next");
	};

  
	function auto() {
	  slideInterval = setInterval(nextSlide, intervalTime);
	}
  
	useEffect(() => {
	  setCurrentSlide(0);
	}, []);
  
	useEffect(() => {
	  if (autoScroll) {
		auto();
	  }
	  return () => clearInterval(slideInterval);
	}, [currentSlide]);

	const elementStyle = {
		zIndex: 5
	  };

	return (
		<>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
			<span className="navbar">
  <Link to="#" className="menu-bars">
	<FaIcons.FaBars onClick={showSidebar} />
  </Link>
</span>
				<h3>Art Of Dosa</h3>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>

		</div>

<IconContext.Provider value={{ color: "undefined" }} style={elementStyle}>
<nav className={sidebar ? "nav-menu active" : "nav-menu"} style={elementStyle}>
  <ul className="nav-menu-items" onClick={showSidebar}>
	<li className="navbar-toggle">
	  <Link to="#" className="menu-bars">
		<AiIcons.AiOutlineClose />
	  </Link>
	</li>
	{SidebarData.map((item, index) => {
	  return (
		<li key={index} className={item.cName}>
		  <Link to={item.path}>
			{item.icon}
			<span>{item.title}</span>
		  </Link>
		</li>
	  );
	})}
  </ul>
</nav>
</IconContext.Provider>

<div className="slider">
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr />
                  <h2>Popular Pick</h2>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>

</>
	);
};

export default Main;