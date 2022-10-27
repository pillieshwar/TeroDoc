import "@aws-amplify/ui-react/styles.css";
import CloseIcon from "@mui/icons-material/Close";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import { Alert, Box, Button, Grid, Paper } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import { Auth } from "aws-amplify";
import AWS from "aws-sdk";
import axios from "axios";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import constant from "./../../constants/Constant";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@aws-amplify/ui-react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};
AWS.config.update({
  accessKeyId: constant.ACCESS_KEY_ID,
  secretAccessKey: constant.SECRET_ACCESS_KEY,
  AWS_SDK_LOAD_CONFIG: 1,
});
const myBucket = new AWS.S3({
  params: { Bucket: constant.S3_BUCKET },
  region: constant.REGION,
});

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
  {
    value: "Economics",
    label: constant.small_square,
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
    field: "Report",
    headerName: "Report",
    width: 80,
    editable: false,
    renderCell: (params) => (
      <div>
        {params.row.status === "COMPLETE" ? (
          <Button size="small" variant="outlined">
            View
          </Button>
        ) : (
          <Button size="small" disabled variant="outlined">
            View
          </Button>
        )}
      </div>
    ),
  },
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
    field: "timestamp",
    headerName: "Timestamp",
    width: 180,
    editable: false,
  },
];

const adminColumns = [
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
    field: "id",
    headerName: "Email Id",
    // type: "number",
    width: 260,
    editable: false,
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
    field: "timestamp",
    headerName: "Timestamp",
    width: 180,
    editable: false,
  },
];

const suffix = constant.S3_SUFFIX;

