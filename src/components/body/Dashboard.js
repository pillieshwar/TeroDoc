import CloseIcon from "@mui/icons-material/Close";
import { Alert, Box, CardActionArea, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

export function Dashboard() {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <h4 style={{ marginBottom: "0 px", width: "70%" }}>Dashboard</h4>
        </Grid>
        <Grid item xs={12}>
          <Collapse in={open}>
            <Alert
              severity="info"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              The website is continuously getting updated with new statement of
              purpose and improved performance.
            </Alert>
          </Collapse>
        </Grid>

        <Grid item xs={12}>
          <p></p>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              width: "140vh",
              height: 128,
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} textAlign={"center"}>
              <Grid item xs={3}>
                <Link style={{ textDecoration: "none" }} to="/sop">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <Alert
                        icon={false}
                        variant="filled"
                        severity="success"
                      ></Alert>
                      <Typography variant="h3">45</Typography>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h7"
                          component="div"
                          color={"#2F7C31"}
                        >
                          Statement of Purpose
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link style={{ textDecoration: "none" }} to="/sop">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <Alert
                        icon={false}
                        variant="filled"
                        severity="warning"
                      ></Alert>
                      <Typography variant="h3">11</Typography>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h7"
                          component="div"
                          color={"#ED6C03"}
                        >
                          Total Universities
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={3}>
                <Link style={{ textDecoration: "none" }} to="/sop">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <Alert
                        icon={false}
                        variant="filled"
                        severity="error"
                      ></Alert>
                      <Typography variant="h3">8</Typography>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h7"
                          component="div"
                          color={"#D32F2F"}
                        >
                          Branches Covered
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link style={{ textDecoration: "none" }} to="/reviewrequest">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <Alert
                        icon={false}
                        variant="filled"
                        severity="info"
                      ></Alert>
                      <Typography variant="h3">57</Typography>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h7"
                          component="div"
                          color={"#0088D1"}
                        >
                          Review Requests
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Card color="#C7D2FC" backgroundColor="#C7D2FC">
                  <Typography
                    // textAlign={"left"}
                    fontFamily="fantasy"
                    variant="h5"
                    padding={5}
                    color="#1876D1"
                  >
                    " My Statement gives you the collection of SOPs (Statement
                    of Purpose) that were used to apply to multiple univerities.
                    Find the best SOPs that were accepted by the universities
                    you want to apply. Review your Statement Of Purpose by
                    submitting in the Review Request Tab."
                  </Typography>
                  {/* <CardActionArea>
                    <Alert icon={false} variant="filled" severity="info">
                      adadfas
                    </Alert>
                    <Typography variant="h3">57</Typography>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h7"
                        component="div"
                        color={"Red"}
                      >
                        Review Requests
                      </Typography>
                    </CardContent>
                  </CardActionArea> */}
                </Card>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Box>
          {/* <Paper elevation={1}>
            <img
              width={1100}
              height={650}
              src={imm}
              alt="dashboard coming soon"
            />
          </Paper> */}
        </Grid>
        {/* <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 280 }}>
            <InputLabel id="demo-simple-select-standard-label">
              University
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={universityChange}
              onChange={universityChangeFunction}
              label="universityChange"
            >
              <MenuItem value="Washington State University">
                Washington State University
              </MenuItem>
              <MenuItem value={20}>Stanford University</MenuItem>
              <MenuItem value={30}>
                University of Southern California
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 280 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Branch
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={branchChange}
              onChange={branchChangeFunction}
              label="branchChange"
            >
              <MenuItem value="Computer Science">Computer Science</MenuItem>
              <MenuItem value={20}>Mechanical Engineering</MenuItem>
              <MenuItem value={30}>Arts</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item mt={2.5} xs={2}>
          <Button variant="outlined" onClick={filterSubmitFunction}>
            Search
          </Button>
        </Grid>
      </Grid> */}

        {/* <Grid
        sx={{
          backgroundColor: "white",
          height: 300,
          width: "100%",
          "& .super-app-theme--cell": {
            // backgroundColor: "rgba(224, 183, 60, 0.55)",
            // color: "#1a3e72",
            // fontWeight: "600",
          },
          "& .super-app.negative": {
            // backgroundColor: "rgba(157, 255, 118, 0.49)",
            color: "red",
            fontWeight: "600",
          },
          "& .super-app.positive": {
            // backgroundColor: "#d47483",
            color: "green",
            fontWeight: "600",
          },
        }}
        item
        height="100vh"
        xs={12}
      >
        <DataGrid
          rows={dbData}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          // checkboxSelection
          disableSelectionOnClick
        />
      </Grid> */}
      </Grid>
    </div>
  );
}
