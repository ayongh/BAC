import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Game from "./Game";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CollapseSchedule({ field, group }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          margin: "20px 0px",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Link href={field?.location} target="_blank" underline="hover">
          <Typography
            sx={{
              border: "none",
              fontWeight: { xs: 600, md: 800 },
              fontSize: { xs: "15px", md: "20px" },
              fontFamily: "Questrial",
            }}
          >
            <AddLocationAltIcon sx={{ marginRight: "10px" }} />
            {field.name}
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ width: "100%" }}>
          <CardActions disableSpacing sx={{ padding: "30px 20px" }}>
            <Typography
              variant="h7"
              sx={{
                border: "none",
                fontWeight: { xs: 600, md: 700 },
                fontSize: { xs: "15px", md: "20px" },
                fontFamily: "Questrial",
              }}
            >
              {group.name}
            </Typography>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {field.games.map((game) => (
                <Game game={game} field={field} group={group} />
              ))}
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </>
  );
}
