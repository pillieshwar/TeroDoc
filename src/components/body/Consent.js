import { Box, Grid } from "@mui/material";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Collapse from "@mui/material/Collapse";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";

export function Consent() {
  const ariaLabel = { "aria-label": "description" };
  const [consentDate] = React.useState(new Date().toLocaleDateString());
  const [selectedFile, setSelectedFile] = useState(null);
  const [ip, setIP] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [countryName, setCountryName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [alert, setAlert] = useState(false);
  const [feedbackLoop, setFeedbackLoop] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [severity, setSeverity] = useState("");
  const [open, setOpen] = React.useState(true);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const getData = async () => {
    try {
      const res = await axios.get("https://geolocation-db.com/json/");
      setIP(res.data.IPv4);
      setCountryCode(res.data.country_code);
      setCountryName(res.data.country_name);
      setState(res.data.state);
      setCity(res.data.city);
      setPostal(res.data.postal);
      setLatitude(res.data.latitude);
      setLongitude(res.data.longitude);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
    if (name && lastname) {
      setBtnDisabled(false);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (selectedFile && lastname) {
      setBtnDisabled(false);
    }
  };

  const handleLastNameChange = (e) => {
    setLastname(e.target.value);
    if (name && selectedFile) {
      setBtnDisabled(false);
    }
  };

  return (
    <div data-testid="testid-consent">
      <Grid container>
        <Grid item xs={12}>
          <h4>Consent</h4>
        </Grid>
        <Grid item xs={12}>
          <Collapse in={open}>
            <Alert severity="info">
              Upload your Statement of Purpose and enter your name after
              agreeing to the terms and conditions below.
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
            <Grid container spacing={2} textAlign={"left"}>
              <Grid item xs={12}>
                <Card color="#C7D2FC" padding={10}>
                  {/* <CardActionArea> */}
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="inherit"
                      textAlign={"center"}
                    >
                      AGREEMENT TERMS & CONDITIONS
                    </Typography>
                    <Typography variant="body2" textAlign={"right"}>
                      REFERENCE NUMBER: 1002202201<br></br>
                      VERSION: 0.0.1
                    </Typography>
                    <Typography variant="overline">
                      I HEREBY GIVE MY PERMISSION TO SHARE WITH ANYONE THE
                      CONTENTS OF MY STATEMENT OF PURPOSE (SOP) EXCEPT THE PART
                      THAT CAN TRACE BACK THE OWNERSHIP OF THE SHARED SOP. I
                      UNDERSTAND THAT THE AGREED-UPON CONTENTS OF MY STATEMENT
                      OF PURPOSE WILL BE POSTED ON A PUBLIC GOOGLE SITE PAGE
                      THAT IS SEARCHABLE AND ACCESSIBLE ON THE PUBLIC INTERNET.
                      I HEREBY GIVE FULL RIGHTS TO ANYONE WHO WANTS TO USE IT
                      FOR ANY PURPOSE. I HEREBY WAIVE OWNERSHIP OF THE
                      AGREED-UPON CONTENT, AND I UNDERSTAND THAT YOUR BODY IS NO
                      LONGER LIABLE TO PAY ANY FORM OF COMPENSATION IN CASE I
                      FILE A LEGAL COMPLAINT FOR WHATSOEVER FORM OF OWNERSHIP IN
                      ANY COURT. I UNDERSTAND THAT I HAVE THE AUTHORITY TO VOID
                      THE TERMS OF THIS AGREEMENT AT ANY POINT IN THE FUTURE BY
                      PROVIDING A WRITTEN REQUEST. <br></br>
                      <br></br>THIS AGREEMENT IS EFFECTIVE INDEFINITELY FROM
                      10/3/2022 UNTIL WE RECEIVE A WRITTEN REQUEST TO TERMINATE
                      THIS AGREEMENT. IF YOU ARE ACCEPTING ON BEHALF OF SOMEONE
                      ELSE (THIRD PARTY), YOU REPRESENT AND WARRANT THAT (I) YOU
                      HAVE FULL LEGAL AUTHORITY TO BIND THE THIRD PARTY TO THIS
                      AGREEMENT; (II) YOU HAVE READ AND UNDERSTAND THIS
                      AGREEMENT; AND (III) YOU AGREE ON BEHALF OF THIRD PARTY,
                      TO THIS AGREEMENT. YOUR CONSENT TO SHARE AGREED-UPON
                      CONTENT IS VOLUNTARY, AND YOU MAY WITHDRAW
                      <br></br>
                      <br></br>YOUR CONSENT AT ANY TIME. SHOULD YOU HAVE ANY
                      QUESTIONS ABOUT THIS PROCESS OR WISH TO WITHDRAW YOUR
                      CONSENT, PLEASE CONTACT THE TEAM (terodocteam@gmail.com).
                      BY CLICKING AGREE AND SUBMIT, YOU AGREE TO THE TERMS AND
                      CONDITIONS.
                    </Typography>
                    <br></br>
                    <br></br>
                    First Name:{"  "}
                    <Input
                      placeholder="  John"
                      inputProps={ariaLabel}
                      onChange={handleNameChange}
                    />
                    <br></br>
                    Last Name:{"  "}
                    <Input
                      placeholder="  Doe"
                      inputProps={ariaLabel}
                      onChange={handleLastNameChange}
                    />
                    <br></br>
                    Date: {consentDate}
                    <br></br>
                    <br></br>
                    <input type="file" onChange={handleFileInput} />
                    <Typography
                      gutterBottom
                      variant="inherit"
                      textAlign={"center"}
                    >
                      <br></br>
                      {feedbackLoop ? <CircularProgress /> : <></>}

                      {alert ? (
                        <Alert severity={severity}>{alertContent}</Alert>
                      ) : (
                        <></>
                      )}
                      <br></br>
                      <button
                        disabled={btnDisabled}
                        // onClick={() => uploadFile(selectedFile)}
                      >
                        AGREE AND SUBMIT
                      </button>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Box>
        </Grid>
        {/* <Button onClick={signOut}>Sign Out</Button> */}
      </Grid>
    </div>
  );
}