export function ReviewRequestPage() {
  const loggedInId = Auth.user?.attributes.email;
  localStorage.setItem("auth", Auth.user?.attributes.email);
  const [dbData, setDbData] = useState({});
  const [branchChange, setbranchChange] = useState("");
  const [universityChange, setUniversityChange] = React.useState("");
  const [filterSubmit, setFilterSubmit] = React.useState(
    localStorage.getItem("terodocEmail")
  );
  const [open, setOpen] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [severity, setSeverity] = useState("");
  const [feedbackLoop, setFeedbackLoop] = useState(false);
  const [reviewRequestDataRefresh, setReviewRequestDataRefresh] = useState(0);

  useEffect(() => {
    async function fetchData() {
      let active = true;
      setLoading(true);
      setFilterSubmit(localStorage.getItem("terodocEmail"));
      try {
        const res = await axios.get(
          "https://u4zrqpix5h.execute-api.us-east-1.amazonaws.com/prod/getReviewRequestData?q=" +
            filterSubmit,
          { crossdomain: true }
        );
        const body = await res.data.Items;
        if (!active) {
          return;
        }
        setDbData(body);
        setLoading(false);

        return () => {
          active = false;
        };
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [filterSubmit, reviewRequestDataRefresh]);

  const branchChangeFunction = (event) => {
    setbranchChange(event.target.value);
  };

  const universityChangeFunction = (event) => {
    setUniversityChange(event.target.value);
  };

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

  const uploadFile = (file) => {
    handleClick();
    setBtnDisabled(true);
    setFeedbackLoop(true);
    const fl_name = suffix + "_" + file.name;
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: constant.S3_REVIEW_REQUEST,
      Key: fl_name,
      ContentType: "application/pdf",
      ContentEncoding: "base64",
      ContentDisposition: "inline",
    };

    myBucket.putObject(params).send((err) => {
      if (err) console.log(err);
    });

    postData(fl_name);
  };

  async function postData(fileName1) {
    try {
      await axios
        .post(
          // constant.POST_DATA_AND_PDF_TO_DYNAMODB,
          constant.REVIEW_REQUEST_PAGE_API_GATEWAY,
          {
            id: filterSubmit,
            timestamp: new Date().toLocaleString() + "",
            branch: branch,
            fullname: fullName,
            statements3path:
              "https://" +
              constant.S3_REVIEW_REQUEST +
              ".s3." +
              constant.REGION +
              ".amazonaws.com/" +
              fileName1,
            term: term,
            university: university,
            year: year,
            status: "SUBMITTED",
          },
          { crossdomain: true }
        )
        .then((response) => {
          setReviewRequestDataRefresh(reviewRequestDataRefresh + 1);
          setFeedbackLoop(false);
          if (response.status === 200) {
            setAlertContent(
              "Thank you for agreeing to the terms and conditions and uploading your Statement Of Purpose"
            );
            setSeverity("success");
            setAlert(true);
          } else {
            setAlertContent("Error: Please try again later!");
            setAlert(true);
            setSeverity("error");
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  //*************************************STRIPE*********************************************/
  const [clientSecret, setClientSecret] = useState("");
  const [severData, setSeverData] = useState("");
  const [paymentIntent, setPaymentIntent] = useState("");
  const [resr, setResr] = useState("");

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setSeverData(data));
  // }, []);

  const handleClick = (event) => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setSeverData(data));
    setIsShown((current) => !current);
    setClientSecret(severData.clientSecret);
    setPaymentIntent(severData.id);
    console.log("clientSecret: ", severData.clientSecret);
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  // stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
  //   console.log(paymentIntent);
  // });
  //*************************************STRIPE*********************************************/

  const [reviewOpen, setReviewOpen] = React.useState(false);
  const [reviewEmail, setReviewEmail] = React.useState("");
  const reviewHandleOpen = () => setReviewOpen(true);
  const reviewHandleClose = () => setReviewOpen(false);

  function currentlySelected(params) {
    const value = params.colDef.field;
    const api = params.api;

    console.log(params, params.row.id);
    reviewHandleOpen(true);
    setReviewEmail(params.row.id);
  }

  const [userReviewOpen, setUserReviewOpen] = React.useState(false);
  const [userReviewEmail, setUserReviewEmail] = React.useState("");
  const userReviewHandleOpen = () => setReviewOpen(true);
  const userRreviewHandleClose = () => setReviewOpen(false);

  function selectedReport(params) {
    console.log(params, params.row.id);
    const columnValue = params.colDef.field;

    if (columnValue !== "Report" || params.row.status !== "COMPLETE") {
      return;
    }
    console.log(params, params.row.id);
    userReviewHandleOpen(true);
    setUserReviewEmail(params.row.id);
  }
  return (
    // <Authenticator>
    //   {({ signOut }) => (
    <div>
      {filterSubmit === "terodocteam@gmail.com" ? (
        <Grid container>
          <Grid item xs={6}>
            <h4>Admin Portal</h4>
          </Grid>

          <Grid
            sx={{
              backgroundColor: "white",
              // height: 600,
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
              columns={adminColumns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              // checkboxSelection
              autoHeight
              disableSelectionOnClick
              loading={loading}
              onCellClick={currentlySelected}
            />
          </Grid>

          {reviewOpen ? (
            <Modal
              open={reviewOpen}
              onClose={reviewHandleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Grid container>
                  <Grid item xs={12} md={8}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography
                          textAlign={"left"}
                          component="div"
                          sx={{
                            textAlign: "justify",
                            float: "left",
                            display: { xs: "block", sm: "block" },
                          }}
                          color="#1876D1"
                          fontStyle={""}
                        >
                          <h3>Your Statement Of Purpose (SOP) Critique</h3>
                          <Divider />
                          <Grid container>
                            <Grid item xs={6} md={9}>
                              <p>
                                TeroDoc Reviewer<br></br>terodocteam@gmail.com
                              </p>
                            </Grid>
                            <Grid item xs={6} md={3}>
                              <p>{new Date().toLocaleString()}</p>
                            </Grid>
                          </Grid>
                          <Divider />
                          <p style={{ color: "#000" }}>
                            Hi {reviewEmail},<br></br> <br></br>This free resume
                            review is meant to give you an honest and
                            straightforward assessment with some suggestions to
                            help in your job search. I'm able to offer insight
                            into how you compare to other job seekers competing
                            for the same positions because I personally review
                            hundreds of resumes each month.
                          </p>
                          <br></br>
                          <h3>Visual Presentation and Organization</h3>
                          <p style={{ color: "#000" }}>
                            We've all been told that looks don't matter as much
                            as substance, but in the case of your resume this
                            just isn't true. I think your design is visually
                            uneven. I'd like to see your document more polished,
                            something more fitting of your experience level.
                            Remember that your resume is your marketing tool.
                            It's the first view a potential employer has of you.
                            That said, your use of bullets is great! They're
                            really helpful at highlighting the best pieces of
                            information while breaking up long sections of text.
                            At the same time, you shouldn't have too many
                            bullets that they make your resume difficult to
                            read!
                          </p>

                          <br></br>
                          <h3>SOP Writing</h3>
                          <p style={{ color: "#000" }}>
                            Your career summary is not as long as it could be.
                            This is a key component to compel the hiring manager
                            to keep reading. Improve your career summary to
                            define you as a professional and cover those areas
                            most relevant to the job that you seek. Based on how
                            the resume is phrased, you come across as a "doer,"
                            as opposed to an "achiever." Too many of your
                            sentences are task-based and not results-based. This
                            means that they tell you what you did, instead of
                            what you achieved. This is a normal mistake for
                            non-professional resume writers. To be effective and
                            create excitement a good resume aids the hiring
                            executive envisage you delivering similar
                            achievements at his or her company. Here are some
                            examples of task-based sentences in your resume:
                            “Provide personal, academic, social, and cultural
                            assistance and connect students to resources”
                            “Sampled real-world networks to construct and
                            visualize small-world networks” Employers want to
                            know about your previous contributions and
                            specifically how you've helped make a difference.
                            More significantly, they want to know how you are
                            going to make a difference at their company. In
                            reading your resume, I did not find the kind of
                            active language that would bring your work to life.
                            Instead, I saw passive words and non-action verbs.
                            Phrases like “Design” and “performed” are
                            monotonous, overused, and add little value to your
                            resume. Strong action verbs, used with engaging
                            language to outline outstanding achievements, are
                            essential parts of a soundly-built resume. Now,
                            let's see how to put this into practice. Here's a
                            real life sample taken from a former client's
                            resume. By changing the language, we helped to
                            enhance the perception of the job-seeker. Passive
                            language / Doing: “Negotiated contracts with
                            vendors” Action language / Achieving: “Slashed
                            payroll/benefits administration costs 30% by
                            negotiating pricing and fees, while ensuring the
                            continuation and enhancements of services.” An
                            adjustment like this makes a big improvement. A
                            regular review of every word and sentence in your
                            resume is an important thing to do, especially if
                            you're the only one looking at it. Hiring managers
                            are looking for an excuse to eliminate you as a
                            candidate. You may not be able to see awkward
                            phrases and grammatical errors if you've already
                            spent too much time with your own resume.
                          </p>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} md={4}></Grid>
                </Grid>
                <Button onClick={reviewHandleClose}>Close</Button>
              </Box>
            </Modal>
          ) : (
            <></>
          )}
        </Grid>
      ) : (
        <Grid container>
          <Grid item xs={6}>
            <h4>Review Request</h4>
          </Grid>

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
              <Link to="/pricing">here</Link> to view the pricing plan.
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
              <Grid item xs={12} md={6}>
                <p>
                  Follow the steps:
                  <br></br>
                  1. Enter your details in the form on right side. <br></br>
                  2. Accept the terms and conditions. <br></br>
                  3. Check the price before submitting for review.<br></br>
                  4. On submitting to to checkout page for payment. <br></br>
                  5. After successful payment, give us sometime to review you
                  sop.
                  <br></br>
                  6. Check in the table above for updated SOP after review.
                  <br></br>
                </p>
              </Grid>

              <Grid item xs={12} md={6}>
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
                      {/* After uploading document for review request, showing
                    success/error alert */}
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
                          disabled={btnDisabled}
                          onClick={() => uploadFile(selectedFile)}
                        >
                          Submit for Review
                        </Button>
                      </h4>
                      {/* {isShown ? (
                      clientSecret && (
                        <Elements options={options} stripe={stripePromise}>
                          <CheckoutForm />
                        </Elements>
                      )
                    ) : (
                      <></>
                    )} */}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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
                Below table contains total number of review requests data of
                your Statement of Purpose.
              </Alert>
            </Collapse>
          </Grid>
          <Grid
            sx={{
              backgroundColor: "white",
              // height: 310,
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
              pageSize={5}
              rowsPerPageOptions={[5]}
              // checkboxSelection
              disableSelectionOnClick
              autoHeight
              loading={loading}
              onCellClick={selectedReport}
            />
          </Grid>
          {reviewOpen ? (
            <Modal
              open={reviewOpen}
              onClose={reviewHandleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Grid container>
                  <Grid item xs={12} md={8}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography
                          textAlign={"left"}
                          component="div"
                          sx={{
                            textAlign: "justify",
                            float: "left",
                            display: { xs: "block", sm: "block" },
                          }}
                          color="#1876D1"
                          fontStyle={""}
                        >
                          <h3>Your Statement Of Purpose (SOP) Critique</h3>
                          <Divider />
                          <Grid container>
                            <Grid item xs={6} md={9}>
                              <p>
                                TeroDoc Reviewer<br></br>terodocteam@gmail.com
                              </p>
                            </Grid>
                            <Grid item xs={6} md={3}>
                              <p>{new Date().toLocaleString()}</p>
                            </Grid>
                          </Grid>
                          <Divider />
                          <p style={{ color: "#000" }}>
                            Hi {reviewEmail},<br></br> <br></br>This free resume
                            review is meant to give you an honest and
                            straightforward assessment with some suggestions to
                            help in your job search. I'm able to offer insight
                            into how you compare to other job seekers competing
                            for the same positions because I personally review
                            hundreds of resumes each month.
                          </p>
                          <br></br>
                          <h3>Visual Presentation and Organization</h3>
                          <p style={{ color: "#000" }}>
                            We've all been told that looks don't matter as much
                            as substance, but in the case of your resume this
                            just isn't true. I think your design is visually
                            uneven. I'd like to see your document more polished,
                            something more fitting of your experience level.
                            Remember that your resume is your marketing tool.
                            It's the first view a potential employer has of you.
                            That said, your use of bullets is great! They're
                            really helpful at highlighting the best pieces of
                            information while breaking up long sections of text.
                            At the same time, you shouldn't have too many
                            bullets that they make your resume difficult to
                            read!
                          </p>

                          <br></br>
                          <h3>SOP Writing</h3>
                          <p style={{ color: "#000" }}>
                            Your career summary is not as long as it could be.
                            This is a key component to compel the hiring manager
                            to keep reading. Improve your career summary to
                            define you as a professional and cover those areas
                            most relevant to the job that you seek. Based on how
                            the resume is phrased, you come across as a "doer,"
                            as opposed to an "achiever." Too many of your
                            sentences are task-based and not results-based. This
                            means that they tell you what you did, instead of
                            what you achieved. This is a normal mistake for
                            non-professional resume writers. To be effective and
                            create excitement a good resume aids the hiring
                            executive envisage you delivering similar
                            achievements at his or her company. Here are some
                            examples of task-based sentences in your resume:
                            “Provide personal, academic, social, and cultural
                            assistance and connect students to resources”
                            “Sampled real-world networks to construct and
                            visualize small-world networks” Employers want to
                            know about your previous contributions and
                            specifically how you've helped make a difference.
                            More significantly, they want to know how you are
                            going to make a difference at their company. In
                            reading your resume, I did not find the kind of
                            active language that would bring your work to life.
                            Instead, I saw passive words and non-action verbs.
                            Phrases like “Design” and “performed” are
                            monotonous, overused, and add little value to your
                            resume. Strong action verbs, used with engaging
                            language to outline outstanding achievements, are
                            essential parts of a soundly-built resume. Now,
                            let's see how to put this into practice. Here's a
                            real life sample taken from a former client's
                            resume. By changing the language, we helped to
                            enhance the perception of the job-seeker. Passive
                            language / Doing: “Negotiated contracts with
                            vendors” Action language / Achieving: “Slashed
                            payroll/benefits administration costs 30% by
                            negotiating pricing and fees, while ensuring the
                            continuation and enhancements of services.” An
                            adjustment like this makes a big improvement. A
                            regular review of every word and sentence in your
                            resume is an important thing to do, especially if
                            you're the only one looking at it. Hiring managers
                            are looking for an excuse to eliminate you as a
                            candidate. You may not be able to see awkward
                            phrases and grammatical errors if you've already
                            spent too much time with your own resume.
                          </p>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} md={4}></Grid>
                </Grid>
                <Button onClick={reviewHandleClose}>Close</Button>
              </Box>
            </Modal>
          ) : (
            <></>
          )}
        </Grid>
      )}
    </div>
    //   )}
    // </Authenticator>
  );
}
