import { Box, Grid } from "@mui/material";
import { Nav } from "./header/Nav";
import { Sidebar } from "./sidebar/Sidebar";

export function Layout(props) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <div style={{ display: "flex" }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Nav />
            </Grid>
            <Grid mt={6} item xs={12}>
              <Sidebar history={props.history} />
            </Grid>
            {/* <Grid item xs={9.3}>
              <div style={{ marginTop: "5%" }}>{props.children}</div>
            
            </Grid> */}
          </Grid>
        </div>
      </Box>
      {/* <Sidebar history={props.history} />
        <div style={{ marginTop: "4.5%", maxWidth: "100%" }}>
          {props.children}
        </div> */}
    </div>
  );
}
