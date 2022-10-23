import "@aws-amplify/ui-react/styles.css";
import CloseIcon from "@mui/icons-material/Close";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import { Alert, Box, Button, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import { Auth } from "aws-amplify";
import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const admitsList = [
  {
    value: "Admit",
    label: "Admit",
  },
  {
    value: "Pending",
    label: "Pending",
  },
  {
    value: "Reject",
    label: "Reject",
  },
];

const termList = [
  {
    value: "Spring",
    label: "Spring",
  },
  {
    value: "Summer",
    label: "Summer",
  },
  {
    value: "Fall",
    label: "Fall",
  },
];

const yearList = [
  {
    value: new Date().getFullYear() + 1,
    label: new Date().getFullYear() + 1,
  },
  {
    value: new Date().getFullYear(),
    label: new Date().getFullYear(),
  },
];

const universityList = [
  {
    value: "University of Southern California",
    label: "University of Southern California",
  },
  {
    value: "Washington State University",
    label: "Washington State University",
  },
  {
    value: "University Of Washington",
    label: "University Of Washington",
  },
];

const branchList = [
  {
    value: "Computer Science",
    label: "Computer Science",
  },
  {
    value: "Robotics",
    label: "Robotics",
  },
  {
    value: "Mechanical",
    label: "Mechanical",
  },
];

const degreeList = [
  {
    value: "High School",
    label: "High School",
  },
  {
    value: "Associates Degree",
    label: "Associate's Degree",
  },
  {
    value: "Bachelors Degree",
    label: "Bachelor's Degree",
  },
  {
    value: "Masters Degree",
    label: "Master's Degree",
  },
  {
    value: "Master of Business Administration",
    label: "Master of Business Administration (M.B.A)",
  },
  {
    value: "Juris Doctor",
    label: "Juris Doctor",
  },
  {
    value: "Doctor of Medicine",
    label: "Doctor of Medicine",
  },
  {
    value: "Doctor of Philosophy",
    label: "Doctor of Philosophy",
  },
  {
    value: "Engineer's Degree",
    label: "Engineer's Degree",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const columns = [
  {
    field: "statements3path",
    headerName: "SOP",
    width: 80,
    editable: false,
    renderCell: (params) => (
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={params.row.statements3path}
      >
        <PictureAsPdfRoundedIcon
          color="error"
          fontSize="small"
          sx={{ ml: "6px" }}
        />
      </a>
    ),
  },
  {
    field: "university",
    headerName: "University",
    // type: "number",
    width: 260,
    editable: false,
  },
  {
    field: "term",
    headerName: "Term",
    width: 110,
    editable: false,
  },
  {
    field: "year",
    headerName: "Year",
    // type: "number",
    width: 100,
    editable: false,
  },
  {
    field: "branch",
    headerName: "Course",
    // type: "number",
    width: 250,
    editable: false,
  },
  {
    field: "status",
    headerName: "Application Status",
    width: 130,
    editable: false,
    cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        negative: params.value === "SUBMITTED",
        neutral: params.value === "UNDER REVIEW",
        positive: params.value === "COMPLETE",
      });
    },
  },
  {
    field: "timestamp",
    headerName: "Timestamp",
    width: 180,
    editable: false,
  },
];

