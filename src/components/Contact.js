import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import ListSubheader from "@mui/material/ListSubheader";

import Person2Icon from "@mui/icons-material/Person2";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import AssignmentIcon from "@mui/icons-material/Assignment";

import "./contact.css";
import { Avatar } from "@mui/material";
import Stack from "@mui/material/Stack";

const style = {
  color: "#776464",
  fontSize: "16px",
};

export const Contact = (theme) => {
  return (
    <React.Fragment>
      <section
        className="contact-page"
        id="contact"
        style={{ height: "100vh" }}
      >
        <h1 className="title-bar contact-title">CONTACT</h1>

        <div className="contact-main">
          {/* email */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar href="mailto:weixinliu1994@gmail.com">
              <MailOutlineIcon />
            </Avatar>
              <a className="contact-info" href='mailto:weixinliu1994@gmail.com' target='_blank'>weixinliu1994@gmail.com</a>
          </Stack>

          <br/>

          {/* phone */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar >
              <PhoneIcon />
            </Avatar>
              <a className="contact-info">14253622190</a>
          </Stack>
          <br/>

          {/* linkedin */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar href="https://www.linkedin.com/in/weixin-liu-748104233/">
              <LinkedInIcon />
            </Avatar>
              <a className="contact-info" href='https://www.linkedin.com/in/weixin-liu-748104233/' target='_blank'>linkedin.com/in/weixin-liu-748104233/</a>
          </Stack>

          <br/>


          {/* github */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar >
              <GitHubIcon />
            </Avatar>
              <a className="contact-info" href='https://github.com/WeixinLiu618' target='_blank'>github.com/WeixinLiu618</a>
          </Stack>

          <br/>



        </div>
      </section>
    </React.Fragment>
  );
};
