

// @mui material components
import { Avatar, Box, Button, Typography } from "@material-ui/core";
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";


function ProfileSection() {
  const [userProfile, setUserProfile] = useState([]);

  // JWT Token from Local Storage
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/profiles/api/my-profile", config)
      .then((res) => {
        let profile = res.data.profiles;
        setUserProfile(profile);
      });
  }, []);

  return (
    <Box component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        {userProfile.map(
          (profile) => (
            console.log(profile),
            (
              <Grid container item xs={12} justifyContent="cen  ter" mx="auto">
                <Box textAlign="center">
                  <Avatar alt={profile.account.username} src={profile.avatar} />
                </Box>
                <Grid container justifyContent="center" py={6}>
                  <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                    >
                      <Typography variant="h3">
                        {profile.account.name}
                      </Typography>

                      <Button
                        variant="outlined"
                        color="info"
                        component={RouterLink}
                        to={"/updateProfile/"+profile._id}
                      >
                        Update Profile
                      </Button>
                    </Box>
                    <Grid mb={1} container direction="row" alignItems="center">
                      <Facebook /> @{profile.facebook}
                    </Grid>
                    <Grid mb={1} container direction="row" alignItems="center">
                      <GitHub /> @{profile.github}
                    </Grid>
                    <Grid mb={3} container direction="row" alignItems="center">
                      <LinkedIn /> @{profile.linkedin}
                    </Grid>
                    <Grid container spacing={3} mb={3}>
                      <Grid item>
                        <Typography
                          component="span"
                          variant="body2"
                          fontWeight="bold"
                        >
                          323&nbsp;
                        </Typography>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text"
                        >
                          Posts
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          component="span"
                          variant="body2"
                          fontWeight="bold"
                        >
                          3.5k&nbsp;
                        </Typography>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text"
                        >
                          Followers
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          component="span"
                          variant="body2"
                          fontWeight="bold"
                        >
                          260&nbsp;
                        </Typography>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text"
                        >
                          Following
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography variant="body1" fontWeight="light" color="text">
                      Decisions: If you can&apos;t decide, the answer is no. If
                      two equally difficult paths, choose the one more painful
                      in the short term (pain avoidance is creating an illusion
                      of equality). Choose the path that leaves you more
                      equanimous. <br />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            )
          )
        )}
      </Container>
    </Box>
  );
}

export default ProfileSection;
