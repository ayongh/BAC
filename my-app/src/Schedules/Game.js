import { CardMedia, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { GetTeamData } from "../Common/getTeamDataUsingUUID";
import { NACContext } from "../context/index";
export default function Game({ game, field, group }) {
  console.log(game, field);
  const { state } = useContext(NACContext);

  return (
    <Grid
      container
      sx={{
        padding: { xs: "20px", md: "20px 10px 20px 10px" },
      }}
    >
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={3}>
            <Typography
              sx={{
                border: "none",
                fontWeight: 700,
                fontSize: "15px",
                fontFamily: "Questrial",
              }}
            >
              {game.time}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                border: "none",
                fontWeight: 100,
                fontSize: "12px",
                fontFamily: "Questrial",
              }}
            >
              {game.location}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                border: "none",
                fontWeight: 100,
                fontSize: "12px",
                fontFamily: "Questrial",
              }}
            >
              {game?.Group.length > 1 ? game.Group : `Group ${game.Group}`}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    border: "none",
                    fontWeight: 900,
                    fontSize: "15px",
                    fontFamily: "Questrial",
                  }}
                >
                  {GetTeamData(game.TeamA.uuid, state.teams).name}
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={GetTeamData(game.TeamA.uuid, state.teams).logo}
                  alt="Paella dish"
                  sx={{
                    mr: 1,
                    width: { xs: "20px", md: "80px" },
                    height: { xs: "20px", md: "50px" },
                    objectFit: "contain",
                    display: { xs: "none", md: "flex" },
                  }}
                />
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    border: "none",
                    fontWeight: 900,
                    fontSize: "15px",
                    fontFamily: "Questrial",
                  }}
                >
                  {group?.minutes} min
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={GetTeamData(game.TeamB.uuid, state.teams).logo}
                  alt="Paella dish"
                  sx={{
                    mr: 1,
                    width: "80px",
                    height: "50px",
                    objectFit: "contain",
                    display: { xs: "none", md: "flex" },
                  }}
                />{" "}
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    border: "none",
                    fontWeight: 900,
                    fontSize: "15px",
                    fontFamily: "Questrial",
                  }}
                >
                  {GetTeamData(game.TeamB.uuid, state.teams).name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
