// import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import "./about.css";

export const About = () => {
  return (
    <section className="about-page" id="about"  >
      <h1 className="title-bar about-title">ABOUT</h1>
      <div className="container flow-text about-container">
        <p className="about-details">
        I am currently a Graduate student at Northeastern University and pursuing a master’s degree in Computer Science. 
        Throughout my studies, I developed a strong foundation in programming languages such as Java, C, and Python, as well as a passion for problem-solving and creating efficient and effective software solutions.
        </p>

        <br />
        <p className="about-details">
        In my previous internships and course projects, 
        I have had the opportunity to work on a variety of projects.
        I have also gained valuable experience working on a team and collaborating with stakeholders to deliver high-quality products.
        </p>
        <br />
        <p className="about-details">
        I am excited to start my career as a software developer and contribute my skills and passion to a dynamic and innovative company. I am confident in my ability to adapt quickly and learn new technologies, and I am eager to continue growing and developing as a professional in the field.
        </p>
      </div>


    </section>
  );
};
