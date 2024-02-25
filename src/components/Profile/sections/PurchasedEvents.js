import { Grid } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import MytListItem from "./MyEventsList";

// grid style
const GridStyle = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const PurchasedEventList = () => {
  const [events, setAttendeeEvent] = useState([]);

  // JWT Token from Local Storage
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  // fetching Events data from API
  useEffect(() => {
    axios
      .get("http://localhost:5000/events/api/get-attendee-event", config)
      .then((res) => {
        let purchaseevents = res.data.events;
        setAttendeeEvent(purchaseevents);
      });
  }, []);
  

  return (
    <GridStyle container spacing={3}>
      {events.map((event) => (
        <Grid key={event.id} item xs={12} sm={6} md={4} lg={3}>
          <MytListItem key={event.id} product={event} />
        </Grid>
      ))}
    </GridStyle>
  );
};

export default PurchasedEventList;
