import { useState, useEffect } from "react";
import Container from "@mui/material/Container";


import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./banner.css";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Developer", "Javaist", "Quick Learner"];

  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(1500);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  return (
    <section  className="banner-page"
    id="banner"
    style={{ height: "fit-content" }}>
      <Container className="banner-container">
        <div>
          <h1 className="intro name">{`Hi, I'm Wessie Liu`}</h1>
        </div>

        <div>
          <p className="intro typed">
            a <span className="wrap typed-text">{text}</span>
          </p>
        </div>

        <div className="intro detail">
          <p>
            Stay enthusiastic for programming.
            <br />
            Keep learning and keep growing.
            <br />
            Strive to be more interested than interesting.
          </p>
        </div>

        <div className="social">
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton
              className="social-icon"
              aria-label="linkedin"
              size="medium"
              href="https://www.linkedin.com/in/weixin-liu-748104233/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="inherit" />
            </IconButton>

            <IconButton
              className="social-icon"
              aria-label="github"
              size="medium"
              href="https://github.com/WeixinLiu618"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="inherit" />
            </IconButton>

            <Button
              className="contact-button"
              variant="contained"
              href="#contact"
            >
              Contact Me
            </Button>
          </Stack>
        </div>
      </Container>
    </section>
  );
};
