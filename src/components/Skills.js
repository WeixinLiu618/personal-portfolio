import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { Divider, Grid, Box } from "@mui/material";

import java_logo from "../assets/img/skills_img/programming_languages/java_logo.png";
import python_logo from "../assets/img/skills_img/programming_languages/python_logo.png";
import c_logo from "../assets/img/skills_img/programming_languages/c_logo.png";
import html_logo from "../assets/img/skills_img/programming_languages/html_logo.png";
import css_logo from "../assets/img/skills_img/programming_languages/css_logo.png";
import javascript_logo from "../assets/img/skills_img/programming_languages/js_logo.png";
import r_logo from "../assets/img/skills_img/programming_languages/r_logo.png";

import mysql_logo from "../assets/img/skills_img/databases_and_cloud/mysql_logo.png";
import mongodb_logo from "../assets/img/skills_img/databases_and_cloud/mongodb_logo.png";
import aws_logo from "../assets/img/skills_img/databases_and_cloud/aws_logo.png";
import docker_logo from "../assets/img/skills_img/databases_and_cloud/docker_logo.png";
import heroku_logo from "../assets/img/skills_img/databases_and_cloud/heroku_logo.png";

import bootstrap_logo from "../assets/img/skills_img/libraries_and_frameworks/bootstrap_logo.png";
import nodejs_logo from "../assets/img/skills_img/libraries_and_frameworks/nodejs_logo.png";
import react_logo from "../assets/img/skills_img/libraries_and_frameworks/react_logo.png";
import redux_logo from "../assets/img/skills_img/libraries_and_frameworks/redux_logo.png";
import ajax_logo from "../assets/img/skills_img/libraries_and_frameworks/AJAX_logo.png";
import graphql_logo from "../assets/img/skills_img/libraries_and_frameworks/graphql_logo.png";

import git_logo from "../assets/img/skills_img/tools_and_ides/git_logo.png";
import intellij_logo from "../assets/img/skills_img/tools_and_ides/intellij_logo.png";
import pycharm_logo from "../assets/img/skills_img/tools_and_ides/pycharm_logo.png";
import vscode_logo from "../assets/img/skills_img/tools_and_ides/vscode_logo.png";
import xcode_logo from "../assets/img/skills_img/tools_and_ides/xcode_logo.png";
import linux_logo from "../assets/img/skills_img/tools_and_ides/linux_logo.png";

import "./skills.css";
import { fontFamily, style, width } from "@mui/system";

