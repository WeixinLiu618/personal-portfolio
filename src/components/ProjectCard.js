import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import CardActionArea from "@mui/material/CardActionArea";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const titleStyle = {
  color: "#354259",
  fontSize: "18px",
  fontWeight: "600",
  fontFamily: "Roboto",
  textAlign: "left",
};

const subheaderStyle = {
  color: "#354259",
  fontSize: "12px",
};

export const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 300, minHeight: 400 }}>
      <CardHeader
        action={
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        }
        title={project.title}
        titleTypographyProps={titleStyle}
        subheader={project.subheader}
        subheaderTypographyProps={subheaderStyle}
      />
      {expanded ? (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {project.details.map((item) => {
              return <Typography>• {item}</Typography>;
            })}
          </CardContent>
        </Collapse>
      ) : (
        <CardActionArea
          href={project.link}
          target="_blank"
        >
          <CardMedia
            component="img"
            height="300"
            image={require(`../assets/img/projects_img/${project.image}.png`)}
            alt={project.title}
          />
        </CardActionArea>
      )}

      <CardActions disableSpacing>
        <IconButton
          aria-label="link-to-github"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </IconButton>

        <Typography
          sx={{ fontSize: "15px", fontWeight: "bold", paddingLeft: "2%" }}
        >
          Tools: {project.tools}
        </Typography>
      </CardActions>
    </Card>
  );
};
