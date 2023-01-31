import * as React from "react";
import Grid from "@mui/material/Grid";
import "./projects.css";
import { ProjectCard } from "./ProjectCard";
import {ProjectsList }from "./ProjectsList"




export const Projects = (theme) => {

  return (
    <section
      className="projects-page"
      id="projects"
      style={{ minHeight: "100vh" }}
    >
      <h1 className="title-bar">PROJECTS</h1>

      <Grid className="card-container" container spacing={1}>

      { ProjectsList.map((project) => {
                        return(
                          <Grid sx={{paddingTop:"8%"}}>
                          <ProjectCard project={project} />
                          </Grid>
                        )
                    })}

      </Grid>
    </section>
  );
};
