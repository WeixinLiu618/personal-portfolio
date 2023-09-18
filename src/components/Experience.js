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
    verticalAlign: "bottom",
  };

  return (
    <section
      className="experience-page"
      id="experience"
      style={{ minHeight: "100vh" }}
    >
      <h1 className="title-bar">EXPERIENCE</h1>

      <div className="experience-container">
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
                  subheader={<div>May 2021 – Dec 2021 | Yangzhou, China </div>}
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
                  Designed an inventory management platform supporting searching
                  and managing inventories via REST APIs.
                </li>

                <li>
                  Built scalable infrastructures, including DynamoDB with GSI,
                  ElasticSearch clusters, and API Gateway with Lambda, enhancing
                  system performance and user experience.
                </li>

                <li>
                  Designed DDB schema, hashkey to avoid hot partition. And
                  performed load test with ECS and Siege.
                </li>

                <li>
                  Ensured security with AWS WAF for DDoS throttling and
                  implemented key-based signing service against tampering.
                </li>
                <li>
                  Established dashboard, alarms and ticket system to monitor
                  service availability, call volume and latency. The
                  applicationserves 500k requests per day at 99.5%+
                  availability.
                </li>
              </ul>
            </CardContent>

            <CardContent sx={{ backgroundColor: "#F5EFE6" }}>
              <div className="tools-container">
                <span>Technologies: </span> REST APIs, DynamoDB, ElasticSearch,
                API Gateway with Lambda
              </div>
            </CardContent>
          </Card>
        </div>

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
              <div style={{ width: "50%" }}>
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
                  title={"Data Analyst"}
                  titleTypographyProps={style_title}
                  sx={{ height: "auto" }}
                />
              </div>
            </Box>

            <Divider />
            <CardContent className="experience-content">
              <ul>
                <li>
                  Developed an asynchronous Business Intelligence (BI)
                  automation tool for periodic aggregation of customer data,
                  facilitating enhanced data analysis.
                </li>

                <li>
                  Optimized data processing by employing clustering algorithms
                  with the MapReduce paradigm, achieving a 60% reduction in
                  processing time.
                </li>

                <li>
                  Designed and executed a reaper service to purge inactive
                  records, leading to a 40% storage reduction and a 30% decrease
                  in associated storage costs.
                </li>

                <li>
                  Implemented a robust recovery script to swiftly restore
                  records erroneously purged by the reaper service, ensuring
                  data integrity and minimizing potential operational
                  disruptions.
                </li>

                <li>
                  Collaborated with the testing team to conduct penetration
                  tests, ensuring system security, and subsequently spearheaded
                  the product readiness review for production deployment.
                </li>
              </ul>
            </CardContent>

            <CardContent sx={{ backgroundColor: "#F5EFE6" }}>
              <div className="tools-container">
                <span>Technologies: </span> MapReduce, Recovery script,
                Penetration tests
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
