import { Grid } from "@mui/material";
import CollapseSchedule from "./CollapseSchedule";

export default function GameList({ StageData }) {
  return (
    <>
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
          {group.field.map((field) => (
            <CollapseSchedule field={field} group={group} />
          ))}
        </Grid>
      ))}
    </>
  );
}
