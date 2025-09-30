import React, { useState } from "react";
import "./Projects.css";
import project1Img from "../../assets/deliveryy.png";
import project2Img from "../../assets/doctor.png";
import wheelsmartImg from "../../assets/wheelsmart.png";
import srilalithaImg from "../../assets/sriLalitha.png";
import nivaasImg from "../../assets/nivaas.png";

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});
  const projectData = [
    // {
    //   id: 1,
    //   title: "Project 1",
    //   subtitle: "Rapid Delivery web Application",
    //   description:
    //     "Experience advanced delivery management using our React.js-driven Rapid Delivery frontend application. With smooth routing and intuitive page navigation, it simplifies logistics. Keep deliveries in check with real-time updates, route optimization, and clear communication. Seize control, enhance efficiency, and provide transparency. Embrace the future of delivery services with us, redefining the way businesses manage their operations.",
    //   tech: "HTML,CSS,ReactJs",
    //   img: project1Img,
    //   sourceLink: "https://github.com/battalasiva/delivery-app",
    //   projectLink: "https://delivery-app-ruby.vercel.app/order",
    // },
    {
      id: 1,
      title: "Wheelsmart",
      subtitle: "Bike Rental Application",
      description:
        "The Wheelsmart application is a comprehensive cross-platform mobile and web solution developed for the Indian market to streamline the buying, selling, and comparison of both new and used bikes. I managed the end-to-end development lifecycle, which included building core functionalities like detailed vehicle information, price alerts, and a bike comparison feature to enhance user decision-making. Furthermore, I engineered a specialized module to improve sales efficiency and operational workflow for company agents. The application's stability was maintained by managing API integration and handling critical fixes on the live production environment, culminating in its successful deployment on both the Google Play Store and the Apple App Store.",
      tech: "Flutter, GetX ,Firebase",
      img: wheelsmartImg,
      androidlink: "https://play.google.com/store/apps/details?id=in.app.wheelsmartv2&hl=en",
      iosLink: "https://apps.apple.com/in/app/wheelsmart-2-0/id6443845497",
    },
    {
      id: 2,
      title: "Srilalitha Service App",
      subtitle: "From Sri Lalitha Enterprises",
      description:
        "The Srilalitha Service V2 application is a mobile-based platform engineered to centralize and automate core operational processes for the rice mill. It features a robust service management system that simplifies the process of raising and tracking requests, including detailed fields for location, priority, and due dates, which significantly streamlines issue resolution, particularly for machinery problems. Furthermore, I integrated critical modules for enterprise resource planning, encompassing real-time stock management for rice bags and essential Human Resource functionalities, such as managing employee inflows/outflows and recording regular time entries. The application enhances internal communication and workflow efficiency through real-time notifications, empowering team members to effectively manage and prioritize their workload. Its successful deployment on both major app stores ensures accessibility and consistent service across the organization.",
      tech: "Flutter, GetX ,Firebase",
      img: srilalithaImg,
      androidlink: "https://play.google.com/store/apps/details?id=in.srilalitha.serviceAppV2&hl=en",
      iosLink: "https://apps.apple.com/in/app/srilalitha/id1620883114",
    },
    {
      id: 3,
      title: "Nivaas",
      subtitle: "Simple Apartment Management System",
      description:"The Nivaas application is a comprehensive, cross-platform Apartment Management System designed to enhance security, communication, and administration within residential communities. It features secure role-based access control for different user types, including Admins, Owners, Tenants, and Family Members, to ensure personalized and protected functionalities. I developed the system's core, which includes an intuitive onboarding process for apartments, coupled with efficient tenant verification and resident data management for accurate record-keeping. The platform automates critical financial processes like prepaid meter billing and monthly maintenance charges, using real-time usage analysis to significantly reduce customer query resolution time. Communication is centralized through Firebase push notifications and a dedicated announcement system for critical updates. Finally, a service request and complaint management module ensures seamless issue resolution, all built with a robust architecture utilizing a Java Spring Boot API for real-time data synchronization and Redux Toolkit for optimized state management, successfully deployed with in-app updates on both the Google Play Store and Apple App Store.",
      tech: "Flutter, Bloc ,Firebase",
      img: nivaasImg,
      androidlink: "https://play.google.com/store/apps/details?id=com.nivaas&hl=en",
      iosLink: "https://apps.apple.com/in/app/nivaas/id6639611241",
    },
    // {
    //   id: 2,
    //   title: "Project 2",
    //   subtitle: "MediAppointments- Health Scheduler",
    //   description:
    //     "Drove the implementation of an innovative healthcare management solution, spearheading the development of a unified MERN Doctor Appointment App, enabling streamlined access to essential routine checkups and consultations. Administered pivotal functions such as authentication, doctor vetting, and user administration. Empowered users with streamlined processes, including registration, login, doctor applications, endorsements, user reservations, and appointment coordination.",
    //   tech: "MERN(MongoDB,Express,Reactjs,NodeJs)",
    //   img: project2Img,
    //   sourceLink: "https://github.com/battalasiva/doctor-apointments-application",
    //   projectLink: "https://doctor-apointments-application.vercel.app/",
    // },
  ];

  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">
            Recent <span>Projects</span>
          </h1>
        </div>

        <div className="all-projects">
          {projectData.map((project, index) => {
            const isExpanded = expandedProjects[project.id];
            const shouldTruncate = project.description.length > 200;
            const displayDescription = shouldTruncate && !isExpanded 
              ? project.description.substring(0, 200) + "..." 
              : project.description;

            return (
              <div className="project-item" key={project.id}>
                <div className="project-info">
                  <div className="project-header">
                    <h1>{project.title}</h1>
                    <h2>{project.subtitle}</h2>
                  </div>
                  <div className={`project-description ${isExpanded ? 'expanded' : ''}`}>
                    <p>{displayDescription}</p>
                    {shouldTruncate && (
                      <button 
                        className="read-more-btn"
                        onClick={() => setExpandedProjects(prev => ({
                          ...prev,
                          [project.id]: !prev[project.id]
                        }))}
                      >
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                  <div className="project-footer">
                    <p>
                      <b>Tech Used:</b> {project.tech}
                    </p>
                    <div className="project-links">
                      <a href={project.androidlink} className="cta1">
                        Play Store
                      </a>
                      <a href={project.iosLink} className="cta1">
                        App Store
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-img">
                  <img src={project.img} alt={project.title} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
