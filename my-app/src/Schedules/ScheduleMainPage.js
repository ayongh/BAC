import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import GameList from "./GamesList";
import { NACContext } from "../context/index";
import Knockouts from "./Knockouts";

export default function ScheduleMainPage() {
  const [value, setValue] = React.useState("1");
  const [GroupStage, setGroupStage] = React.useState([]);
  const [KnockOutStage, SetknowOutStage] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { state } = useContext(NACContext);

  useEffect(() => {
    let newKnockOutStage = [];
    let group = [];
    state.group.forEach((element) => {
      if (element.stage == "Group") {
        group.push(element);
      } else {
        newKnockOutStage.push(element);
      }
    });

    setGroupStage(group);
    SetknowOutStage(newKnockOutStage);
  }, [state.group]);

  return (
    <Grid container sx={{ marginTop: "80px" }}>
      {/* Header */}
      <Grid item xs={12} textAlign="center">
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "25px",
            fontFamily: "Questrial",
            color: "black",
          }}
        >
          MATCHES
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="Tabs where selection follows focus"
            selectionFollowsFocus
          >
            <Tab
              label="GROUPS"
              sx={{
                fontWeight: 800,
                fontSize: "15px",
                fontFamily: "Questrial",
                color: "black",
              }}
              value="1"
            />
            <Tab
              label="KNOCKOUTS"
              sx={{
                fontWeight: 800,
                fontSize: "15px",
                fontFamily: "Questrial",
                color: "black",
              }}
              value="2"
            />
          </Tabs>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        justifyContent="center"
        display={"flex"}
        sx={{ marginTop: "40px" }}
      >
        {value === "1" && <GameList StageData={GroupStage} />}
        {value === "2" && <Knockouts StageData={KnockOutStage} />}
      </Grid>
    </Grid>
  );
}
