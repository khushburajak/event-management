import { Grid, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Helmet } from "react-helmet";
// import ChartCurrentSubject from "../components/Dashboard/ChartCurrentSubject";
import ChartSiteVisits from "../components/Dashboard/ChartSiteVisits";
// import ConversionRate from "../components/Dashboard/ConversionRate";
import CurrentVisits from "../components/Dashboard/CurrentVisits";
// import SocialTraffic from "../components/Dashboard/SocialTraffic";
import InfoCards from "../components/Dashboard/InfoCards";
import ProductList from "../components/Product/ProductList";
// import NewsUpdate from "../components/Dashboard/NewsUpdate";

// grid container style
const GridContainerStyle = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Evento</title>
      </Helmet>

      <Typography variant="h6" component="h2">
        Hi, Welcome in Evento Dash.
      </Typography>

      {/* Info Cards */}
      <InfoCards />

      <GridContainerStyle container spacing={3}>
        {/* Site visits chart */}
        <Grid item xs={12} md={6} lg={8}>
          <ChartSiteVisits />
        </Grid>

        {/* Current Visits */}
        <Grid item xs={12} md={6} lg={4}>
          <CurrentVisits />
        </Grid>

        {/* Events Cards*/}

        <ProductList />

      </GridContainerStyle>
    </>
  );
};

export default Dashboard;
