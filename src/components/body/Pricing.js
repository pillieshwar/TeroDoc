import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CloseIcon from "@mui/icons-material/Close";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Alert, Button, Grid } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    " FEATURES",
    <h2>STARTER</h2>,
    <span>
      <h2>BASIC</h2>
      <h3>
        <CurrencyRupeeRoundedIcon
          mt={7}
          color="success"
        ></CurrencyRupeeRoundedIcon>
        299
      </h3>
      (One-Time-Pay)
    </span>,
    <span>
      <h2>PRO</h2>
      <h3>
        <CurrencyRupeeRoundedIcon
          mt={7}
          color="success"
        ></CurrencyRupeeRoundedIcon>
        2499
      </h3>
      (One-Time-Pay)
    </span>
  ),
  // createData(
  //   " Price",
  //   <span>
  //     <h3>-</h3>
  //   </span>,
  //   <span>
  //     <h3>
  //       <CurrencyRupeeRoundedIcon
  //         mt={7}
  //         color="success"
  //       ></CurrencyRupeeRoundedIcon>
  //       699
  //     </h3>
  //     (One-Time-Pay)
  //   </span>,
  //   <span>
  //     <h3>
  //       <CurrencyRupeeRoundedIcon
  //         mt={7}
  //         color="success"
  //       ></CurrencyRupeeRoundedIcon>
  //       2999
  //     </h3>{" "}
  //     (One-Time-Pay)
  //   </span>
  // ),

  // createData(""),
  // createData(
  //   " Access to view SOPs",
  //   <CancelRoundedIcon color="error" />,
  //   <CheckCircleRoundedIcon color="info" />,
  //   <CheckCircleRoundedIcon color="success" />
  // ),

  // createData(
  //   "25 Free Viewable SOPs",
  //   <CheckCircleRoundedIcon color="success" />,
  //   <CheckCircleRoundedIcon color="info" />,
  //   <CheckCircleRoundedIcon color="success" />
  // ),

  createData(
    "Unlimited Free Viewable SOPs",
    <CancelRoundedIcon color="error" />,
    <CheckCircleRoundedIcon color="info" />,
    <CheckCircleRoundedIcon color="success" />
  ),
  // createData(""),
  createData("Number of Review Requests", "1", "1", "3"),
  createData(
    "Grammer Check",
    <CheckCircleRoundedIcon color="success" />,
    <CheckCircleRoundedIcon color="info" />,
    <CheckCircleRoundedIcon color="success" />
  ),
  createData(
    "Assistance",
    <CancelRoundedIcon color="error" />,
    <CheckCircleRoundedIcon color="info" />,
    <CheckCircleRoundedIcon color="success" />
  ),
  // createData(""),
  createData(""),

  // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  // createData("Eclair", 262, 16.0, 24, 6.0),
  // createData("Cupcake", 305, 3.7, 67, 4.3),
  // createData("Gingerbread", 356, 16.0, 49, 3.9),
  // createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  // createData("Eclair", 262, 16.0, 24, 6.0),
  // createData("Cupcake", 305, 3.7, 67, 4.3),
  // createData("Gingerbread", 356, 16.0, 49, 3.9),
  // createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  // createData("Eclair", 262, 16.0, 24, 6.0),
  // createData("Cupcake", 305, 3.7, 67, 4.3),
  // createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export function Pricing() {
  const [open, setOpen] = React.useState(true);

  const handleBuyBasic = () => {
    window.open("https://rzp.io/l/UZzbd5O", "_blank");
  };
  const handleBuyPro = () => {
    window.open("https://rzp.io/l/w1cpmhDx", "_blank");
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <h4>Pricing</h4>
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
              Go throught the features of each plan and click on button below to
              purchase best suitable plan.
            </Alert>
          </Collapse>
        </Grid>
        {/*<Grid container xs={12}>
          <Grid item xs={6}>
            <Box>
              <p>Features</p>
            </Box>
          </Grid>
          <Grid item textAlign={"center"} xs={2} bgcolor="gray">
            <Box>
              <p>Start</p>
            </Box>
          </Grid>
          <Grid item textAlign={"center"} xs={2} bgcolor="green">
            <Box>
              <p>Basic</p>
            </Box>
          </Grid>
          <Grid item textAlign={"center"} xs={2} bgcolor="orange">
            <Box>
              <p>Pro</p>
            </Box>
          </Grid>
        </Grid> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {/* <TableHead>
              <TableRow>
                <TableCell width={"50%"}>Dessert (100g serving)</TableCell>
                <TableCell align="center">Calories</TableCell>
                <TableCell align="center">Fat&nbsp;(g)</TableCell>
                <TableCell align="center">Carbs&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead> */}
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ bgcolor: "#F3F2F2" }} align="center">
                    {row.calories}
                  </TableCell>
                  <TableCell sx={{ bgcolor: "#59D35C" }} align="center">
                    {row.fat}
                  </TableCell>
                  <TableCell sx={{ bgcolor: "#F3F2F2" }} align="center">
                    {row.carbs}
                  </TableCell>
                  {/* <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}
              <TableRow
                key="pay"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Payment
                </TableCell>
                <TableCell align="center">
                  <Button onClick={handleBuyBasic} variant="outlined">
                    Free
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button onClick={handleBuyBasic} variant="outlined">
                    <ShoppingCartRoundedIcon color="info" /> BUY
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button onClick={handleBuyPro} variant="outlined">
                    <ShoppingCartRoundedIcon color="info" /> BUY
                  </Button>
                </TableCell>
                {/* <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
}
