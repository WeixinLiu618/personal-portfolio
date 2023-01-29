import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import neu_logo from "../assets/img/neu_logo.svg";
import nju_logo from "../assets/img/nju_logo.svg";

import "./education.css";

export const Education = () => {
  const title_style = {
    color: "#354259",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft: "2%",
  };
  const subtitle_style = {
    color: "#7D9D9C",
    fontSize: "15px",
    textAlign: "left",
    paddingLeft: "2%",
  };
  return (
    <section
      className="education-page"
      id="education"
      style={{ minHeight:"100vh" }}
    >
      <h1 className="title-bar">EDUCATION</h1>

      <div className="edu-container">
        {/* graduate */}
        <div className="sub-container">
          <Card
            className="edu-card"
            sx={{
              maxWidth: 800,
              boxShadow: 3,
              flexDirection: "column",
              margin: "auto",
            }}
          >
            <CardHeader
              title={"Northeastern University-Seattle Campus"}
              subheader={
                <div>Seattle, USA, Jan 2022 – May 2024 (Expected)</div>
              }
              titleTypographyProps={title_style}
              subheaderTypographyProps={subtitle_style}
              avatar={
                <Avatar
                  alt="Remy Sharp"
                  src={neu_logo}
                  sx={{
                    width: "40px",
                    height: "40px",
                  }}
                />
              }
            />
            <Divider />
            <CardContent sx={{ paddingLeft: "5%" }}>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Degree:</span> Master of
                Science in Computer Science Candidate
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>GPA:</span> 4.0/4.0
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>
                  Relevant Courseworks:
                </span>
                <ul>
                  <li>Object-Oriented Design</li>
                  <li>Algorithms</li>
                  <li>Web Development</li>
                  <li>Database Management System</li>
                  <li>Cloud Computing</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* bachelor */}
        <div className="sub-container">
          <Card
            className="edu-card"
            sx={{
              maxWidth: 800,
              boxShadow: 3,
              flexDirection: "column",
              margin: "auto",
            }}
          >
            <CardHeader
              title={"Nanjing University"}
              subheader={<div>Nanjing, China</div>}
              titleTypographyProps={title_style}
              subheaderTypographyProps={subtitle_style}
              avatar={
                <Avatar
                  alt="Remy Sharp"
                  src={nju_logo}
                  sx={{
                    width: "32px",
                    height: "40px",
                  }}
                  variant="square"
                />
              }
            />
            <Divider />
            <CardContent sx={{ paddingLeft: "5%" }}>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Degree:</span> Bachelor of
                Science in Business Administration
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>GPA:</span> 4.41/5.0
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>
                  Relevant Courseworks:
                </span>
                <ul>
                  <li>VisualBASIC Programming</li>
                  <li>Information Management</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
