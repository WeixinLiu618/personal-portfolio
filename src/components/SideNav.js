import React from "react";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import ListSubheader from "@mui/material/ListSubheader";

import Person2Icon from "@mui/icons-material/Person2";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import BarChartIcon from "@mui/icons-material/BarChart";
import DvrIcon from "@mui/icons-material/Dvr";
import SchoolIcon from "@mui/icons-material/School";
import MailIcon from "@mui/icons-material/Mail";
// import AssignmentIcon from "@mui/icons-material/Assignment";

const style = {
  color: "#776464",
  fontSize: "16px",
  fontFamily: ["Poppins"],
};

export const SideNav = () => {
  return (
    <div>
      <React.Fragment>
        <ListItemButton href="#about">
          <ListItemIcon>
            <Person2Icon sx={{ color: "#776464" }} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={style} primary="About" />
        </ListItemButton>

        <ListItemButton href="#skills">
          <ListItemIcon>
            <BarChartIcon sx={{ color: "#776464" }} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={style} primary="Skills" />
        </ListItemButton>

        <ListItemButton href="#experience">
          <ListItemIcon>
            <AutoAwesomeMosaicIcon sx={{ color: "#776464" }} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={style} primary="Experience" />
        </ListItemButton>

        <ListItemButton href="#projects">
          <ListItemIcon>
            <DvrIcon sx={{ color: "#776464" }} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={style} primary="Projects" />
        </ListItemButton>

        <ListItemButton href="#education">
          <ListItemIcon>
            <SchoolIcon sx={{ color: "#776464" }} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={style} primary="Education" />
        </ListItemButton>

        <ListItemButton href="#contact">
          <ListItemIcon>
            <MailIcon sx={{ color: "#776464" }} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={style} primary="Contact" />
        </ListItemButton>

        <ListItemButton href="https://drive.google.com/file/d/1iVv_Hp90Lx3jaOwuWJ90y9dDUzZD7zdJ/view?usp=share_link" target="_blank">
          <ListItemIcon>
            <ChromeReaderModeIcon sx={{ color: "#776464" }} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={style} primary="Resume" />
        </ListItemButton>
      </React.Fragment>
    </div>
  );
};
