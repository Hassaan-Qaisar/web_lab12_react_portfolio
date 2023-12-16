import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";
import project4 from "../../Assets/Projects/project4.png";
import project5 from "../../Assets/Projects/project5.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="ECommerce Website using NextJS"
              description="Experience the future of online shopping with our E-Commerce Website powered by Next.js. Enjoy features like user authentication, product catalog, shopping cart, and a seamless checkout process. Explore a responsive design that adapts to your device, making shopping on-the-go a breeze."
              ghLink="https://github.com/Hassaan-Qaisar/ecommerce_nextjs"
              demoLink="https://ecommerce-nextjs-beige.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Real Estate Website using MERN Stack"
              description="Experience seamless property management and exploration with our intuitive Real Estate Website, powered by the MERN Stack, offers easy Google Sign-In, property searches, visit scheduling, and property listing. Users can also mark favorites. It's your all-in-one real estate hub!"
              ghLink="https://github.com/Hassaan-Qaisar/real_estate"
              demoLink="https://real-estate-ten-black.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="Blog Website using NextJS"
              description="Explore my insights into the software industry with ease on this Next.js-powered Blog Website. Read articles on various tools and technologies, and reach out to me through the contact form for any inquiries."
              ghLink="https://github.com/Hassaan-Qaisar/blog-website"
              demoLink="https://blog-website-omega-flame.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="Contact App using ReactJS"
              description="Stay organized with my React-based Contact Saving App. Easily manage your contacts by adding, editing, and deleting entries. Quickly find the information you need with the search feature, making contact management a breeze."
              ghLink="https://github.com/Hassaan-Qaisar/contacts-react"
              demoLink="https://contacts-react-eta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5}
              isBlog={false}
              title="Portfolio using HTML and CSS"
              description="Revamped my personal portfolio website, originally crafted in pure HTML and CSS. The redesign incorporates modern design principles, interactive elements, and responsive layouts to showcase projects, skills, and accomplishments in an engaging and accessible manner."
              ghLink="https://github.com/Hassaan-Qaisar/portfolio"
              demoLink="https://hassaan-qaisar.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
