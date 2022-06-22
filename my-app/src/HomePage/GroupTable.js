import { CardMedia, CircularProgress, Typography, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { GetTeamData } from "../Common/getTeamDataUsingUUID";

export default function GroupTable({ name, groupData, teams }) {
  const [rows, setRows] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    let groupDetailData = [];
    groupData.forEach((group) => {
      let value = GetTeamData(group, teams);
      if (value !== null) {
        groupDetailData.push(value);
      }
    });

    groupDetailData = groupDetailData.sort((a, b) => b.game.pts - a.game.pts);
    setRows(groupDetailData);
    setIsLoading(false);
  }, [teams]);

  return (
    <TableContainer>
      <Table sx={{ width: "100%" }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                border: "none",
                fontWeight: 800,
                fontSize: "20px",
                fontFamily: "Questrial",
                color: "white",
              }}
            >
              {name}
            </TableCell>
            <TableCell
              sx={{
                border: "none",
                fontWeight: 600,
                fontSize: "10px",
                fontFamily: "Questrial",
                color: "white",
                width: "20px",
              }}
            >
              MP
            </TableCell>
            <TableCell
              sx={{
                border: "none",
                fontWeight: 600,
                fontSize: "10px",
                fontFamily: "Questrial",
                color: "white",
                width: "20px",
              }}
            >
              W
            </TableCell>
            <TableCell
              sx={{
                border: "none",
                fontWeight: 600,
                fontSize: "10px",
                fontFamily: "Questrial",
                color: "white",
                width: "20px",
              }}
            >
              D
            </TableCell>
            <TableCell
              sx={{
                border: "none",
                fontWeight: 600,
                fontSize: "10px",
                fontFamily: "Questrial",
                color: "white",
              }}
            >
              L
            </TableCell>
            <TableCell
              sx={{
                border: "none",
                fontWeight: 600,
                fontSize: "10px",
                fontFamily: "Questrial",
                color: "white",
              }}
            >
              PTS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow
              colSpan={6}
              sx={{ padding: "20px", justifyContent: "center" }}
            >
              <CircularProgress />
            </TableRow>
          ) : (
            <>
              {rows.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: "none" },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      display: "flex",
                      justifyItems: "center",
                      alignContent: "center",
                      border: "none",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        fontSize: "15px",
                        fontFamily: "Questrial",
                        color: "white",
                        display: "flex",
                        justifyItems: "center",
                      }}
                    >
                      {index + 1}
                    </Typography>
                    <CardMedia
                      component="img"
                      image={row.logo}
                      alt="Paella dish"
                      sx={{
                        mr: 1,
                        width: "40px",
                        height: "25px",
                        objectFit: "contain",
                        margin: "0px 2px",
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 300,
                        fontSize: "15px",
                        fontFamily: "Questrial",
                        color: "white",
                        display: { xs: "none", md: "flex" },
                      }}
                    >
                      {row.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 300,
                        fontSize: "15px",
                        fontFamily: "Questrial",
                        color: "white",
                        display: { xs: "flex", md: "none" },
                      }}
                    >
                      {row.abbreviation}
                    </Typography>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      border: "none",
                      fontWeight: 500,
                      fontSize: "10px",
                      fontFamily: "Questrial",
                      color: "white",
                    }}
                  >
                    {row.game.matchPlayed}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      border: "none",
                      fontWeight: 500,
                      fontSize: "10px",
                      fontFamily: "Questrial",
                      color: "white",
                    }}
                  >
                    {row.game.win}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      border: "none",
                      fontWeight: 500,
                      fontSize: "10px",
                      fontFamily: "Questrial",
                      color: "white",
                    }}
                  >
                    {row.game.draw}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      border: "none",
                      fontWeight: 500,
                      fontSize: "10px",
                      fontFamily: "Questrial",
                      color: "white",
                    }}
                  >
                    {row.game.lost}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      border: "none",
                      fontWeight: 500,
                      fontSize: "10px",
                      fontFamily: "Questrial",
                      color: "white",
                    }}
                  >
                    {row.game.pts}
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
