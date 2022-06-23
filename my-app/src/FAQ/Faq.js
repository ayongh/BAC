import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import liabilityWaiver from "../Asset/liabilityWaiver.pdf";
import RulesAgreement from "../Asset/RulesAgreement.pdf";

export default function Faq({ open, handleClose }) {
  const [displayVideo, setDiplayVideo] = React.useState(false);
  const GetlocalVideoState = localStorage.getItem("welcomeVideo");

  useEffect(() => {
    if (GetlocalVideoState !== null) {
      setDiplayVideo(GetlocalVideoState);
    }
  });

  console.log(GetlocalVideoState, displayVideo);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Note</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Grid container>
            <Grid item xs={12}>
              <Alert severity="warning">
                <AlertTitle>Team Waiver</AlertTitle>
                Please Sign the{" "}
                <Link href={liabilityWaiver} target="_blank">
                  <strong>Waiver of Liability</strong>
                </Link>{" "}
                &{" "}
                <Link href={RulesAgreement} target="_blank">
                  <strong>Rules and Regulation forms</strong>
                </Link>
                and email to{" "}
                <strong>
                  <Link
                    href={
                      "mailto:bibektamang09@gmail.com?subject=Waiver of Liablity and Regulation Forms"
                    }
                    target="_blank"
                  >
                    Bibek T
                  </Link>
                </strong>
                . before June 23rd 2022. Thank
              </Alert>
            </Grid>
            {!displayVideo && (
              <Grid item xs={12}>
                <Alert
                  onClose={() => {
                    localStorage.setItem("welcomeVideo", false);
                    setDiplayVideo(false);
                  }}
                  sx={{ marginTop: "20px" }}
                >
                  <Typography
                    sx={{
                      border: "none",
                      fontWeight: 600,
                      fontSize: "12px",
                      fontFamily: "Questrial",
                    }}
                  >
                    Welcome video by{" "}
                    <Link href="https://www.fifa.com/" target="_blank">
                      Anil Gurung
                    </Link>
                  </Typography>
                </Alert>

                <div style={{ width: "100%" }}>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/LQ8uO4pd9Z4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </Grid>
            )}
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{
            fontWeight: 600,
            fontSize: "10px",
            fontFamily: "Questrial",
            color: "black",
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
