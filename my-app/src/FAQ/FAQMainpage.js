import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import FAQCollapse from "./FAQCollapse";

export default function FAQMainPage() {
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
          Frequently Asked Questions
        </Typography>
      </Grid>
      <Grid item xs={12} md={9}>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem>
            <FAQCollapse question="When and Where is the 5th NAC Soccer Tournament being held?">
              <ListItemText>
                <Typography
                  sx={{
                    border: "none",
                    fontWeight: 100,
                    fontSize: "12px",
                    fontFamily: "Questrial",
                    margin: "0px 20px",
                  }}
                >
                  Friday, July 1st, 2022 through Sunday, July 3rd, 2022. All the
                  games of the tournament will be conducted according to the
                  latest FIFA rules and regulations{" "}
                  <Link href="https://www.fifa.com/" target="_blank">
                    (FIFA)
                  </Link>{" "}
                  .
                </Typography>
              </ListItemText>
            </FAQCollapse>
          </ListItem>

          <ListItem>
            <FAQCollapse question="What is the address for the fields?">
              <ListItemText>
                <Typography
                  sx={{
                    border: "none",
                    fontWeight: 100,
                    fontSize: "12px",
                    fontFamily: "Questrial",
                    margin: "0px 20px",
                  }}
                >
                  Field 1:{" "}
                  <Link
                    href="https://www.google.com/maps/place/9033+Honeygo+Blvd,+Perry+Hall,+MD+21128/@39.396147,-76.4533005,17z/data=!3m1!4b1!4m5!3m4!1s0x89c7e27952d635f7:0xb9120a84697d4dd1!8m2!3d39.396147!4d-76.4511118?shorturl=1"
                    target="_blank"
                  >
                    HoneyGo Run Field
                  </Link>
                  .
                </Typography>
                <Typography
                  sx={{
                    border: "none",
                    fontWeight: 100,
                    fontSize: "12px",
                    fontFamily: "Questrial",
                    margin: "0px 20px",
                  }}
                >
                  Field 2 :{" "}
                  <Link
                    href="https://www.google.com/maps/place/11723+Eastern+Ave,+Middle+River,+MD+21220/@39.344897,-76.3913727,17z/data=!3m1!4b1!4m5!3m4!1s0x89c7e335053023df:0xd0febe16b73039e9!8m2!3d39.344897!4d-76.389184?q=11723+Eastern+Ave,+Middle+River,+MD+21220&uact=5&gs_lcp=Cgdnd3Mtd2l6EAMyAggmOgcIABBHELADSgQIQRgASgQIRhgAULcDWLcDYJIFaANwAXgAgAFoiAFokgEDMC4xmAEAoAECoAEByAEIwAEB&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjWnMnEtp_4AhUomIkEHZV9D8cQ_AUoAXoECAEQAw&shorturl=1"
                    target="_blank"
                  >
                    Eastern Regional Park
                  </Link>
                  .
                </Typography>
              </ListItemText>
            </FAQCollapse>
          </ListItem>

          <ListItem>
            <FAQCollapse question="Are there hotels near by the fields?">
              <ListItemText>
                <Typography
                  sx={{
                    border: "none",
                    fontWeight: 100,
                    fontSize: "12px",
                    fontFamily: "Questrial",
                    margin: "0px 20px",
                  }}
                >
                  Yes, we are currently working with the hotels to get the group
                  rate. Please bear with us while we work with the hotels. We
                  will provide the code as soon as it is provided to us. Thank
                  you for your patience!
                </Typography>
              </ListItemText>
            </FAQCollapse>
          </ListItem>

          <ListItem>
            <FAQCollapse question="What are the nearest airport(s) to the fields/hotel?">
              <ListItemText>
                <Typography
                  sx={{
                    border: "none",
                    fontWeight: 100,
                    fontSize: "12px",
                    fontFamily: "Questrial",
                    margin: "0px 20px",
                  }}
                >
                  [BWI] Baltimore/Washington International Thurgood Marshall
                  Airport: about 25-40 miles to the fields
                </Typography>
                <Typography
                  sx={{
                    border: "none",
                    fontWeight: 100,
                    fontSize: "12px",
                    fontFamily: "Questrial",
                    margin: "0px 20px",
                  }}
                >
                  [PHL] Philadelphia International Airport: about 80-85 miles to
                  the fields
                </Typography>
              </ListItemText>
            </FAQCollapse>
          </ListItem>

          <ListItem>
            <FAQCollapse question="Are there any Nepali restaurants close by?">
              <ListItemText>
                <Typography
                  sx={{
                    border: "none",
                    fontWeight: 100,
                    fontSize: "12px",
                    fontFamily: "Questrial",
                    margin: "0px 20px",
                  }}
                >
                  Yes, definitely. We are currently in the process of compiling
                  the full list of Nepali restaurants. We will provide the list
                  as soon as we have it available.{" "}
                  <Link
                    href="https://www.google.com/maps/search/nepali+restaurant+near+white+marsh,+md/@39.3340406,-76.732968,10z/data=!4m4!2m3!5m1!2e1!6e5?hl=en"
                    target="_blank"
                  >
                    Nepali Stores List
                  </Link>{" "}
                </Typography>
              </ListItemText>
            </FAQCollapse>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
