import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { GroupA, GroupB, GroupC, GroupD } from "../Data/groupStageData";
import GroupTable from "./GroupTable";

export default function GroupsTab({ teams }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ color: "white", width: "100%" }}>
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab
          label="Group A"
          sx={{
            fontWeight: 500,
            fontSize: "12px",
            fontFamily: "Questrial",
            color: "white",
          }}
          value="1"
        />
        <Tab
          label="Group B"
          sx={{
            fontWeight: 500,
            fontSize: "12px",
            fontFamily: "Questrial",
            color: "white",
          }}
          value="2"
        />
        <Tab
          label="Group C"
          sx={{
            fontWeight: 500,
            fontSize: "12px",
            fontFamily: "Questrial",
            color: "white",
          }}
          value="3"
        />
        <Tab
          label="Group D"
          sx={{
            fontWeight: 500,
            fontSize: "12px",
            fontFamily: "Questrial",
            color: "white",
          }}
          value="4"
        />
      </Tabs>

      <Grid container>
        <Grid item xs={12}>
          {value === "1" && (
            <GroupTable name={"Group A"} groupData={GroupA} teams={teams} />
          )}
          {value === "2" && (
            <GroupTable name={"Group B"} groupData={GroupB} teams={teams} />
          )}
          {value === "3" && (
            <GroupTable name={"Group C"} groupData={GroupC} teams={teams} />
          )}
          {value === "4" && (
            <GroupTable name={"Group D"} groupData={GroupD} teams={teams} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