export const Skills = () => {
  const style = {
    color: "#354259",
    fontSize: "18px",
    fontFamily: ["Poppins"],
  };

  return (
    <section
      className="skills-page"
      id="skills"
      style={{ height: "fit-content" }}
    >
      <h1 className="title-bar">SKILLS</h1>
      <div className="skills-container">
        {/* programming languages */}
        <div className="sub-container">
          <Card
            className="skills-card"
            sx={{ maxWidth: 1000, boxShadow: 3, margin: "auto" }}
          >
            <CardHeader
              title="Programming Languages"
              sx={{ textAlign: "left" }}
              titleTypographyProps={style}
            />
            <Divider />
            <CardContent>

              <Grid container rowSpacing={1} spacing={1}>
              <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="Java Logo"
                      src={java_logo}
                    />
                  </Box>
                  <Box className="skill-text">Java</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="Python Logo"
                      src={python_logo}
                    />
                  </Box>
                  <Box className="skill-text">Python</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img className="skill-logo-img" alt="C Logo" src={c_logo} />
                  </Box>
                  <Box className="skill-text">C</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="HTML Logo"
                      src={html_logo}
                    />
                  </Box>
                  <Box className="skill-text">HTML</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="CSS Logo"
                      src={css_logo}
                    />
                  </Box>
                  <Box className="skill-text">CSS</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="JavaScript Logo"
                      src={javascript_logo}
                      style={{
                        width: "3.2rem",
                        paddingTop: "6%",
                        paddingBottom: "3%",
                      }}
                    />
                  </Box>
                  <Box className="skill-text">JavaScript</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="R Logo"
                      src={r_logo}
                      style={{ paddingTop: "6%", paddingBottom: "10%" }}
                    />
                  </Box>
                  <Box className="skill-text">R</Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>

        {/* Databases & Cloud */}
        <div className="sub-container">
          <Card
            className="skills-card"
            sx={{ maxWidth: 1000, boxShadow: 3, margin: "auto" }}
          >
            <CardHeader
              title="Databases and Cloud"
              sx={{ textAlign: "left" }}
              titleTypographyProps={style}
            />
            <Divider />
            <CardContent>
              <Grid container rowSpacing={1} spacing={1}>
              <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="MySQL Logo"
                      src={mysql_logo}
                    />
                  </Box>
                  <Box className="skill-text">MySQL</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="MongoDB Logo"
                      src={mongodb_logo}
                    />
                  </Box>
                  <Box className="skill-text">MongoDB</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="AWS Logo"
                      src={aws_logo}
                    />
                  </Box>
                  <Box className="skill-text">AWS</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="Docker Logo"
                      src={docker_logo}
                    />
                  </Box>
                  <Box className="skill-text">Docker</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="Heroku Logo"
                      src={heroku_logo}
                    />
                  </Box>
                  <Box className="skill-text">Heroku</Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>

        {/* Libraries & Frameworks */}
        <div className="sub-container">
          <Card
            className="skills-card"
            sx={{ maxWidth: 1000, boxShadow: 3, margin: "auto" }}
          >
            <CardHeader
              title="Libraries and Frameworks"
              sx={{ textAlign: "left" }}
              titleTypographyProps={style}
            />

            <Divider />

            <CardContent>
              <Grid container rowSpacing={1} spacing={1}>

              <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="Bootstrap Logo"
                      src={bootstrap_logo}
                    />
                  </Box>
                  <Box className="skill-text">Bootstrap</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="Node.js Logo"
                      src={nodejs_logo}
                    />
                  </Box>
                  <Box className="skill-text">Node.js</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="React Logo"
                      src={react_logo}
                    />
                  </Box>
                  <Box className="skill-text">React</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="Redux Logo"
                      src={redux_logo}
                    />
                  </Box>
                  <Box className="skill-text">Redux</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="AJAX Logo"
                      src={ajax_logo}
                      style={{paddingTop:"15%", paddingBottom: "15%" }}
                    />
                  </Box>
                  <Box className="skill-text">AJAX</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="GraphQL Logo"
                      src={graphql_logo}
                    />
                  </Box>
                  <Box className="skill-text">GraphQL</Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>

        {/* Tools & IDEs */}
        <div className="sub-container">
          <Card
            className="skills-card"
            sx={{ maxWidth: 1000, boxShadow: 3, margin: "auto" }}
          >
            <CardHeader
              title="Tools and IDEs"
              sx={{ textAlign: "left" }}
              titleTypographyProps={style}
            />

            <Divider />

            <CardContent>
              <Grid container rowSpacing={1} spacing={1}>

              <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="Git Logo"
                      src={git_logo}
                    />
                  </Box>
                  <Box className="skill-text">Git</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="IntelliJ Logo"
                      src={intellij_logo}
                    />
                  </Box>
                  <Box className="skill-text">IntelliJ</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="Pycharm Logo"
                      src={pycharm_logo}
                    />
                  </Box>
                  <Box className="skill-text">Pycharm</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="VS Code Logo"
                      src={vscode_logo}
                    />
                  </Box>
                  <Box className="skill-text">VS Code</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="XCode Logo"
                      src={xcode_logo}
                    />
                  </Box>
                  <Box className="skill-text">XCode</Box>
                </Grid>

                <Grid sm={4} md={2} lg={1.5}>
                  <Box>
                    <img
                      className="skill-logo-img"
                      alt="Linux Logo"
                      src={linux_logo}
                      style={{paddingTop:"15%", paddingBottom: "12%" }}
                    />
                  </Box>
                  <Box className="skill-text">Linux</Box>
                </Grid>


                {/* <div className="single-logo">
                  <img
                    className="skill-logo-img"
                    alt="Git Logo"
                    src={git_logo}
                  />
                  Git
                </div>

                <div className="single-logo">
                  <img
                    className="skill-logo-img"
                    alt="IntelliJ Logo"
                    src={intellij_logo}
                  />
                  IntelliJ
                </div>

                <div className="single-logo">
                  <img
                    className="skill-logo-img"
                    alt="Pycharm Logo"
                    src={pycharm_logo}
                  />
                  Pycharm
                </div>

                <div className="single-logo">
                  <img
                    className="skill-logo-img"
                    alt="VS Code Logo"
                    src={vscode_logo}
                  />
                  VS Code
                </div>

                <div className="single-logo">
                  <img
                    className="skill-logo-img"
                    alt="XCode Logo"
                    src={xcode_logo}
                  />
                  XCode
                </div>

                <div className="single-logo">
                  <img
                    className="skill-logo-img"
                    alt="Linux Logo"
                    src={linux_logo}
                    style={{ width: "55%", paddingBottom: "4%" }}
                  />
                  Linux
                </div> */}
              </Grid>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
