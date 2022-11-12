// import { Authenticator } from "@aws-amplify/ui-react";
import { Box, Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { bgcolor } from "@mui/system";
import { useState } from "react";
import homepage1 from "./../images/homepage1111.png";
import homepage4 from "./../images/peep-sitting-41.png";
import homepage31 from "./../images/peep-standing-18.png";
import homepage30 from "./../images/peep-standing-9.png";
import homepage2 from "./../images/runningForSops.png";
import { Rout } from "./Rout";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function Homepage() {
  const [loggedin, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(true);
  };
  return (
    <div>
      {loggedin ? (
        <div>
          <Rout />
        </div>
      ) : (
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Item>
                  <Box>
                    <Grid container>
                      <Grid item xs={12} md={1}></Grid>
                      <Grid item xs={10} md={6}>
                        <Typography
                          variant="h6"
                          noWrap
                          component="div"
                          sx={{
                            float: "left",
                            display: { xs: "block", sm: "block" },
                          }}
                          color="#1876D1"
                          fontStyle={""}
                        >
                          <h2>TeroDoc</h2>
                        </Typography>
                      </Grid>
                      <Grid item xs={2} pt={4} md={4}>
                        <Button
                          variant="outlined"
                          sx={{ float: "right" }}
                          onClick={handleLogin}
                        >
                          Login
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={1}></Grid>
                      <Grid item xs={1} md={2}></Grid>
                      <Grid item xs={9} md={4} pt={15}>
                        <Typography
                          textAlign={"left"}
                          variant="h6"
                          noWrap
                          component="div"
                          sx={{
                            float: "left",
                            display: { xs: "block", sm: "block" },
                          }}
                          color="#1876D1"
                          fontStyle={""}
                        >
                          <h2>
                            Find Documents<br></br>Get Reviewed
                          </h2>
                          <p style={{ color: "#000" }}>
                            Join TeroDoc to find the best <br></br> Statement of
                            Purposes accepted<br></br> by universities across
                            the globe.
                          </p>
                        </Typography>
                      </Grid>
                      <Grid item xs={8} md={4} pt={10}>
                        <img
                          width={360}
                          height={360}
                          src={homepage1}
                          alt="homepage 1"
                        />
                      </Grid>
                      <Grid item xs={1} md={2}></Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
              {/* <Grid item xs={6} md={4}>
                <Item>xs=6 md=4</Item>
              </Grid> */}
              <Grid item xs={12} md={12}>
                <Item>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid bgcolor="#F3F2F2" container>
                      <Grid item xs={12} md={7} pt={10}>
                        <img
                          width={330}
                          height={300}
                          src={homepage2}
                          alt="running for SOPs"
                        />
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <Typography
                          pt={12}
                          textAlign={"center"}
                          variant="h6"
                          noWrap
                          component="div"
                          sx={{
                            float: "center",
                            display: { xs: "block", sm: "block" },
                          }}
                          color="#1876D1"
                          fontStyle={""}
                        >
                          <h2>Don't Run!</h2>
                          <p style={{ color: "#000" }}>
                            Stop running for SOPs <br></br>(Statement of
                            Purposes)
                            <br></br> We have got many.
                          </p>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={12}>
                <Item>
                  <Box>
                    <Grid container>
                      <Grid item xs={1} md={2}></Grid>
                      <Grid item xs={9} md={5} pt={15}>
                        <Typography
                          textAlign={"left"}
                          variant="h6"
                          noWrap
                          component="div"
                          sx={{
                            float: "left",
                            display: { xs: "block", sm: "block" },
                          }}
                          color="#1876D1"
                          fontStyle={""}
                        >
                          <h2>Get SOP Reviewed</h2>
                          <p style={{ color: "#000" }}>
                            Looking to get your SOP reviewed? <br></br> We have
                            got best reviewers.
                          </p>
                        </Typography>
                      </Grid>
                      <Grid item xs={4} md={1} pt={10}>
                        <img
                          width={130}
                          height={300}
                          src={homepage30}
                          alt="reviewer 1"
                        />
                      </Grid>
                      <Grid item xs={4} md={2} pt={10}>
                        <img
                          width={130}
                          height={300}
                          src={homepage31}
                          alt="reviewer 2"
                        />
                      </Grid>
                      <Grid item xs={1} md={2}></Grid>
                    </Grid>
                  </Box>

                  {/* <Box sx={{ flexGrow: 1 }}>
                    <Grid container>
                      <Grid item xs={12} md={5}>
                        <Typography
                          textAlign={"left"}
                          variant="h6"
                          noWrap
                          component="div"
                          sx={{
                            float: "left",
                            // display: { xs: "none", sm: "block" },
                          }}
                          color="#1876D1"
                          fontStyle={""}
                        >
                          <h2>Get SOP Reviewed</h2>
                          <p style={{ color: "#000" }}>
                            Looking to get your SOP reviewed? <br></br> We have
                            got best reviewers.
                          </p>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={7} pt={10}>
                        <img
                          width={130}
                          height={300}
                          src={homepage30}
                          alt="reviewer 1"
                        />
                        <img
                          width={130}
                          height={300}
                          src={homepage31}
                          alt="reviewer 2"
                        />
                      </Grid>
                    </Grid>
                  </Box> */}
                </Item>
              </Grid>
              {/* <Grid item xs={6} md={4}>
                <Item>xs=6 md=4</Item>
              </Grid> */}
              <Grid item xs={12} md={12}>
                <Item>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid bgcolor="#F3F2F2" container>
                      <Grid item xs={12} md={7} pt={10}>
                        <img
                          width={250}
                          height={300}
                          src={homepage4}
                          alt="sitting relax"
                        />
                      </Grid>
                      <Grid item xs={12} md={3} pt={12}>
                        <Typography
                          textAlign={"center"}
                          variant="h6"
                          noWrap
                          component="div"
                          sx={{
                            float: "center",
                            display: { xs: "block", sm: "block" },
                          }}
                          color="#1876D1"
                          fontStyle={""}
                        >
                          <h2>Worried about SOP?</h2>
                          <p style={{ color: "#000" }}>
                            Sit back and relax
                            <br></br> We've got your back.
                          </p>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={12} bgcolor={"black"}>
                <Box>
                  <Grid container p={8}>
                    <Grid item xs={12} md={3}>
                      <Typography
                        textAlign={"left"}
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                          float: "left",
                          display: { xs: "block", sm: "block" },
                        }}
                        color="#fff"
                        fontStyle={""}
                      >
                        <h3>TeroDoc</h3>
                        <h6>
                          Find all documents required<br></br> for your
                          univerisy applications.
                        </h6>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Typography
                        textAlign={"left"}
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                          float: "left",
                          display: { xs: "block", sm: "block" },
                        }}
                        color="#fff"
                        fontStyle={""}
                      >
                        <h4>Contact Us</h4>
                        <h6>
                          terodocteam@gmail.com <br></br>+1(734)-904 5788
                        </h6>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Typography
                        textAlign={"left"}
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                          float: "left",
                          display: { xs: "block", sm: "block" },
                        }}
                        color="#fff"
                        fontStyle={""}
                      >
                        <h4>Our Information</h4>
                        <h6>
                          Privacy Policy <br></br> Terms of Service <br></br>{" "}
                          About Us <br></br> Careers <br></br> Blog
                        </h6>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Typography
                        textAlign={"left"}
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                          float: "left",
                          display: { xs: "block", sm: "block" },
                        }}
                        color="#fff"
                        fontStyle={""}
                      >
                        <h4>Social Media</h4>
                        <LinkedInIcon color="info" />
                        <InstagramIcon color="error" />
                        <TwitterIcon color="info" />
                        <YouTubeIcon color="error" />
                        <FacebookIcon color="info" />
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Typography
                        textAlign={"left"}
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                          float: "left",
                          display: { xs: "block", sm: "block" },
                        }}
                        color="#fff"
                        fontStyle={""}
                      >
                        <h6 color="white">
                          Copyright © 2022 TeroDoc. All rights reserved.
                        </h6>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
}
