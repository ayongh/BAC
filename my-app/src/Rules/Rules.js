import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export default function Rules() {
  return (
    <Grid container sx={{ marginTop: "80px", padding: "10px" }} spacing={1}>
      <Grid item xs={12} md={2}>
        <Typography
          variant="h6"
          sx={{
            border: "none",
            marginTop: "15px",
            fontWeight: { xs: 600, md: 800 },
            fontSize: { xs: "15px", md: "15px" },
            fontFamily: "Questrial",
            textAlign: { xs: "center", md: "right" },
          }}
        >
          RULES AND REGULATIONS
        </Typography>
      </Grid>
      <Grid item xs={12} md={9}>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                All the games of the tournament will be conducted according to
                the latest FIFA rules and regulations{" "}
                <Link href="https://www.fifa.com/" target="_blank">
                  (FIFA)
                </Link>{" "}
                .
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                A team shall consist up to 25 players in the full roster, 11
                players on the field with unlimited substitutes. A complete
                team’s roster should be submitted by June 23rd, 2022 (11:59 PM
                EST).
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                Only the full names (official) of all the players will be
                accepted on the roster.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                Every player should bring a proper identification (any
                government issued picture ID) to all the games.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                No foreign players will be allowed to play. Only Nepali
                descendant players are allowed to participate in the tournament.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                A player cannot play from more than one team. Any player and the
                team who violates the rule will be terminated from the
                tournament.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                Teams are required to be at the designated field at least 15
                minutes prior to their game time.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                Teams not showing up after 10 minutes of the proposed start-time
                will automatically forfeit. (Forfeit final score line will be
                0-3).
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                The officials’ decision on the field will be the final decision.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                All the players are required to wear shin guards.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                If two teams have similar colored jersey in a game, the team
                registered first will have the priority. We recommend all the
                team to bring two sets of jerseys.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                Each team must have a unique numbered jersey for all their
                players. No two players may have the same number.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                Player names and jersey numbers must match the game roster. This
                includes the primary AND alternate jersey.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                Team(s) involved in any kind of fights, violent act or
                misbehavior will be disqualified and terminated from the
                tournament. Also, the team will not be able to participate in
                any future NAC Tournaments. The Organizing Committee will have
                the final decision in such cases.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                Tie sheet will be drawn on June 24th, 2022 at 7pm. The live draw
                will be broadcasted on facebook{" "}
                <Link
                  href="https://www.facebook.com/baltimoreathleticclub/"
                  target="_blank"
                >
                  (Baltimore Athletic Club)
                </Link>
                .
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                There are 16 teams in the tournament. Teams will be divided into
                4 groups (4 teams in each group).
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                Each team will play 2 games in the group stage. The group stage
                games will be 30 minutes halves.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                Top 2 teams of each group at the end of the group stage will
                advance to the quarter finals.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                If the teams finish with the same number of points, their
                position in the table is determined by goal difference, then the
                number of goals scored, then the number of goals conceded. If
                the teams still cannot be separated, their position will be
                determined by their discipline (Number of yellow card/red
                cards). The last resolution will be a penalty shoot out.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                Quarter finals will be 35 minutes halves, Semi-finals will be 40
                minutes halves, and the final game will be 45 minutes halves.
                Half time break will be 5 minutes.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                If the game is tied on regular time, the game will head to extra
                time of 5 mins halves. If the teams are still tied, the game
                will be decided by penalties.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                Two yellow cards in a same game will result in a red card, the
                player will be terminated from the game and will be suspended
                for next game.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                If a player receives a straight red card, the player will be
                terminated from the game and will be suspended for next game.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography
                sx={{
                  border: "none",
                  fontWeight: 100,
                  fontSize: "12px",
                  fontFamily: "Questrial",
                }}
              >
                All items of jewelry (necklaces, rings, bracelets, earrings,
                leather bands, rubber bands, etc.) are strictly forbidden and
                must be removed. Using tape to cover jewelry is not acceptable.
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
