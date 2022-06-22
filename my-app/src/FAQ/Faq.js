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
import RulesAgreement from "../Asset/RulesAgreement.pdf";
import liabilityWaiver from "../Asset/liabilityWaiver.pdf";
import NACVideo from "../Asset/videoNac.mp4";
import ReactPlayer from "react-player";
import React, { useEffect } from "react";

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
                  <ReactPlayer
                    url={NACVideo}
                    width="100%"
                    height="100%"
                    controls={true}
                  />
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
