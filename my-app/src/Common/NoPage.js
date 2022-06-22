import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function NoPage() {
  return (
    <Grid container direction="row">
      <Grid item xs={12} lg={3}>
        <Typography>NO PAGE FOUND</Typography>
      </Grid>
    </Grid>
  );
}
