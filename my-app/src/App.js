import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { createTheme, Fab } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { NACContextProvier } from "./context";
import Faq from "./FAQ/Faq";
import FAQMainPage from "./FAQ/FAQMainpage";
import { HomePage } from "./HomePage/HomePage";
import MainPage from "./MainTab/MainPage";
import Rules from "./Rules/Rules";
import ScheduleMainPage from "./Schedules/ScheduleMainPage";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#bc1427",
    },
    secondary: {
      main: "#d9ab2a",
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 200,
      lineHeight: 1.25,
    },
    h6: {
      fontSize: "1.4rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.21,
      letterSpacing: "0em",
    },
  },
});

function App() {
  const [faqDialog, setFAQDialog] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <NACContextProvier>
        <Faq
          open={faqDialog}
          handleClose={() => {
            setFAQDialog(false);
          }}
        />
        <MainPage />
        <BrowserRouter>
          <Routes>
            <Route exact path="/faq" element={<FAQMainPage />} />
            <Route exact path="/schedule" element={<ScheduleMainPage />} />
            <Route exact path="/rules" element={<Rules />} />
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
        <Fab
          size="small"
          sx={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            background: "#fdc52c",
            color: "white",
          }}
          onClick={() => {
            setFAQDialog(true);
          }}
        >
          <QuestionMarkIcon />
        </Fab>
      </NACContextProvier>
    </ThemeProvider>
  );
}

export default App;
