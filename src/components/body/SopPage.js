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
import constant from "./../../constants/Constant";
import "./SopPage.css";
import { pdfjs } from "react-pdf";
import { Link } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const columns = [
  {
    field: "srno",
    headerName: "ID",
    width: 160,
    editable: false,
    renderCell: (params) => (
      <div>
        <Link
          to={"/pdfviewer?pdfId=" + params.row.statements3path}
          style={{ textDecoration: "none" }}
        >
          <ListItemText primary={"#" + params.row.srno} />
        </Link>
      </div>
    ),
  },
  {
    field: "statements3path",
    headerName: "SOP",
    width: 80,
    editable: false,
    renderCell: (params) => (
      <div>
        <Link
          to={"/pdfviewer?pdfId=" + params.row.statements3path}
          style={{ textDecoration: "none" }}
        >
          <PictureAsPdfRoundedIcon
            color="error"
            fontSize="small"
            sx={{ ml: "6px" }}
          />
        </Link>
      </div>
    ),
  },
  {
    field: "university",
    headerName: "University",
    // type: "number",
    width: 260,
    editable: false,
    // renderCell: (params) => (
    //   <a
    //     rel="noopener noreferrer"
    //     target="_blank"
    //     href={params.row.statements3path}
    //     color="#000"
    //   >
    //     {params.row.university}
    //   </a>
    // ),
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
          constant.SOP_PAGE_API_GATEWAY + filterSubmit,
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
            {/* <Grid item md={2}></Grid> */}
            <Grid item xs={12} md={5} textAlign={"right"}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 350 }}>
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
                  <MenuItem value="University Of Missouri - Kansas City">
                    University Of Missouri - Kansas City
                  </MenuItem>
                  <MenuItem value="Purdue University">
                    Purdue University
                  </MenuItem>
                  <MenuItem value="University of California, San Diego">
                    University of California, San Diego
                  </MenuItem>
                  <MenuItem value="University of Maryland (College Park)">
                    University of Maryland (College Park)
                  </MenuItem>
                  <MenuItem value="Northeastern University">
                    Northeastern University
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* <Grid item md={1}></Grid> */}
            <Grid item xs={12} md={4}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 350 }}>
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
                  <MenuItem value="Mechanical Engineering">
                    Mechanical Engineering
                  </MenuItem>
                  <MenuItem value="Robotics">Robotics</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* <Grid item md={1}></Grid> */}
            <Grid item mt={2.5} xs={12} md={3} textAlign={"center"}>
              <Button variant="outlined" onClick={filterSubmitFunction}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Grid
          sx={{
            backgroundColor: "white",
            // height: 528,
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
          // height="110vh"
          xs={12}
        >
          <DataGrid
            rows={dbData}
            getRowId={(row) => row.timestamp}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[8]}
            // checkboxSelection
            autoHeight
            disableSelectionOnClick
            loading={loading}
          />
        </Grid>
      </Grid>
    </div>
  );
}
