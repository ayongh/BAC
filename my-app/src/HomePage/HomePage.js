import { CardMedia, Grid, Paper, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkIcon from "@mui/icons-material/Link";
import { Sponsors } from "../Data/sponsor";
import { TeamList } from "../Data/Teamlist";
import GroupsTab from "./GroupsTab";
import { useContext } from "react";
import { NACContext } from "../context/index";

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

export const HomePage = () => {
  const {
    state: { teams, pageLoading },
    dispatch,
  } = useContext(NACContext);

  return (
    <div style={{ fontFamily: "Fascinate" }}>
      <Grid
        container
        direction={"row"}
        sx={{
          height: { xs: "100%", md: "100%" },
          textAlign: { xs: "center", md: "left" },
          backgroundColor: "#e0e5eb",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            direction="row"
            sx={{
              padding: {
                xs: "20px",
                md: "10px 10px 10px 50px",
                lg: "30px 50px",
              },
              marginTop: { xs: "80px", md: "0px" },
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: "50px",
                  fontFamily: "Questrial",
                }}
              >
                Welcome
              </Typography>
            </Grid>

            <Grid item xs={12} md={10} lg={7}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: "30px",
                  fontFamily: "Questrial",
                  color: "#fdc52c",
                }}
              >
                <span
                  style={{
                    fontWeight: 200,
                    fontSize: "20px",
                    fontFamily: "Questrial",
                    color: "rgb(41, 40, 61)",
                  }}
                >
                  To
                </span>{" "}
                2022
                <span style={{ color: "rgb(41, 40, 61)" }}> NAC</span>
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: "40px",
                  fontFamily: "Questrial",
                }}
              >
                Soccer Tournament
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#29283d",
                  fontFamily: "Questrial",
                }}
              >
                Baltimore Athletic clubs welcomes you to 5th NAC soccer
                tournament. Somthing we would want to address here, wright now
                this is just a placeholder for the text
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ mt: "10px" }}>
              <Grid
                container
                spacing={1}
                sx={{
                  textAlign: "center",
                  justifyContent: { xs: "center", md: "left" },
                }}
              >
                <Grid item>
                  <FacebookIcon />
                </Grid>
                <Grid item>
                  <InstagramIcon />
                </Grid>
                <Grid item>
                  <LinkIcon />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Secound part of the Home page */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            padding: { xs: "10px 30px", md: "100px 20px" },
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            minHeight: { xs: "100%", md: "80vh" },
          }}
        >
          <Paper
            style={{
              width: "100%",
              background: "#555272",
              padding: "20px",
              color: "white",
            }}
            elevation={16}
          >
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  variant="h7"
                  sx={{
                    fontWeight: 800,
                    fontSize: "15px",
                    fontFamily: "Questrial",
                  }}
                >
                  Groups
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <GroupsTab teams={teams} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* Sponsors */}
      <Grid
        container
        direction={"row"}
        sx={{
          height: { xs: "100%", md: "20vh" },
          textAlign: { xs: "center", md: "left" },
          padding: "40px 20px",
          justifyContent: "center",
          display: { xs: "grid", md: "flex" },
        }}
      >
        <Grid
          item
          textAlign="center"
          sx={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            borderRight: { xs: "2px none #fdc52c", md: "2px solid #fdc52c" },
            padding: "0px 10px",
            display: "grid",
            textAlign: { xs: "center", md: "right" },
            marginBottom: { xs: "20px", md: "0px" },
            paddingBottom: { xs: "20px", md: "0px" },
            borderBottom: { xs: "2px solid #fdc52c", md: "2px none #fdc52c" },
          }}
        >
          <Typography
            variant="h7"
            sx={{
              fontWeight: 100,
              fontSize: "1rem",
              fontFamily: "Questrial",
            }}
          >
            NAC
          </Typography>
          <Typography
            variant="h7"
            sx={{
              fontWeight: 700,
              fontSize: "1rem",
              fontFamily: "Questrial",
            }}
          >
            Sponsors
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Grid
            container
            justifyContent={"center"}
            sx={{
              justifyContent: "center",
              display: { xs: "flex", md: "flex" },
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {Sponsors.map((element) => (
              <Grid item textAlign="center">
                <CardMedia
                  component="img"
                  image={element?.logo}
                  alt="Paella dish"
                  sx={{
                    mr: 1,
                    width: "100px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
