import CloseIcon from "@mui/icons-material/Close";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import { Alert, Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import clsx from "clsx";
import * as React from "react";
import { useEffect, useState } from "react";

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
    field: "decision",
    headerName: "Decision",
    width: 130,
    editable: false,
    cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        negative: params.value === "Reject",
        neutral: params.value === "Pending",
        positive: params.value === "Admit",
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

export function SopPage() {
  const [dbData, setDbData] = useState({});
  const [branchChange, setbranchChange] = useState("");
  const [universityChange, setUniversityChange] = React.useState("");
  const [filterSubmit, setFilterSubmit] = React.useState("all");
  const [open, setOpen] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    async function fetchData() {
      let active = true;
      setLoading(true);
      try {
        const res = await axios.get(
          "https://e7q2a20ulk.execute-api.us-east-1.amazonaws.com/prod/hello?q=" +
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
  }, [filterSubmit]);

  const branchChangeFunction = (event) => {
    setbranchChange(event.target.value);
  };

  const universityChangeFunction = (event) => {
    setUniversityChange(event.target.value);
  };

  const filterSubmitFunction = () => {
    setFilterSubmit(universityChange + "_" + branchChange);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <h4>Statement of Purpose</h4>
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
              Select University and Branch to search SOPs and use the table
              filters for further filtering of Term, Year & Decision.
            </Alert>
          </Collapse>
        </Grid>
        <Box sx={{ flexGrow: 1 }}>
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
                  <MenuItem value="Computer Science">Computer Science</MenuItem>
                  {/* <MenuItem value="Mechanical">Mechanical</MenuItem> */}
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
        </Box>

        <Grid
          sx={{
            backgroundColor: "white",
            height: 500,
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
          height="100vh"
          xs={12}
        >
          <DataGrid
            rows={dbData}
            getRowId={(row) => row.timestamp}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            // checkboxSelection
            disableSelectionOnClick
            loading={loading}
          />
        </Grid>
      </Grid>
    </div>
  );
}
