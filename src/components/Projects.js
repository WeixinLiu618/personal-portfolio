import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import { CardActionArea } from '@mui/material';
import Grid from "@mui/material/Grid";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "./projects.css";
import pet_adoption_project from "../assets/img/projects_img/pet_adoption_platform.png";
import { fontSize } from "@mui/system";
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

      <Grid className="card-container" container spacing={2}>

      { ProjectsList.map((project) => {
                        return(
                          <Grid sx={{paddingTop:"8%"}} >
                          <ProjectCard project={project} />
                          </Grid>
                        )
                    })}

      </Grid>
    </section>
  );
};
