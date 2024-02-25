// @mui material components
import { Box } from "@material-ui/core";
import Card from "@mui/material/Card";

import { styled } from "@material-ui/styles";
import bgImage from "../../images/newsList/cover_5.jpg";
import Footer from "./sections/Footer";
import ProfileSection from "./sections/Profile";
import FullWidthTabs from "./sections/Tabs";


function Profile() 
{
  const CardStyle = styled(Card)(({ theme }) => ({
    borderRadius: theme.spacing(2.5),
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
  }));
  return (
    <>
      <Box bgColor="white">
        <Box
          minHeight="1rem"
          width="100%"
          sx={{
            backgroundImage: ({
              functions: { linearGradient, rgba },
              palette: { gradients },
            }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <CardStyle>
          <ProfileSection />
        </CardStyle>
      </Box>
      <Box>
        <FullWidthTabs />

        <Footer />
      </Box>
    </>
  );
}

export default Profile;
