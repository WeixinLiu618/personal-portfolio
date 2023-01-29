import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import citic_logo from "../assets/img/experience_img/citic_logo.png";
import shenzhou_logo from "../assets/img/experience_img/shenzhou_logo.png";
import "./experience.css";

export const Experience = () => {
  const style_employer = {
    color: "#354259",
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "Roboto",
    textAlign: "left",
  };
  const style_title = {
    color: "#776464;",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "right",
    paddingRight: "10%",
    verticalAlign: "bottom"
  };

  return (
    <section
      className="experience-page"
      id="experience"
      style={{ minHeight: "100vh" }}
    >
      <h1 className="title-bar">EXPERIENCE</h1>

      <div className="experience-container">
        {/* citic */}
        <div className="sub-container">
          <Card
            className="experience-card"
            sx={{
              maxWidth: 800,
              boxShadow: 3,
              flexDirection: "column",
              margin: "auto",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <div style={{ width: "50%" }} >
                <CardHeader
                  title={"China CITIC Bank"}
                  subheader={<div>July 2019 – May 2021 | Nanjing, China </div>}
                  titleTypographyProps={style_employer}
                  sx={{ height: "auto" }}
                  avatar={
                    <Avatar
                      alt="CITIC"
                      src={citic_logo}
                      sx={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  }
                />
              </div>

              <div style={{ width: "50%" }}>
                <CardHeader
                  title={"Marketing Data Analyst"}
                  titleTypographyProps={style_title}
                  sx={{ height: "auto" }}
                />
              </div>
            </Box>

            <Divider />
            <CardContent className="experience-content">
              <ul>
                <li>
                  Generated sales insights using <span>SQL</span> and R to
                  launch two e-loan projects and increased seasonal profits by
                  8%.
                </li>

                <li>
                  Utilized NumPy library in Python to automate data collection
                  and analysis to screening potential customers.
                </li>
                <li>
                  Built statistical models by R to perform advanced data
                  analysis techniques such as regression analysis, time series
                  analysis, and Monte Carlo simulations.
                </li>

                <li>
                  Mentored 10+ interns and junior team members on process and
                  strategies of data analyzing.
                </li>
              </ul>
            </CardContent>

            <CardContent sx={{ backgroundColor: "#F5EFE6" }}>
              <div className="tools-container">
                <span>Tools: </span>Python, SQL, R
              </div>
            </CardContent>
          </Card>
        </div>

        {/* shenzhou */}
        <div className="sub-container">
          <Card
            className="experience-card"
            sx={{
              maxWidth: 800,
              boxShadow: 3,
              flexDirection: "column",
              margin: "auto",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <div style={{ width: "65%" }}>
                <CardHeader
                  title={"Yangzhou Shenzhou Auto Internal Ornament Ltd."}
                  subheader={
                    <div>May 2021 – August 2021 | Yangzhou, China </div>
                  }
                  titleTypographyProps={style_employer}
                  sx={{ height: "auto" }}
                  avatar={
                    <Avatar
                      alt="SZ"
                      src={shenzhou_logo}
                      sx={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  }
                />
              </div>

              <div style={{ width: "35%" }}>
                <CardHeader
                  title={"Software Development Intern"}
                  titleTypographyProps={style_title}
                  sx={{ height: "auto" }}
                />
              </div>
            </Box>

            <Divider />
            <CardContent className="experience-content">
              <ul>
                <li>
                  Programmed and managed the backend of services and JSP view
                  pages using Spring MVC framework.
                </li>
                <li>
                  Revamped the presentation layer, including creating action
                  classes and result pages by using Struts 2.
                </li>
                <li>
                  Utilized Hibernate to map Java objects to MySQL database
                  tables, simplifying data access and reducing the amount of
                  code required. Improved the response time by 30% by optimizing
                  HQL queries.
                </li>
                <li>Database Management System</li>
                <li>
                  Created JUnit tests for various modules of the application.
                </li>
              </ul>
            </CardContent>

            <CardContent sx={{ backgroundColor: "#F5EFE6" }}>
              <div className="tools-container">
                <span>Tools: </span>Java, Spring, Struts 2, Hibernate, MySQL,
                JUnit
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
