import { Grid, Typography } from "@mui/material";
import CollapseSchedule from "./CollapseSchedule";

export default function Knockouts({ StageData }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        {StageData.map((group) => (
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: { xs: "20px", md: "40px" },
            }}
          >
            <Grid item>
              <Typography
                variant="h7"
                sx={{
                  border: "none",
                  fontWeight: 800,
                  fontSize: "15px",
                  fontFamily: "Questrial",
                }}
              >
                {group.stage}
              </Typography>
            </Grid>
            {group.field.map((field) => (
              <CollapseSchedule field={field} group={group} />
            ))}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
