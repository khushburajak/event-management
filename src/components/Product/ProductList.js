import { Grid } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";

// grid style
const GridStyle = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const ProductList = () => {
  const [events, setEvents] = useState([]);

  // JWT Token from Local Storage
  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1rbzAiLCJlbWFpbCI6Im1rbzBAZ21haWwuY29tIiwibmFtZSI6Im1rbzAiLCJpZCI6IjYyZDI3ZmU1MzRmOTdjNDQ5NWQzOTNiYiIsImlhdCI6MTY1ODQ4OTMwOSwiZXhwIjoxNjU4NTc1NzA5fQ.PSwvtgJT7l2SMqJ3vUa2_G-ddjdmBGPgUL4vF-xPj1E",
    },
  };
  // fetching Events data from API
  useEffect(() => {
    axios
      .get("http://localhost:5000/events/api/get-event", config)
      .then((res) => {
        let program = res.data.events;
        setEvents(program);
      });
  }, []);

 

  return (
    <GridStyle container spacing={3}>
      {events.map((event) => (
        <Grid key={event.id} item xs={12} sm={6} md={4} lg={3}
       
        >
          <ProductListItem key={event.id} product={event} 
            
          />
         
        </Grid>
      ))}
    </GridStyle>
  );
};

export default ProductList;