export function ReviewRequestPage() {
  console.log("c");
  console.log(Auth.user?.attributes.email);
  const loggedInId = Auth.user?.attributes.email;
  localStorage.setItem("auth", Auth.user?.attributes.email);
  const [dbData, setDbData] = useState({});
  const [branchChange, setbranchChange] = useState("");
  const [universityChange, setUniversityChange] = React.useState("");
  const [filterSubmit, setFilterSubmit] = React.useState(
    "krishnahundekari@gmail.com"
  );
  const [open, setOpen] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [severity, setSeverity] = useState("");
  const [feedbackLoop, setFeedbackLoop] = useState(false);

  // useEffect(() => {
  //   async function fetchData() {
  //     let active = true;
  //     setLoading(true);
  //     setFilterSubmit(localStorage.getItem("auth"));
  //     try {
  //       const res = await axios.get(
  //         "https://u4zrqpix5h.execute-api.us-east-1.amazonaws.com/prod/getReviewRequestData?q=" +
  //           filterSubmit,
  //         { crossdomain: true }
  //       );
  //       const body = await res.data.Items;
  //       if (!active) {
  //         return;
  //       }
  //       setDbData(body);
  //       setLoading(false);

  //       return () => {
  //         active = false;
  //       };
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   console.log("a");
  //   fetchData();
  //   console.log("b");
  // }, [filterSubmit]);

  const branchChangeFunction = (event) => {
    setbranchChange(event.target.value);
  };

  const universityChangeFunction = (event) => {
    setUniversityChange(event.target.value);
  };

  // const filterSubmitFunction = (loginId) => {
  //   setFilterSubmit(loginId);
  // };
  //****************************************UPLOAD*****************************/
  const [selectedFile, setSelectedFile] = useState(null);
  const [fullName, setFullName] = React.useState("");
  const [degree, setDegree] = React.useState("Masters Degree");
  const [year, setYear] = useState("2022");
  const [university, setUniversity] = useState("");
  const [term, setTerm] = useState("Spring");
  const [branch, setBranch] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const [isShown, setIsShown] = useState(false);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
    if (university && fullName && branch) {
      setBtnDisabled(false);
    }
  };

  const handleFullNameChange = (e) => {
    localStorage.setItem("sopFullName", Auth.user?.attributes.email);
    setFullName(e.target.value);
    if (university && selectedFile && branch) {
      setBtnDisabled(false);
    }
  };

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleUniversityChange = (e) => {
    setUniversity(e.target.value);
    if (fullName && selectedFile && branch) {
      setBtnDisabled(false);
    }
  };

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
    if (university && selectedFile && fullName) {
      setBtnDisabled(false);
    }
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <h4>Review Request</h4>
        </Grid>
        {/* <Grid item xs={6}>
          <h4>
            <Button
              variant="outlined"
              sx={{ float: "right" }}
              onClick={signOut}
            >
              Sign Out
            </Button>
          </h4>
        </Grid> */}

        <Grid item xs={12}>
          {/* <Collapse in={open}> */}
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
                {/* <CloseIcon fontSize="inherit" /> */}
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Please check the pricing plan before submitting the review request
            for your statement of purpose. Click on the link{" "}
            <Link to="/dashboard">here</Link> to view the pricing plan.
          </Alert>
          {/* </Collapse> */}
        </Grid>
        {/* <Grid item xs={12}>
              <h4
                style={{
                  marginBottom: "0 px",
                  width: "70%",
                }}
              >
                Submit Statement of Purpose for review
              </h4>
            </Grid> */}
        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {},
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <p>
                Follow the steps:
                <br></br>
                1. Enter your details in the form on right side. <br></br>
                2. Accept the terms and conditions. <br></br>
                3. Check the price before submitting for review.<br></br>
                4. On submitting to to checkout page for payment. <br></br>
                5. After successful payment, give us sometime to review you sop.
                <br></br>
                6. Check in the table above for updated SOP after review.
                <br></br>
              </p>
            </Grid>

            <Grid item xs={6}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <div>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          id="outlined-select-currency"
                          label="Full Name"
                          value={fullName}
                          onChange={handleFullNameChange}
                          // helperText="Please select your currency"
                        >
                          {termList.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>

                        <TextField
                          id="outlined-select-currency"
                          select
                          label="Degree"
                          value={degree}
                          onChange={handleDegreeChange}
                          // helperText="Please select your currency"
                        >
                          {degreeList.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </div>
                      <div>
                        <TextField
                          id="outlined-select-currency"
                          select
                          label="Term"
                          value={term}
                          onChange={handleTermChange}
                          // helperText="Please select your currency"
                        >
                          {termList.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>

                        <TextField
                          id="outlined-select-currency"
                          select
                          label="Year"
                          value={year}
                          onChange={handleYearChange}
                          // helperText="Please select your currency"
                        >
                          {yearList.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </div>
                      <div>
                        <TextField
                          id="outlined-select-currency"
                          label="University"
                          value={university}
                          onChange={handleUniversityChange}
                          // helperText="Please select your currency"
                        >
                          {universityList.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          id="outlined-select-currency"
                          label="Course"
                          value={branch}
                          onChange={handleBranchChange}
                          // helperText="Please select your currency"
                        >
                          {branchList.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </div>
                    </Box>
                    <input
                      type="file"
                      placeholder="Upload SOP"
                      onChange={handleFileInput}
                    />
                    <br></br>
                    {feedbackLoop ? <CircularProgress /> : <></>}

                    {alert ? (
                      <Alert severity={severity}>{alertContent}</Alert>
                    ) : (
                      <></>
                    )}
                    <br></br>
                    <h4>
                      <Button
                        variant="outlined"
                        sx={{ float: "center" }}
                        // onClick={() => handleClick()}
                      >
                        Submit for Review
                      </Button>
                    </h4>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
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
                      <MenuItem value="University of Southern California">
                        University of Southern California
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 280 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Course
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={branchChange}
                      onChange={branchChangeFunction}
                      label="branchChange"
                    >
                      <MenuItem value="Computer Science">
                        Computer Science
                      </MenuItem>
                      <MenuItem value="Robotics">Robotics</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item mt={2.5} xs={2}>
                  <Button variant="outlined" onClick={filterSubmitFunction}>
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Box> */}
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
              Below table contains total number of review requests data of your
              Statement of Purpose.
            </Alert>
          </Collapse>
        </Grid>
        <Grid
          sx={{
            backgroundColor: "white",
            height: 210,
            width: "100%",
            "& .super-app-theme--cell": {
              // backgroundColor: "rgba(224, 183, 60, 0.55)",
              // color: "#1a3e72",
              // fontWeight: "600",
            },
            "& .super-app.negative": {
              // backgroundColor: "rgba(157, 255, 118, 0.49)",
              color: "orange",
              fontWeight: "600",
            },
            "& .super-app.neutral": {
              // backgroundColor: "rgba(157, 255, 118, 0.49)",
              color: "#F7C007",
              fontWeight: "600",
            },
            "& .super-app.positive": {
              // backgroundColor: "#d47483",
              color: "green",
              fontWeight: "600",
            },
          }}
          item
          // height="50vh"
          xs={12}
        >
          <DataGrid
            rows={dbData}
            getRowId={(row) => row.timestamp}
            columns={columns}
            pageSize={2}
            rowsPerPageOptions={[2]}
            // checkboxSelection
            disableSelectionOnClick
            loading={loading}
          />
        </Grid>
      </Grid>
      <br></br>
    </div>
  );
}
